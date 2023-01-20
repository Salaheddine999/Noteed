import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import NoteList from "../components/notes/NoteList";
import Spinner from "../components/spinner/Spinner";
import { useNotesData } from "../hooks/useNote";

const Dashboard = () => {


  const { user, isAuthenticated } = useAuth0();
  const { email } = user

  const {data, isFetching} = useNotesData(email)



  return (
    isAuthenticated && (
      <div className="mx-8 lg:mx-8 md:mx-4 sm:mx-2">
        <div className="grid grid-cols-2 mb-20 mt-20">
          <h2 className="text-5xl font-semibold lg:text-5xl md:text-xl sm:text-xl">My notes</h2>
          <Link className="btn btn-secondary sm:btn-md md:btn-md lg:btn-md col-end-7" to={"/add-note"}>New note</Link>
        </div>
        {isFetching ? 
          <div className="grid justify-items-center">
              <Spinner/>
          </div>
        :
          ( data?.data.length > 0?
            (
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              {data?.data.map(note=>(
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