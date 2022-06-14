import { useState, useContext } from 'react';
import styles from './NotesAddForm.module.scss';
import { GlobalContext } from '../../context/globalContext';
import { tegsRecognition } from '../../utils/tegsRecognition';

const { inputNotes, addNoteForm, inputGroup, submitNote } = styles;

export const NotesAddForm = () => {
  const { addNote } = useContext(GlobalContext);

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = crypto.randomUUID();
    const tags = tegsRecognition(value) || [];
    value && addNote({ id, name: value, tags });
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form className={addNoteForm} onSubmit={handleSubmit}>
      <div className={inputGroup}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={inputNotes}
          placeholder="Enter your note"
        />
        <input className={submitNote} type="submit" value="add note" />
      </div>
    </form>
  );
};
