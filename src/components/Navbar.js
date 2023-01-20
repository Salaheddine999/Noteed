import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from "../auth/LogoutButton"



const Navbar = () => {

  const { user, isAuthenticated, isLoading } = useAuth0();


    return ( 
        <>
        <div className="navbar bg-base-400">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-3xl font-mono">✏️Noteed</a>
            </div>
            {isAuthenticated &&
            <>
                <div className="dropdown dropdown-end">
                    <div className='avatar'>
                        <div>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.picture} />
                            </div>
                            </label>
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <LogoutButton />
                        </li>
                    </ul>
                </div>
            </>
            }
        </div>
            
        </>
     );
}
 
export default Navbar;