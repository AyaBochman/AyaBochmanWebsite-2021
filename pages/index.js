import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aya Bochman | Full Stack Web Developer</title>
        <link rel="icon" href="/laptop.ico" />
      </Head>

      <Header />
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
