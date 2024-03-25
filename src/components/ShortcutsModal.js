import React from 'react';
import { IoMdClose } from 'react-icons/io';

export default function ShortcutsModal() {
    return (
        <dialog id="my_modal_1" className="modal">
            <div className="modal-box rounded-lg p-12 max-w-xl">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        <IoMdClose className="w-6 h-6" />
                    </button>
                </form>
                <h3 className="font-medium text-lg mb-4 font-normal">
                    Welcome to Noteed! Get started with these simple
                    instructions:
                </h3>
                <p className="py-2">
                    <span className="font-medium">Create a new note: </span>
                    Click the "+" button to create a new note.
                </p>
                <p className="py-2">
                    <span className="font-medium">Edit a Note: </span> Simply
                    click on a note to start editing its content.
                </p>
                <p className="py-2">
                    <span className="font-medium">Change Note Color: </span>
                    Click on the color box to choose a color for your note.
                </p>
                <p className="py-2">
                    <span className="font-medium">Delete a Note: </span> Click
                    the trash bin icon to delete a note.
                </p>
                <p className="py-2">
                    <span className="font-medium">Lock/Unlock Note: </span> To
                    lock or unlock a note, click the lock icon.
                </p>
                <p className="py-2">
                    <span className="font-medium">Export Note: </span> Click the
                    export icon to save your note as a file.
                </p>
                <p className="py-2">
                    <span className="font-medium">Print Note: </span> Use the
                    print icon to print your note.
                </p>
                <p className="py-2">
                    <span className="font-medium">Share Note: </span> Click the
                    share icon to generate a link to share your note.
                </p>
                <h3 className="font-medium text-md my-4 font-normal">
                    Keyboard shortcuts:
                </h3>
                <div className="py-2 flex items-center justify-between">
                    <p>New note</p>
                    <p>
                        <span className="kbd kbd-md rounded-md border-none">
                            Ctrl
                        </span>{' '}
                        +&nbsp;
                        <span className="kbd kbd-md rounded-md border-none">
                            Alt
                        </span>{' '}
                        +&nbsp;
                        <span className="kbd kbd-md rounded-md border-none">
                            N
                        </span>
                    </p>
                </div>
                <div className="py-2 flex items-center justify-between">
                    <p>Save note</p>
                    <p>
                        <span className="kbd kbd-md rounded-md border-none">
                            Ctrl
                        </span>{' '}
                        +&nbsp;
                        <span className="kbd kbd-md rounded-md border-none">
                            S
                        </span>
                    </p>
                </div>
                <div className="py-2 flex items-center justify-between">
                    <p>Export note</p>
                    <p>
                        <span className="kbd kbd-md rounded-md border-none">
                            Ctrl
                        </span>{' '}
                        +&nbsp;
                        <span className="kbd kbd-md rounded-md border-none">
                            E
                        </span>
                    </p>
                </div>
                <div className="py-2 flex items-center justify-between">
                    <p>Print note</p>
                    <p>
                        <span className="kbd kbd-md rounded-md border-none">
                            Ctrl
                        </span>{' '}
                        +&nbsp;
                        <span className="kbd kbd-md rounded-md border-none">
                            p
                        </span>
                    </p>
                </div>
                <div className="py-2 flex items-center justify-between">
                    <p>Cancel</p>
                    <p>
                        <span className="kbd kbd-md rounded-md border-none">
                            Esc
                        </span>
                    </p>
                </div>
                <p className="text-md font-medium mt-8">
                    Enjoy a seamless note-taking experience with Noteed!
                </p>
            </div>
        </dialog>
    );
}
