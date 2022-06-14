import React, { useCallback } from 'react';
import styles from './NotesItem.module.scss';
import parse from 'html-react-parser';
import { tegsHighlight } from '../../utils/tegsHighlight';
import { TagList } from '../TagList/TagList';
import { AddTagsForm } from '../AddTagsForm/AddTagsForm';

const { noteContent, noteItem, bottonsGroup, edit, del, tagsContent, noteText, blue } = styles;

export const NotesItem = React.memo(
  ({
    name,
    date,
    tags,
    setIsModal,
    setCurrentId,
    id,
    deleteNote,
    addTag,
    setCurrentTagsForEditModal,
  }) => {
    const handleEditClick = useCallback(() => {
      setIsModal();
      setCurrentId(id);
      setCurrentTagsForEditModal(tags);
    }, [id, tags]);

    const handleDeleteNote = useCallback(
      (id) => {
        deleteNote(id);
      },
      [id]
    );

    return (
      <li className={noteItem}>
        <div className={noteContent}>
          <div className={noteText}>
            <strong>{parse(tegsHighlight(name, blue))}</strong>
          </div>
          <div className={bottonsGroup}>
            <button onClick={handleEditClick} className={edit}>
              edit
            </button>
            <button className={del} onClick={() => handleDeleteNote(id)}>
              delete
            </button>
          </div>
        </div>
        <div className={tagsContent}>
          <TagList tags={tags} noteId={id} />
          <AddTagsForm tags={tags} addTag={addTag} id={id} />
        </div>
      </li>
    );
  }
);
