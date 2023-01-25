import {IoEllipsisHorizontal, IoTrashOutline, IoPencilOutline} from "react-icons/io5"
import {RiPushpinLine, RiPushpin2Line} from "react-icons/ri"
import {TbPinnedOff} from "react-icons/tb"
import Modal from "../Modal";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {useDeleteNote} from "../../hooks/useNote"
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { usePinnedNotes } from "../../hooks/useNote";

const NoteItem = ({note}) => {

    const api = process.env.REACT_APP_ALL_NOTES

    const {id, title, body, color, pinned} = note

    const { user } = useAuth0();
    const{email} = user

    const {mutate:noteMutation} = useDeleteNote()
    
    const {data: pinnedNotes} = usePinnedNotes(email)

    const queryClient = useQueryClient()

    const notePinnMutation = useMutation(updateNote => {
        return axios.post(`${api}/${id}`, updateNote)
       },{
        onSuccess: () =>{
            queryClient.invalidateQueries('pinned_notes')
            queryClient.invalidateQueries('notes')
       }
   })

    const deleteNote = () =>{
        try {
            noteMutation(id)
            toast.success('Note deleted!')
        } catch (error) {
            toast.error('Something went wrong!')
        }  
    }

    const handelChange = () =>{
        notePinnMutation.mutate({title:title, body:body, user_id: email, color:color, pinned:!pinned})
    }

    return ( 
        <>
        <div className='w-90 m-1' key={id} style={{background: `${color}`}}>
                <div className="card-body" >
                    <div className="dropdown dropdown-end">
                        <div className="grid grid-cols-2">
                            <h2 className="card-title col-start-1 col-end-6">{title}</h2>
                            <div className="card-actions justify-end col-end-7 col-span-1">
                                {pinned ? 
                                    <RiPushpin2Line className="w-4 h-4" onClick={handelChange}/>
                                    : 
                                    (pinnedNotes?.data.length < 3 || pinned === true ?
                                        <RiPushpinLine className="w-4 h-4" onClick={handelChange}/>
                                        :
                                        <TbPinnedOff/>) 
                                }
                                <IoEllipsisHorizontal tabIndex={0} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={`/edit-note/${id}`}><IoPencilOutline/>Edit</Link></li>
                            <li><label htmlFor={`my-modal-${note.id}`}><IoTrashOutline/>Delete</label></li>
                        </ul>
                    </div>
                <Link to={`/edit-note/${id}`}>
                    <p>{body}</p>                    
                </Link>
                </div>
            
          </div>
          <Modal deleteNote={deleteNote} id={id}/>
        </>
     );
}
 
export default NoteItem;