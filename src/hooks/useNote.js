import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

//API'S
const api = process.env.REACT_APP_ALL_NOTES
const userNotes = process.env.REACT_APP_NOTES_API

const fetchNotes = (email) =>{
    return axios.get(`${userNotes}?user_email=${email}`)
  }

const fetchNote = (id) =>{
    return axios.get(`${api}/${id}`)
  }

const deleteNote = (id) =>{
  return axios.delete(`${api}/${id}`)
}

const addNote = (noteData) =>{
  return axios.post(`${api}`, noteData)
}

//Fetch all notes by user
export const useNotesData = (email) => {
  return useQuery('notes', ()=>fetchNotes(email),{
    refetchOnWindowFocus: false
  })
}

//Fetch note by ID
export const useNote = (id) => {
    return useQuery(['note', id], ()=>fetchNote(id))
}

//Delete note by ID
export const useDeleteNote = (id) => {
    const queryClient = useQueryClient()
    return useMutation(deleteNote,{
      onSuccess: () =>{
        queryClient.invalidateQueries('notes')
      }
    })
}

//Add note
export const useAddNote = () =>{
    const queryClient = useQueryClient()
    return useMutation(addNote,{
      onSuccess: () =>{
        queryClient.invalidateQueries('notes')
      }
    })
}