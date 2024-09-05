import NoteItem from './NoteItem';

const NoteList = (props) => {
    return (
        <>
            <NoteItem note={props.note} />
        </>
    );
};

export default NoteList;
