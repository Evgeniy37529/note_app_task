import styles from './TagsItem.module.scss';
import { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { sliceFirstSymbol } from '../../utils/sliceFirstSymbol';
const { tagItem, delTag } = styles;

export const TagItem = ({ tagName, noteId }) => {
  const { deleteTag, filterNotes } = useContext(GlobalContext);

  const handleDeleteTag = (e) => {
    e.stopPropagation();
    deleteTag(noteId, tagName);
  };

  return (
    <li className={tagItem} onClick={() => filterNotes(tagName)}>
      <p className={delTag} onClick={handleDeleteTag}>
        &#10006;
      </p>
      {sliceFirstSymbol(tagName)}
    </li>
  );
};
