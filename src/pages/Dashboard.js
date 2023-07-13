import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import NoteList from "../components/notes/NoteList";
import Spinner from "../components/spinner/Spinner";
import { useNotesData, usePinnedNotes } from "../hooks/useNote";
import { useState } from "react";

const Dashboard = () => {

  const [sortOrder, setSortOrder] = useState('desc');
  const { user, isAuthenticated, isLoading, error } = useAuth0();
  const { email } = user

  const {data, isFetching} = useNotesData(email)
  //const {data: pinnedNotes} = usePinnedNotes(email)

  const sortedData = data?.data.sort((a, b) => {
    if (sortOrder === 'asc') {
        return new Date(a.created_at) - new Date(b.created_at)
    } else {
        return new Date(b.created_at) - new Date(a.created_at)
    }
  })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }


    return (
      isAuthenticated && (
          <div className="-mx-4 lg:mx-8 md:mx-4 sm:mx-2">
            <div className="grid grid-cols-2 mb-10 mt-20">
              <h2 className="text-4xl font-medium lg:text-5xl md:text-5xl sm:text-5xl">My notes</h2>
            </div>
            <div className="grid grid-cols-2 my-8 lg:mb-0 md:mb-0 sm:mb-0">
              <h5 className="font-normal text-xl lg:hidden md:hidden sm:hidden">Notes list</h5>
            </div>

            <div className="navbar mb-14">
              <div className="flex-1">
                <p className="font-normal hidden lg:inline md:inline sm:inline lg:text-lg md:text-lg sm:text-lg">Notes list</p>
              </div>
              <div className="flex-none">
                <p className="text-sm font-normal mr-2">Sort by</p>
                <div className="dropdown dropdown-end mr-3">
                  <label tabIndex={0} className="btn btn-outline m-1 normal-case rounded-md font-normal">{sortOrder === 'desc' ? 'Newest' : 'Oldest'}&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                    </svg>
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-36">
                    <li><a onClick={()=>setSortOrder('desc')} className="text-sm rounded-md">Newest</a></li>
                    <li><a onClick={()=>setSortOrder('asc')} className="text-sm rounded-md">Oldest</a></li>
                  </ul>
                </div>
                <Link className="btn btn-primary gap-2 rounded-md font-normal border bg-primary text-base-100 normal-case" to={"/add-note"}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  New
                </Link>
              </div>
            </div>

            {isFetching ? 
              <div className="grid justify-items-center">
                  <Spinner/>
              </div>
            :
              ( sortedData?.length > 0 ?
                (
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                  {/* {pinnedNotes?.data.map(note=>(
                      <NoteList key={note.id} note={note}/>
                  ))} */}

                  {sortedData?.map(note=>(
                      <NoteList key={note.id} note={note}/>
                  ))}
                </div>
                )
                :
                <div className="grid justify-items-center font-normal">
                  <p>You don't have any notes yet.</p>
                </div>
              ) 
            }
          </div>
      )
      
    );
 
};

export default Dashboard;