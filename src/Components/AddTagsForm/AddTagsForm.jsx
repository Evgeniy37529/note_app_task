import { useState } from 'react';
import styles from './AddTagsForm.module.scss';

const { addTagsGroup, addTagsInputGroup, addTagBtn, tagInput } = styles;

export const AddTagsForm = ({ tags, addTag, id }) => {
  const [isShowAddTagInput, setIsShowAddTagInput] = useState(false);
  const [textTag, setTextTag] = useState('');

  const showAddTagInput = () => {
    setIsShowAddTagInput((prev) => !prev);
  };

  const handleChangeTagsText = (e) => {
    setTextTag(e.target.value);
  };

  const handleSubmitTag = (e) => {
    e.preventDefault();
    textTag && addTag(id, [...tags, textTag]);
    setIsShowAddTagInput((prev) => !prev);
    setTextTag('');
  };

  return (
    <form className={addTagsGroup} onSubmit={handleSubmitTag}>
      {isShowAddTagInput && (
        <div className={addTagsInputGroup}>
          <input className={tagInput} placeholder="Enter new tag" onChange={handleChangeTagsText} />
          <input type="submit" value="Add tag" />
        </div>
      )}
      {!isShowAddTagInput && (
        <button onClick={showAddTagInput} className={addTagBtn}>
          add tag
        </button>
      )}
    </form>
  );
};
