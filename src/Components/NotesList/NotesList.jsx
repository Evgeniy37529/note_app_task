import { useContext, useCallback } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { NotesItem } from '../NotesItem/NotesItem';
import styles from './NotesList.module.scss';

const { notesList } = styles;

export const NotesList = () => {
  const { notes, setIsModal, setCurrentId, deleteNote, addTag, setCurrentTagsForEditModal } =
    useContext(GlobalContext);

  const renderNotesItem = useCallback(() => {
    return notes.map(({ name, tags, id }) => (
      <NotesItem
        name={name}
        tags={tags}
        key={id}
        setIsModal={setIsModal}
        setCurrentId={setCurrentId}
        id={id}
        deleteNote={deleteNote}
        addTag={addTag}
        setCurrentTagsForEditModal={setCurrentTagsForEditModal}
      />
    ));
  }, [notes]);

  return (
    <div>
      <div className="notes">
        <ul className={notesList}>{renderNotesItem()}</ul>
      </div>
    </div>
  );
};
