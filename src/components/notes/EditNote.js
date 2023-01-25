import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "react-query";
import Spinner from "../spinner/Spinner";
import { TwitterPicker } from "react-color";
import reactCSS from 'reactcss'

const EditNote = () => {
    const queryClient = useQueryClient()

    const api = process.env.REACT_APP_ALL_NOTES
    const { user } = useAuth0();
   
    const {id} = useParams()

    const[isFetching, setIsfetching] = useState(true)

    const[title, setTitle] = useState('')
    const[body, setBody] = useState('')
    const[color, setColor] = useState('')
    const[pinned, setPinned] = useState()
    const[showColorPicker, setShowColorPicker] = useState(false)
    const{email} = user

    useEffect(()=>{
        axios.get(`${api}/${id}`)
        .then(data=>{
            setTitle(data?.data.title)
            setBody(data?.data.body)
            setColor(data?.data.color)
            setPinned(data?.data.pinned)
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

        if (title==='') {
            toast.error('Missing title!')
        } else {      
            try {
                noteMutation.mutate({title:title, body:body, user_id: email, color:color, pinned:pinned})
                toast.success('Note updated successfully!')
            } catch (error) {
                toast.error('Something went wrong!')
            }
        }
        
    }

    const styles = reactCSS({
        'default': {
            color: {
                width: '46px',
                height: '46px',
                background: color,
                borderRadius: '8px',
              }, 
            swatch: {
              cursor: 'pointer',
            },
            popover: {
                position: 'absolute',
                top:'220px',
                right:'66px'
            },
            cover: {
                zIndex: '1',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
            picker :{
                position:'relative',
                zIndex: '3',
                top:'150px'
              }

          },
    })

    return ( 
        <div className="lg:mx-8 md:mx-4 sm:mx-2">
        <form onSubmit={updateNote}>
        <div className="flex items-center justify-between mb-12 mt-20">
                <Link className="text-xl font-semibold" to={"/dashboard"}> ←Back</Link>
                <div className="flex justify-end">
                    <div style={ styles.swatch } onClick={()=>setShowColorPicker(showColorPicker => !showColorPicker)}>
                        <div className="flex">
                            <div className="text-sm xl:mx-4 pt-2 lg:mx-4 pt-3 mx-2 md:pt-3 mx-2 ">Note color</div>
                            <div style={ styles.color }/>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <Link className="btn btn-secondary btn-outline mr-2 md:btn-md lg:btn-md xl:btn-md sm:btn-sm" to={"/dashboard"}>Cancel</Link>
                    {showColorPicker&&(
                        <div style={ styles.popover }>
                            <div style={ styles.cover }>
                                <TwitterPicker
                                styles={styles.picker}
                                colors={['#FECACA','#FED7AA','#d9f99d','#fef08a','#e0f2fe','#bbf7d0','#e9d5ff']} 
                                color={color}
                                onChange={updatedColor => setColor(updatedColor.hex)}
                                />
                            </div>
                        </div>
                    )}
                    {noteMutation.isLoading ?
                        <button className="btn loading md:btn-md lg:btn-md xl:btn-md sm:btn-sm">loading</button> 
                        :
                        <button type="submit" className="btn btn-secondary md:btn-md lg:btn-md xl:btn-md sm:btn-sm">Save</button>
                    }
                </div>
            </div>
            {isFetching ?          
                <div className="grid justify-items-center">
                    <Spinner/>
                </div> 
                :
                <div className="grid grid-cols-6 gap-4 justify-items-arround">
                    <input type="text" placeholder="Write Your Note's title..." className="input input-ghost mb-8 text-4xl p-4 col-start-2 col-span-4"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>

                    <textarea className="textarea textarea-ghost text-2xl col-start-2 col-span-4 h-60" placeholder="Your thoughts..."
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}></textarea>
                </div>
            }
        </form>
        </div>
     );
}
 
export default EditNote;