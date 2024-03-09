import React from 'react';
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

const queryClient = new QueryClient()

const ProtectedRoute = ({ component, ...args }) => {
  const Component = withAuthenticationRequired(component, args);
  return <Component />;
};

function App() {
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
      style={{ width: 'auto' }}/>
    </QueryClientProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/'

  return (
    <div className={isHomeRoute ? 'absolute top-0 z-[-2] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(246,187,218,0.35),rgba(255,255,255,0))]' : ''}>
      <div className='max-w-7xl sm:mx-auto justify-arround mt-3 mx-6 '>
        <Auth0ProviderWithNavigate>
          <Navbar/>
          <main className='px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/dashboard' element={<ProtectedRoute component={Dashboard}/>}/>
              <Route path='/terms-of-use' element={<TermsOfUse/>}/>
              <Route path='/add-note' element={<AddNote/>}/>
              <Route path='/edit-note/:id' element={<EditNote/>}/>
            </Routes>
          </main>
        </Auth0ProviderWithNavigate>
      </div>
    </div>
  );
}

export default App;
