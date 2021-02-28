import styles from '../styles/components/Bar.module.scss'

export function Bar() {
    return (
        <header className={styles.bar}>
            <span>0%</span>
            <div>
                <div style={{ width: '50%' }}></div>
            </div>
            <span>100%</span>
        </header>
    );
}