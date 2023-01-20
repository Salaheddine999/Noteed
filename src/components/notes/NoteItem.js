import {IoEllipsisVertical, IoTrashOutline, IoPencilOutline} from "react-icons/io5"
import Modal from "../Modal";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import {useDeleteNote} from "../../hooks/useNote"

const NoteItem = ({note}) => {

    const {id, title, body} = note

    const {mutate:noteMutation} = useDeleteNote()

    const deleteNote = () =>{
        try {
            noteMutation(id)
            toast.success('Note deleted!')
        } catch (error) {
            toast.error('Something went wrong!')
        }  
    }

    return ( 
        <>
        <div className="card w-90 bg-base-300 m-1" key={id}>
            <div className="card-body">
                <div className="dropdown dropdown-end">
                    <div className="grid grid-cols-2">
                        <h2 className="card-title col-start-1 col-end-6">{title}</h2>
                        <div className="card-actions justify-end col-end-7 col-span-1">
                            <IoEllipsisVertical tabIndex={0} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={`/edit-note/${id}`}><IoPencilOutline/>Edit</Link></li>
                        <li><label htmlFor={`my-modal-${note.id}`}><IoTrashOutline/>Delete</label></li>
                    </ul>
                </div>  
              <p>{body}</p>
            </div>
          </div>
          <Modal  deleteNote={deleteNote} id={id}/>
        </>
     );
}
 
export default NoteItem;