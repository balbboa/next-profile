import styles from '../styles/components/ChallengeBox.module.scss';

export function ChallengeBox() {

    const hasActiveChallenge = true;


    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.ChallengeBoxActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt="body" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada</p>
                    </main>

                    <footer>
                        <button type="button" className={styles.challengeFailedButton}>falhei</button>
                        <button type="button" className={styles.challengeSucceededButton}>completei</button>
                    </footer>
                </div>
            ) : (
                    <div className={styles.ChallengeBoxNotActive}>
                        <strong>EOQ</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="LevelUp" />
                    Avance de level
                </p>
                    </div>
                )}
        </div>
    );
}