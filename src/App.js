import React, { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Auth0ProviderWithNavigate from './auth/auth0Provider';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { QueryClientProvider, QueryClient } from 'react-query';
import AddNote from './components/notes/AddNote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditNote from './components/notes/EditNote';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import TermsOfUse from './pages/TermsOfUse';
import SharedNote from './pages/SharedNote';
import ShortcutsModal from './components/ShortcutsModal';
import { BsQuestionCircle } from 'react-icons/bs';

const queryClient = new QueryClient();

const ProtectedRoute = ({ component, ...args }) => {
    const Component = withAuthenticationRequired(component, args);
    return <Component />;
};

function App() {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 's') {
                event.preventDefault();
                document.getElementById('saveButton').click(); // Trigger the click event on the save button
            } else if (event.ctrlKey && event.altKey && event.key === 'n') {
                event.preventDefault();
                document.getElementById('newNoteButton').click(); // Trigger the click event on the new note button
            } else if (event.ctrlKey && event.key === 'e') {
                event.preventDefault();
                document.getElementById('exportButton').click(); // Trigger the click event on the export button
            } else if (event.ctrlKey && event.key === 'p') {
                event.preventDefault();
                document.getElementById('printButton').click(); // Trigger the click event on the print button
            } else if (event.key === 'Escape') {
                event.preventDefault();
                document.getElementById('cancelButton').click(); // Trigger the click event on the close button
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
            <ToastContainer
                autoClose={1500}
                position="bottom-center"
                hideProgressBar={true}
                closeOnClick
                style={{ width: 'auto' }}
            />
        </QueryClientProvider>
    );
}

function AppContent() {
    const location = useLocation();
    const isHomeRoute = location.pathname === '/';

    return (
        <div
            className={
                isHomeRoute
                    ? 'absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(246,187,218,0.35),rgba(255,255,255,0))]'
                    : ''
            }
        >
            <div
                className={
                    location.pathname === '/shared-note'
                        ? 'w-full'
                        : 'max-w-7xl sm:mx-auto justify-arround mt-3 mx-6'
                }
            >
                <Auth0ProviderWithNavigate>
                    {location.pathname !== '/shared-note' && <Navbar />}
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute component={Dashboard} />
                                }
                            />
                            <Route
                                path="/terms-of-use"
                                element={<TermsOfUse />}
                            />
                            <Route path="/add-note" element={<AddNote />} />
                            <Route
                                path="/edit-note/:id"
                                element={<EditNote />}
                            />
                            <Route
                                path="/shared-note"
                                element={<SharedNote />}
                            />
                        </Routes>
                    </main>
                </Auth0ProviderWithNavigate>
            </div>
            {location.pathname !== '/' && (
                <>
                    <button
                        className="hidden sm:inline fixed p-3 right-4 bottom-4 z-50 bg-gray-200 rounded-lg border-none hover:bg-gray-300 text-black"
                        onClick={() =>
                            document.getElementById('my_modal_1').showModal()
                        }
                    >
                        <BsQuestionCircle className="w-6 h-6" />
                    </button>
                    <ShortcutsModal />
                </>
            )}
        </div>
    );
}

export default App;
