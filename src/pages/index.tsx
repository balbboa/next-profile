import { Bar } from "../components/Bar";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { Profile } from '../components/Profile';
import styles from '../styles/pages/Home.module.scss';
import Head from 'next/head';
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arthur Balboa</title>
      </Head>

      <Bar />
      <Profile />
      <section>
        <div>

          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  )
}
