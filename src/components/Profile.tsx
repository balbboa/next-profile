import styles from '../styles/components/Profile.module.scss';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/balbboa.png" alt="Balboa" />
      <div>
        <strong>Arthur Balboa</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Front-End Developer
        </p>
      </div>
    </div>
  );
}