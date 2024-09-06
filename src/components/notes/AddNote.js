import { Link, useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { useAddNote } from '../../hooks/useNote';
import { TwitterPicker } from 'react-color';
import reactCSS from 'reactcss';
import { TbFileExport } from 'react-icons/tb';
import { FiPrinter } from 'react-icons/fi';
import { MdLockOutline, MdLockOpen } from 'react-icons/md';
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Heading from '@tiptap/extension-heading';
import Placeholder from '@tiptap/extension-placeholder';
import { useQueryClient } from 'react-query';

import {
    RiBold,
    RiItalic,
    RiStrikethrough,
    RiCodeFill,
    RiUnderline,
    RiPaletteLine,
    RiMarkPenLine,
    RiListUnordered,
    RiListCheck2,
    RiListOrdered,
} from 'react-icons/ri';

const AddNote = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [editorContent, setEditorContent] = useState('');
    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            TextStyle,
            Color,
            BulletList,
            OrderedList,
            ListItem,
            Highlight.configure({ multicolor: true }),
            TaskList,
            TaskItem.configure({
                nested: true,
            }),
            Heading.configure({
                levels: [1, 2],
            }),
            Placeholder.configure({
                placeholder: 'Your thoughts...',
            }),
        ],
        editorProps: {
            attributes: {
                class: '-mt-4 text-xl sm:text-2xl h-60 overflow-y-auto focus:border-transparent focus:outline-none disabled:bg-transparent disabled:border-transparent',
            },
        },
        content: '',
        onUpdate({ editor }) {
            setEditorContent(editor.getHTML());
        },
    });

    const [isLocked, setIsLocked] = useState(false);

    const toggleLock = () => {
        setIsLocked((prevState) => !prevState);
    };

    const { user } = useAuth0();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [color, setColor] = useState('#E5E7EB');
    const [showColorPicker, setShowColorPicker] = useState(false);
    const { email } = user;

    const [audioUrl, setAudioUrl] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const mediaRecorderRef = useRef(null);
    const [audioData, setAudioData] = useState(null);

    const noteData = {
        title: title,
        body: editorContent,
        user_id: email,
        color: color,
        audio_data: audioData,
    };
    const { mutate: noteMutation, isLoading: isAddingNote } = useAddNote();

    const addNote = (e) => {
        e.preventDefault();
        try {
            if (title === '') {
                toast.error('Missing title!');
                return;
            } else if (editorContent === '' && !audioData) {
                toast.error('Please add some content or record audio!');
                return;
            } else {
                noteMutation(noteData, {
                    onSuccess: () => {
                        queryClient.invalidateQueries('notes');
                        toast.success('Your note was saved successfully');
                        navigate('/dashboard');
                    },
                    onError: (error) => {
                        console.error('Error adding note:', error);
                        toast.error('Something went wrong');
                    },
                });
            }
        } catch (error) {
            console.error('Error in addNote function:', error);
            toast.error('Something went wrong');
        }
    };

    const handleExport = (e) => {
        e.preventDefault();
        if (title === '' || body === '') {
            toast.error('Missing title or body!');
        } else {
            const fileName = `${title || 'note'}.txt`;
            const content = `${title}\n\n${body}`;

            const element = document.createElement('a');
            const file = new Blob([content], { type: 'text/plain' });
            element.href = URL.createObjectURL(file);
            element.download = fileName;
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
    };

    const handlePrint = (e) => {
        e.preventDefault();
        const printContent = `
            <html>
            <head>
                <title>Note Print</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 20px;
                    }
                    h1 {
                        font-size: 24px;
                        margin-bottom: 10px;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.5;
                    }
                </style>
            </head>
            <body>
                <h1>${title}</h1>
                <p>${body}</p>
            </body>
            </html>
        `;

        if (title === '' && body === '') {
            toast.error('Missing content!');
        } else {
            const popupWin = window.open('', '_blank', 'width=600,height=600');
            popupWin.document.open();
            popupWin.document.write(printContent);
            popupWin.document.close();
            popupWin.print();
        }
    };

    const inputRef = useRef(null);
    const handleClick = (e) => {
        e.preventDefault();
        inputRef.current.click();
    };

    const styles = reactCSS({
        default: {
            color: {
                width: '46px',
                height: '46px',
                background: color,
                borderRadius: '8px',
            },
            swatch: {
                cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                top: '220px',
            },
            cover: {
                zIndex: '1',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
            picker: {
                position: 'relative',
                zIndex: '3',
                top: '150px',
            },
        },
    });

    const handleAudioRecording = async () => {
        if (isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        } else {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.ondataavailable = async (event) => {
                    if (event.data.size > 0) {
                        const audioBlob = new Blob([event.data], {
                            type: 'audio/wav',
                        });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        setAudioUrl(audioUrl);

                        // Convert blob to base64
                        const reader = new FileReader();
                        reader.readAsDataURL(audioBlob);
                        reader.onloadend = () => {
                            const base64Audio = reader.result;
                            setAudioData(base64Audio);
                        };
                    }
                };

                mediaRecorder.start();
                setIsRecording(true);
            } catch (error) {
                console.error('Error accessing microphone:', error);
                toast.error('Unable to access microphone');
            }
        }
    };

    return (
        <div className="-mx-2 lg:mx-8 md:mx-4 sm:mx-2 text-primary">
            <form onSubmit={addNote}>
                <div className="lg:flex md:flex sm:flex items-center justify-between mb-12 mt-20">
                    <Link className="text-xl font-medium" to={'/dashboard'}>
                        {' '}
                        ← Back
                    </Link>
                    <div className="flex justify-end mt-10 lg:mt-0 md:mt-0 sm:mt-0">
                        <div
                            className=""
                            style={styles.swatch}
                            onClick={() =>
                                setShowColorPicker(
                                    (showColorPicker) => !showColorPicker,
                                )
                            }
                        >
                            <div className="flex">
                                <div className="text-sm xl:mx-4 pt-3 pr-2 sm:pr-0 lg:mx-4 md:pt-3 lg:text-sm md:text-sm sm:text-sm">
                                    Note color
                                </div>
                                <div style={styles.color} />
                            </div>
                        </div>
                        <div className="divider divider-horizontal"></div>
                        <Link
                            id="cancelButton"
                            className="btn btn-primary btn-outline mr-2 font-normal rounded-md border-2 md:btn-md lg:btn-md xl:btn-md sm:btn-sm normal-case"
                            to={'/dashboard'}
                        >
                            Cancel
                        </Link>
                        {showColorPicker && (
                            <div
                                className="sm:mr-[5px] sm:mt-[0px] mt-[68px] mr-[8px]"
                                style={styles.popover}
                            >
                                <div style={styles.cover}>
                                    <TwitterPicker
                                        styles={styles.picker}
                                        colors={[
                                            '#FECACA',
                                            '#FED7AA',
                                            '#d9f99d',
                                            '#fef08a',
                                            '#e0f2fe',
                                            '#bbf7d0',
                                            '#e9d5ff',
                                        ]}
                                        color={color}
                                        onChange={(updatedColor) =>
                                            setColor(updatedColor.hex)
                                        }
                                    />
                                </div>
                            </div>
                        )}
                        {isAddingNote ? (
                            <button
                                className="btn btn-primary rounded-md font-normal md:btn-md lg:btn-md xl:btn-md sm:btn-sm normal-case"
                                disabled
                            >
                                <span className="loading loading-spinner"></span>
                                Saving...
                            </button>
                        ) : (
                            <button
                                id="saveButton"
                                type="submit"
                                className="btn btn-primary rounded-md font-normal md:btn-md lg:btn-md xl:btn-md sm:btn-sm normal-case"
                            >
                                Save
                            </button>
                        )}
                        <label className="swap ml-4">
                            <input
                                type="checkbox"
                                checked={isLocked}
                                onChange={toggleLock}
                            />
                            <MdLockOutline className="swap-on fill-current w-6 h-6" />
                            <MdLockOpen className="swap-off fill-current w-6 h-6" />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col sm:mx-20">
                    <input
                        type="text"
                        placeholder="Write your note's title..."
                        className={`input input-ghost mb-8 text-3xl sm:text-4xl p-4 col-start-1 col-span-2 sm:col-start-2 sm:col-span-4 focus:border-transparent focus:outline-none disabled:bg-transparent disabled:border-transparent ${
                            isLocked ? 'locked' : ''
                        }`}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <div
                        className={`textarea textarea-ghost text-xl resize-none sm:text-2xl col-start-1 sm:col-start-2 sm:col-span-4 h-60 focus:border-transparent focus:outline-none disabled:bg-transparent disabled:border-transparent ${
                            isLocked ? 'locked' : ''
                        }`}
                    >
                        {editor && (
                            <BubbleMenu
                                className="bubble-menu"
                                tippyOptions={{ duration: 100 }}
                                editor={editor}
                            >
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleBold()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('bold')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiBold className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleItalic()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('italic')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiItalic className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleUnderline()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('underline')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiUnderline className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleStrike()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('strike')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiStrikethrough className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleCode()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('code')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiCodeFill className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleHighlight()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('highlight')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiMarkPenLine className="w-5 h-5" />
                                </button>
                                <input
                                    ref={inputRef}
                                    style={{ display: 'none' }}
                                    type="color"
                                    onInput={(event) =>
                                        editor
                                            .chain()
                                            .focus()
                                            .setColor(event.target.value)
                                            .run()
                                    }
                                    value={
                                        editor.getAttributes('textStyle').color
                                    }
                                    data-testid="setColor"
                                />
                                <button onClick={handleClick}>
                                    <RiPaletteLine className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleHeading({ level: 1 })
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('heading', { level: 1 })
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    H1
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleHeading({ level: 2 })
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('heading', { level: 2 })
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    H2
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleBulletList()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('bulletList')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiListUnordered className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleOrderedList()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('orderedList')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiListOrdered className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        editor
                                            .chain()
                                            .focus()
                                            .toggleTaskList()
                                            .run();
                                    }}
                                    className={
                                        editor.isActive('taskList')
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    <RiListCheck2 className="w-5 h-5" />
                                </button>
                            </BubbleMenu>
                        )}
                        <EditorContent editor={editor} />
                    </div>
                    <div className="mt-8">
                        <button
                            type="button"
                            onClick={handleAudioRecording}
                            className={`btn ${
                                isRecording
                                    ? 'bg-red-500 text-white'
                                    : 'btn-primary'
                            } rounded-md font-normal md:btn-md lg:btn-md xl:btn-md sm:btn-sm normal-case`}
                        >
                            {isRecording ? 'Stop Recording' : 'Start Recording'}
                        </button>
                        {audioUrl && (
                            <audio className="mt-4" controls src={audioUrl} />
                        )}
                    </div>
                </div>
                <div className="card-footer mt-12">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <button
                                    id="exportButton"
                                    className="btn btn-primary btn-outline rounded-md font-normal md:btn-md lg:btn-md xl:btn-md sm:btn-sm normal-case border-2"
                                    onClick={handleExport}
                                >
                                    Export
                                    <TbFileExport className="w-5 h-5" />
                                </button>
                                <button
                                    id="printButton"
                                    className="btn btn-primary btn-outline rounded-md font-normal md:btn-md lg:btn-md xl:btn-md sm:btn-sm normal-case border-2"
                                    onClick={handlePrint}
                                >
                                    Print
                                    <FiPrinter className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddNote;
