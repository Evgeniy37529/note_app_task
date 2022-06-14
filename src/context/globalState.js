import { useReducer } from 'react';
import { globalReducer } from './globalReducer';
import {
  GET_NOTES,
  ADD_NOTE,
  IS_MODAL,
  CURRENT_ID,
  EDIT_NOTE,
  DELETE_NOTE,
  ADD_TAG,
  CURRENT_TAGS_FOR_EDIT,
  DELETE_TAG,
  FILTER_NOTES,
} from './types';
import { GlobalContext } from './globalContext';
import { tegsRecognition } from '../utils/tegsRecognition';

export const GlobalState = ({ children }) => {
  const initialState = {
    notes: [],
    isModal: false,
    currentId: '',
    currentTagsForEditModal: [],
  };

  const [state, dispatch] = useReducer(globalReducer, initialState);

  const addTag = (id, tag) => {
    const payload = { id, tag: [...new Set(tegsRecognition(tag))] };
    dispatch({ type: ADD_TAG, payload });
  };

  const getNotes = (data) => {
    const payload = data;
    dispatch({ type: GET_NOTES, payload });
  };

  const addNote = (note) => {
    const payload = note;
    dispatch({ type: ADD_NOTE, payload });
  };

  const setIsModal = () => {
    dispatch({ type: IS_MODAL });
  };

  const setCurrentId = (id) => {
    const payload = id;
    dispatch({ type: CURRENT_ID, payload });
  };

  const editNote = (id, text) => {
    const payload = { id, text };
    dispatch({ type: EDIT_NOTE, payload });
  };

  const deleteNote = (id) => {
    const payload = id;
    dispatch({ type: DELETE_NOTE, payload });
  };

  const setCurrentTagsForEditModal = (tags) => {
    const payload = tags;
    dispatch({ type: CURRENT_TAGS_FOR_EDIT, payload });
  };

  const deleteTag = (id, tagName) => {
    const payload = { id, tagName };
    dispatch({ type: DELETE_TAG, payload });
  };

  const filterNotes = (tagname) => {
    const payload = tagname;
    dispatch({ type: FILTER_NOTES, payload });
  };

  return (
    <GlobalContext.Provider
      value={{
        notes: state.notes,
        isModal: state.isModal,
        currentId: state.currentId,
        currentTagsForEditModal: state.currentTagsForEditModal,
        setCurrentId,
        getNotes,
        addNote,
        setIsModal,
        editNote,
        deleteNote,
        addTag,
        setCurrentTagsForEditModal,
        deleteTag,
        filterNotes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
