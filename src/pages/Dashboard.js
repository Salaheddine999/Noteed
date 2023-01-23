import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import NoteList from "../components/notes/NoteList";
import Spinner from "../components/spinner/Spinner";
import { useNotesData } from "../hooks/useNote";
import { useState } from "react";

const Dashboard = () => {

  const [sortOrder, setSortOrder] = useState('desc');
  const { user, isAuthenticated } = useAuth0();
  const { email } = user

  const {data, isFetching} = useNotesData(email)

  const sortedData = data?.data.sort((a, b) => {
    if (sortOrder === 'asc') {
        return new Date(a.created_at) - new Date(b.created_at)
    } else {
      return new Date(b.created_at) - new Date(a.created_at)
    }
  })

  return (
    isAuthenticated && (
      <div className="mx-8 lg:mx-8 md:mx-4 sm:mx-2">
        <div className="grid grid-cols-2 mb-10 mt-20">
          <h2 className="text-5xl font-semibold lg:text-5xl md:text-xl sm:text-xl">My notes</h2>
        </div>

        <div className="navbar mb-14">
          <div className="flex-1">
            <p className="font-semibold text-lg">Notes list</p>
          </div>
          <div className="flex-none">  
            <select className="select select-ghost select-md mr-3">
              <option selected disabled>Sort by</option>
              <option onClick={()=>setSortOrder('asc')}>Old</option>
              <option onClick={()=>setSortOrder('desc')}>New</option>
            </select>
            <Link className="btn gap-2" to={"/add-note"}>
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
          ( sortedData?.length > 0?
            (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              {sortedData?.map(note=>(
                  <NoteList key={note.id} note={note}/>
              ))}
            </div>
            )
            :
            <div className="grid justify-items-center">
              <p>You don't have any notes yet.</p>
            </div>
          ) 
        }
   
      </div>
    )
  );
};

export default Dashboard;