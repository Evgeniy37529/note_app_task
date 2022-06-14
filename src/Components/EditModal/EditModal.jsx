import React, { useContext, useEffect, useState, useMemo } from 'react';
import styles from './EditModal.module.scss';
import { GlobalContext } from '../../context/globalContext';
import { tegsRecognition } from '../../utils/tegsRecognition';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea';

const { editModal, containerModal, close, textField, editForm, saveChangeBtn } = styles;

export const EditModal = React.memo(({ setIsModal, currentTagsForEditModal }) => {
  const [noteText, setNoteText] = useState('');
  const { notes, currentId, editNote, addTag } = useContext(GlobalContext);

  const note = useMemo(() => notes.find((note) => currentId === note.id), [currentId]);

  const handleChange = (value) => setNoteText(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = [...currentTagsForEditModal, ...tegsRecognition(noteText)];
    editNote(currentId, noteText);
    addTag(currentId, tags);
    setIsModal();
    setNoteText('');
  };

  useEffect(() => {
    setNoteText(note.name);
  }, []);

  return (
    <div className={editModal} onClick={() => setIsModal()}>
      <div className={containerModal} onClick={(e) => e.stopPropagation()}>
        <div onClick={() => setIsModal()}>
          <span className={close}>&#10006;</span>
        </div>
        <form className={editForm} onSubmit={handleSubmit}>
          <HighlightWithinTextarea
            className={textField}
            value={noteText}
            onChange={handleChange}
            highlight={/#[a-zA-Z0-9]+/g}
          />
          <input className={saveChangeBtn} type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
});
