import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAddNote } from "../../hooks/useNote";

const AddNote = () => {
    
    const { user } = useAuth0();
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const{email} = user

    const noteData = {
    title: title,
    body: body,
    user_id: email
    }
    const{mutate:noteMutation} = useAddNote()

    const addNote =(e)=>{
        e.preventDefault()
        try {
            noteMutation(noteData)
            toast.success("Your note was saved successfully")
            setTitle('')
            setBody('')
        } catch (error) {
            toast.error("Something went wrong")
        }  
    }


    return ( 
        <div className="mx-8">
        <form onSubmit={addNote}>
            <div className="grid grid-cols-2 gap-2 mb-12 mt-20">
                <Link className="text-xl font-semibold" to={"/dashboard"}> &#8592;Back</Link>
                <Link className="btn btn-secondary btn-outline col-start-5 col-end-6" to={"/dashboard"}>Cancel</Link>
                {noteMutation.isLoading ?
                    <button className="btn loading col-end-7">loading</button> 
                    :
                    <button type="submit" className="btn btn-secondary col-end-7">Save</button>
                }
                
            </div>
            <div className="grid grid-cols-6 gap-4 justify-items-arround">
                <input type="text" placeholder="Write Your Note's title..." className="input input-ghost mb-8 text-4xl p-4 col-start-2 col-span-4"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}/>

                <textarea className="textarea textarea-ghost text-2xl col-start-2 col-span-4 h-40" placeholder="Your thoughts..."
                value={body}
                onChange={(e)=>setBody(e.target.value)}></textarea>
            </div>
        </form>
        </div>
     );
}
 
export default AddNote;