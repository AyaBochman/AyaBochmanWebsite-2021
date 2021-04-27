import Head from 'next/head'
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import styled from 'styled-components';

export default function Home() {
  return (
    <StyledHome>
      <Head>
        <title>Aya Bochman | Full Stack Web Developer</title>
        <link rel="icon" href="/laptop.ico" />
      </Head>

      <Header />
      <Navbar />
      <Content />
      {/* <main className={styles.main}>

      </main> */}

      {/* <footer className={styles.footer}>

      </footer> */}
    </StyledHome>
  )
}

const StyledHome = styled.div`

`;