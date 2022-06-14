import styles from './About.module.scss';

const { about, aboutContent } = styles;
export const About = () => {
  return (
    <div className={about}>
      <h1>About application</h1>
      <div className={aboutContent}>
        <iframe
          width={'100%'}
          height="315"
          src="https://www.youtube.com/embed/UF8nmSItZQw"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
