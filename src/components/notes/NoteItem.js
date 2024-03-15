import Modal from "../Modal";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import {useDeleteNote} from "../../hooks/useNote"
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { usePinnedNotes } from "../../hooks/useNote";
import { TbTrash } from "react-icons/tb";
import { IoIosShareAlt } from "react-icons/io";


const NoteItem = ({note}) => {

    const api = process.env.REACT_APP_ALL_NOTES

    const {id, title, body, color, pinned} = note

    const { user } = useAuth0();
    const{email, name} = user

    const {mutate:noteMutation} = useDeleteNote()
    
    //const {data: pinnedNotes} = usePinnedNotes(email)

    const queryClient = useQueryClient()

//     const notePinnMutation = useMutation(updateNote => {
//         return axios.post(`${api}/${id}`, updateNote)
//        },{
//         onSuccess: () =>{
//             queryClient.invalidateQueries('pinned_notes')
//             queryClient.invalidateQueries('notes')
//        }
//    })

    const deleteNote = () =>{
        try {
            noteMutation(id)
            toast.success('Note deleted!')
        } catch (error) {
            toast.error('Something went wrong!')
        }  
    }

    const shareNote = async () => {
        const encodedTitle = encodeURIComponent(title);
        const encodedBody = encodeURIComponent(body);
        const encodedColor = encodeURIComponent(color);
        const encodedUser= encodeURIComponent(name);

        const path = `/shared-note?title=${encodedTitle}&body=${encodedBody}&color=${encodedColor}&user=${encodedUser}`;
        const url = window.location.origin + path;
      
        try {
          const response = await axios.get(`http://tinyurl.com/api-create.php?url=${url}`);
          const shortUrl = response.data;
          navigator.clipboard.writeText(shortUrl);
          toast.success('Share link copied to clipboard!');
        } catch (error) {
          toast.error('Failed to shorten URL');
        }
      };

    // const handelChange = () =>{
    //     notePinnMutation.mutate({title:title, body:body, user_id: email, color:color, pinned:!pinned})
    // }

    return ( 
        <>
        <div className='w-full rounded-md group' key={id} style={{background: `color-mix(in srgb, ${color} , transparent 20%)`}}>
                <div className="card-body p-6">
                    <div className="dropdown dropdown-end">
                        <div className="grid grid-cols-2">
                            <h2 className="card-title col-start-1 col-end-6 font-medium text-xl text-black">{title}</h2>
                            <div className="card-actions justify-end col-end-7 col-span-1">
                                {/* {pinned ? 
                                    <RiPushpin2Line className="w-4 h-4" onClick={handelChange}/>
                                    : 
                                    (pinnedNotes?.data.length < 3 || pinned === true ?
                                        <RiPushpinLine className="w-4 h-4" onClick={handelChange}/>
                                        :
                                        <TbPinnedOff/>) 
                                }  */}
                                <label htmlFor={`my-modal-${note.id}`} className="rounded-md md:opacity-0 lg:opacity-0 sm:opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer text-black">
                                    <TbTrash  className="w-[18px] h-[18px]"/>
                                </label>
                                <label className="rounded-md md:opacity-0 lg:opacity-0 sm:opacity-100 group-hover:opacity-100 transition-opacity cursor-pointer text-black" onClick={shareNote}>
                                    <IoIosShareAlt className="w-[18px] h-[18px]"/>
                                </label>
                               
                            </div>
                        </div>
                    </div>
                <Link to={`/edit-note/${id}`}>
                    <p className="font-normal text-base leading-[1.4] text-black">{body}</p>                    
                </Link>
                </div>
                                
          </div>
          <Modal deleteNote={deleteNote} id={id}/>
        </>
     );
}
 
export default NoteItem;