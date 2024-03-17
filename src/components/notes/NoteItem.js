import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { TbTrash } from 'react-icons/tb';
import { IoIosShareAlt } from 'react-icons/io';
import parse from 'html-react-parser';
import Modal from '../Modal';
import { useDeleteNote } from '../../hooks/useNote';

const NoteItem = ({ note }) => {
    const { id, title, body, color } = note;

    const { user } = useAuth0();
    const { name } = user;

    const { mutate: noteMutation } = useDeleteNote();

    const deleteNote = () => {
        try {
            noteMutation(id);
            toast.success('Note deleted!');
        } catch (error) {
            toast.error('Something went wrong!');
        }
    };

    const shareNote = async () => {
        const encodedTitle = encodeURIComponent(title);
        const encodedBody = encodeURIComponent(body);
        const encodedColor = encodeURIComponent(color);
        const encodedUser = encodeURIComponent(name);

        const path = `/shared-note?title=${encodedTitle}&body=${encodedBody}&color=${encodedColor}&user=${encodedUser}`;
        const url = window.location.origin + path;

        try {
            const response = await axios.get(
                `https://tinyurl.com/api-create.php?url=${url}`,
            );
            const shortUrl = response.data;
            navigator.clipboard.writeText(shortUrl);
            toast.success('Share link copied to clipboard!');
        } catch (error) {
            toast.error('Failed to shorten URL');
        }
    };

    function htmlToReact(html) {
        return parse(html);
    }

    const bodyRef = useRef(null);
    useEffect(() => {
        if (bodyRef.current) {
            const lineHeight = parseFloat(
                getComputedStyle(bodyRef.current)['line-height'],
            );
            bodyRef.current.style.maxHeight = `${lineHeight * 3}px`;
            bodyRef.current.style.overflow = 'hidden';
        }
    }, []);

    return (
        <>
            <div
                className="w-full rounded-md group"
                key={id}
                style={{
                    background: `color-mix(in srgb, ${color} , transparent 20%)`,
                }}
            >
                <div className="card-body p-6">
                    <div className="dropdown dropdown-end">
                        <div className="grid grid-cols-2">
                            <h2 className="card-title col-start-1 col-end-6 font-medium text-xl text-black">
                                {title}
                            </h2>
                            <div className="card-actions justify-end col-end-7 col-span-1">
                                <label
                                    htmlFor={`my-modal-${note.id}`}
                                    className="rounded-md md:opacity-0 lg:opacity-0 sm:opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer text-black"
                                >
                                    <TbTrash className="w-[18px] h-[18px]" />
                                </label>
                                <label
                                    className="rounded-md md:opacity-0 lg:opacity-0 sm:opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer text-black"
                                    onClick={shareNote}
                                >
                                    <IoIosShareAlt className="w-[18px] h-[18px]" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <Link to={`/edit-note/${id}`}>
                        <p
                            ref={bodyRef}
                            className="font-normal text-base leading-[1.4] text-black"
                        >
                            {htmlToReact(body)}
                        </p>
                    </Link>
                </div>
            </div>
            <Modal deleteNote={deleteNote} id={id} />
        </>
    );
};

export default NoteItem;
