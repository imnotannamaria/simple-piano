import { Code, GithubLogo, LinkedinLogo, MusicNote, MusicNoteSimple, MusicNotesSimple, PianoKeys } from 'phosphor-react';
import { Tecla } from '../../components/Tecla';
import styles from './styles.module.css';

export function Home() {
  return (
    <>
      <header className={styles.header}>
        <PianoKeys size={30} color='#8E8E8E'/>
        <h1>Simple Piano</h1>
        <PianoKeys size={30} color='#8E8E8E'/>
      </header>
      <main className={styles.content}>
        <div className={styles.sideContent}>
          <MusicNotesSimple size={25} />
        </div>
        <div className={styles.teclasContainer}>
          <Tecla nota='Dó'/>
          <Tecla nota='Ré'/>
          <Tecla nota='Mi'/>
          <Tecla nota='Fá'/>
          <Tecla nota='Sol'/>
          <Tecla nota='Lá'/>
          <Tecla nota='Si'/>
        </div>
        <div className={styles.sideContent}>
          <MusicNote size={25} color='#8E8E8E'/>
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