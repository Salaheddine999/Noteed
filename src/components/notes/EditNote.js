import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import Spinner from "../spinner/Spinner";

const EditNote = () => {
    const queryClient = useQueryClient()

    const api = process.env.REACT_APP_ALL_NOTES
    const { user } = useAuth0();
   
    const {id} = useParams()

    const[isFetching, setIsfetching] = useState(true)
    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const{email} = user

    useEffect(()=>{
        axios.get(`${api}/${id}`)
        .then(data=>{
            setTitle(data?.data.title)
            setBody(data?.data.body)
            setIsfetching(false)
        });
    },[])

    const noteMutation = useMutation(updateNote => {
        return axios.post(`${api}/${id}`, updateNote)
       
       },{
        onSuccess: () =>{
            queryClient.invalidateQueries('notes')
       }
   })

    const updateNote = e =>{
        e.preventDefault()
        try {
            noteMutation.mutate({title:title, body:body, user_id: email})
            toast.success('Note updated successfully!')
        } catch (error) {
            toast.error('Something went wrong!')
        }
    }

    return ( 
        <div className="mx-8">
        <form onSubmit={updateNote}>
            <div className="grid grid-cols-2 gap-2 mb-12 mt-20">
                <Link className="text-xl font-semibold" to={"/dashboard"}> &#8592;Back</Link>
                <Link className="btn btn-secondary btn-outline col-start-5 col-end-6" to={"/dashboard"}>Cancel</Link>
                {noteMutation.isLoading ?
                    <button className="btn loading col-end-7">loading</button> 
                    :
                    <button type="submit" className="btn btn-secondary col-end-7">Save</button>
                }
            </div>
            {isFetching ? 
            <div className="grid justify-items-center">
              <Spinner/>
            </div>
            :
            <div className="grid grid-cols-6 gap-4 justify-items-arround">
                <input type="text" placeholder="Write Your Note's title..." className="input input-ghost mb-8 text-4xl p-4 col-start-2 col-span-4"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />

                <textarea className="textarea textarea-ghost text-2xl col-start-2 col-span-4 h-40" placeholder="Your thoughts..."
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
            </div>
            }
                
        </form>
        </div>
     );
}
 
export default EditNote;