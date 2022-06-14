import { useCallback } from 'react';
import { TagItem } from '../TagsItem/TagsItem';
import styles from './TagList.module.scss';

const { tagsList } = styles;

export const TagList = ({ tags, noteId }) => {
  const renderTagItems = useCallback(() => {
    return tags.map((tag, index) => <TagItem key={index} noteId={noteId} tagName={tag} />);
  }, [tags]);

  return <ul className={tagsList}>{renderTagItems()}</ul>;
};
