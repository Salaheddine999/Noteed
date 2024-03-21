import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import NoteList from '../components/notes/NoteList';
import Spinner from '../components/spinner/Spinner';
import { useNotesData, usePinnedNotes } from '../hooks/useNote';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronLeft } from 'react-icons/fa';

const Dashboard = () => {
    const [sortOrder, setSortOrder] = useState('desc');
    const { user, isAuthenticated, isLoading, error } = useAuth0();
    const { email } = user;

    const { data, isFetching } = useNotesData(email);
    //const { data: pinnedNotes } = usePinnedNotes(email);

    const sortedData = data?.data.sort((a, b) => {
        if (sortOrder === 'asc') {
            return new Date(a.created_at) - new Date(b.created_at);
        } else {
            return new Date(b.created_at) - new Date(a.created_at);
        }
    });

    const pageSize = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const paginatedData = sortedData?.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Oops... {error.message}</div>;
    }

    return (
        isAuthenticated && (
            <div className="lg:mx-8 md:mx-4 sm:mx-2 text-primary mb-8 sm:mb-0">
                <div className="flex justify-between flex-wrap mt-24 sm:mt-28 mb-6">
                    <h2 className="text-5xl font-normal">Your notes</h2>
                    <div className="flex items-center mt-8 sm:mt-0 flex-row-reverse sm:flex-row">
                        <p className="text-sm font-normal mr-2 hidden sm:inline">
                            Sort by
                        </p>
                        <div className="dropdown dropdown-end mr-3">
                            <label
                                tabIndex={0}
                                className="btn btn-outline m-1 normal-case rounded-md font-normal border-2"
                            >
                                {sortOrder === 'desc' ? 'Newest' : 'Oldest'}
                                &nbsp;
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 w-36 rounded-md"
                            >
                                <li>
                                    <a
                                        onClick={() => setSortOrder('desc')}
                                        className="text-sm rounded-md"
                                    >
                                        Newest
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => setSortOrder('asc')}
                                        className="text-sm rounded-md"
                                    >
                                        Oldest
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Link
                            className="btn btn-primary gap-2 rounded-md font-normal border bg-primary text-base-100 normal-case"
                            to={'/add-note'}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            New
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:mb-0 md:mb-0 sm:mb-0">
                    <h5 className="font-medium text-lg mt-6 mb-8">
                        Notes list
                    </h5>
                </div>

                {isFetching ? (
                    <div className="grid justify-items-center">
                        <Spinner />
                    </div>
                ) : sortedData?.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                            {paginatedData?.map((note) => (
                                <NoteList key={note.id} note={note} />
                            ))}
                        </div>
                        {sortedData.length > pageSize && (
                            <div className="flex justify-center my-8">
                                <button
                                    className="btn capitalize btn-primary font-normal btn-outline rounded-md text-md border-2 mx-2 disabled:opacity-30 disabled:bg-transparent disabled:text-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed"
                                    disabled={currentPage === 1}
                                    onClick={handlePrevPage}
                                >
                                    <FaChevronLeft />
                                </button>
                                <button
                                    className="btn capitalize btn-primary font-normal btn-outline rounded-md text-md border-2 disabled:opacity-30 disabled:bg-transparent disabled:text-gray-500 disabled:border-gray-500 disabled:cursor-not-allowed"
                                    disabled={
                                        currentPage * pageSize >=
                                        sortedData.length
                                    }
                                    onClick={handleNextPage}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="grid justify-items-center font-normal">
                        <p>You don't have any notes yet.</p>
                    </div>
                )}
            </div>
        )
    );
};

export default Dashboard;
