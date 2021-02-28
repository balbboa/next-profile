import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Modal.module.scss'

export function Modal() {

    const { closeModal } = useContext(ChallengesContext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>2</header>
                <strong>Parabéns</strong>
                <p>asdsad</p>
                <button type="button" onClick={closeModal}>
                    <img src="/icons/close.svg" />
                </button>
            </div>
        </div>
    );
}