const Modal = ({deleteNote, id}) => {

    return (
        <>
          <input type="checkbox" id={`my-modal-${id}`} className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
            <label htmlFor={`my-modal-${id}`} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="text-xl font-bold">Delete Note</h3>
            <p className="py-4">Are you sure you want to delete this note?</p>
            <div className="modal-action">
                <label htmlFor={`my-modal-${id}`} className="btn btn-warning btn-outline" onClick={deleteNote}>Delete</label>
                <label htmlFor={`my-modal-${id}`} className="btn btn-outline">Cancel</label>
            </div>
            </div>
            </div>
        </>
     );
}
 
export default Modal;