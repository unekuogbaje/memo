import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../redux/notes/notesSlice";
import { nanoid } from "nanoid"; 
import ColorButton from './color-button';

function NoteInput() {
  const [text, setText] = React.useState("");
  const [bgColor, setBgColor] = React.useState("red");
  
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  const addNewNote = () => {
    if (text === "") {
      alert("Please fill in the relevant fields!");
      return;
    }
    const note = items.filter((item) => item.note === text);
    if (note.length > 0) {
      alert("This note already exits!");
      return;
    }
    dispatch(addNote({ id: nanoid(5), note: text, bgColor }));
    setText("");
  };
  
  return (
    <div className={"textarea-box"}>
      <textarea 
        className='textarea-input' 
        placeholder='Start writing...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className={"textarea-inner-container"}>
        <ColorButton bgColor={bgColor} setBgColor={setBgColor} />
        <button className={"btn-add"} onClick={addNewNote}>
          ADD
        </button>
    </div>
    </div>
  )
}

export default NoteInput;