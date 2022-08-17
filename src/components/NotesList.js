import Note from './Note';
import AddNote from './AddNote';
function NotesList({ notes, handleAddNote, handleDeleteNote }) {
    return (
        <div className="notes-list">
            {notes.map((note, id) => (
                <Note item={note} key={id} handleDeleteNote={handleDeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
}

export default NotesList;
