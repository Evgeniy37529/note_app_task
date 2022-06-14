import styles from './Footer.module.scss';

const { footer, git } = styles;

export const Footer = () => {
  return (
    <footer className={footer}>
      <p>Notes App</p>
      <p>2022</p>
      <a className={git} href="https://github.com/Evgeniy37529" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </footer>
  );
};
