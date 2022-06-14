import {
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
  GET_NOTES,
  ADD_TAG,
  DELETE_TAG,
  IS_MODAL,
  CURRENT_ID,
  CURRENT_TAGS_FOR_EDIT,
  FILTER_NOTES,
} from './types';

const handlers = {
  [GET_NOTES]: (state, { payload }) => ({ ...state, notes: payload }),
  [ADD_NOTE]: (state, { payload }) => ({ ...state, notes: [...state.notes, payload] }),
  [EDIT_NOTE]: (state, { payload }) => {
    const index = state.notes.findIndex((note) => note.id === payload.id);
    state.notes[index].name = payload.text;
    return { ...state };
  },
  [DELETE_NOTE]: (state, { payload }) => ({
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  }),
  [IS_MODAL]: (state) => ({ ...state, isModal: !state.isModal }),
  [CURRENT_ID]: (state, { payload }) => ({ ...state, currentId: payload }),
  [ADD_TAG]: (state, { payload }) => {
    const index = state.notes.findIndex((note) => note.id === payload.id);
    state.notes[index].tags = [...payload.tag];
    return { ...state };
  },
  [CURRENT_TAGS_FOR_EDIT]: (state, { payload }) => ({
    ...state,
    currentTagsForEditModal: [...payload],
  }),
  [DELETE_TAG]: (state, { payload }) => {
    const index = state.notes.findIndex((note) => note.id === payload.id);
    state.notes[index].tags = [...state.notes[index].tags.filter((tag) => tag !== payload.tagName)];
    return { ...state };
  },
  [FILTER_NOTES]: (state, { payload }) => {
    return {
      ...state,
      notes: [...state.notes.filter((note) => note.tags.includes(payload))],
    };
  },

  DEFAULT: (state) => state,
};

export const globalReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
