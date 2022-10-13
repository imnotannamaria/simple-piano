import { Code, GithubLogo, LinkedinLogo, MusicNote, MusicNoteSimple, MusicNotesSimple, PianoKeys } from 'phosphor-react';
import { Tecla } from '../../components/Tecla';
import styles from './styles.module.css';

export function Home() {
  return (
    <>
      <header className={styles.header}>
        <PianoKeys size={32} color='#8E8E8E'/>
        <h1>Simple Piano</h1>
        <PianoKeys size={32} color='#8E8E8E'/>
      </header>
      <main className={styles.content}>
        <div className={styles.sideContent}>
          {/*<PianoKeys size={32} color='#8E8E8E'/> */}
          <MusicNotesSimple size={30} />
        </div>
        <div className={styles.teclasContainer}>
          <Tecla nota='C'/>
          <Tecla nota='D'/>
          <Tecla nota='E'/>
          <Tecla nota='F'/>
          <Tecla nota='G'/>
          <Tecla nota='A'/>
          <Tecla nota='B'/>
        </div>
        <div className={styles.sideContent}>
          <MusicNote size={30} color='#8E8E8E'/>
        </div>
      </main>
      <footer className={styles.footer}>
        <span>Develop by <strong>Anna Maria</strong></span>
        <div className={styles.badge}>
          <a href='https://portfolio-react-imnotannamaria.vercel.app' target='_blank'>
            <Code size={30} color='#6445BF' />
          </a>
          <a href='https://www.linkedin.com/in/imnotannamaria/' target='_blank'>
            <LinkedinLogo size={30} color='#6445BF' />
          </a>
        </div>
      </footer>
    </>
  )
}