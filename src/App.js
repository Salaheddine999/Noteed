import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth0ProviderWithNavigate from './auth/auth0Provider';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { QueryClientProvider, QueryClient } from 'react-query';
import AddNote from './components/notes/AddNote';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditNote from './components/notes/EditNote';

const queryClient = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className='justify-arround mt-3 mx-12'>
          <Auth0ProviderWithNavigate>
            <Navbar/>
            <main className='px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/add-note' element={<AddNote/>}/>
                <Route path='/edit-note/:id' element={<EditNote/>}/>
              </Routes>
            </main>
          </Auth0ProviderWithNavigate>
        </div>
      </BrowserRouter>
      <ToastContainer 
      autoClose={1500}
      position="bottom-center"
      hideProgressBar={true}
      closeOnClick
      />
    </QueryClientProvider>
  );
}

export default App;
