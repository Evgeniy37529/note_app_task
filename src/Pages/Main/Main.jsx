import styles from './main.module.scss';
import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { NotesAddForm } from '../../Components/NotesAddForm/NotesAddForm';
import { EditModal } from '../../Components/EditModal/EditModal';
import { NotesList } from '../../Components/NotesList/NotesList';
import data from '../../db/notes.json';

const { container, main } = styles;

export const Main = React.memo(() => {
  const { getNotes, isModal, setIsModal, currentTagsForEditModal } = useContext(GlobalContext);

  useEffect(() => getNotes(data), []);

  return (
    <div className={[main, container].join(' ')}>
      <NotesAddForm />
      <NotesList />
      {isModal && (
        <EditModal setIsModal={setIsModal} currentTagsForEditModal={currentTagsForEditModal} />
      )}
    </div>
  );
});
