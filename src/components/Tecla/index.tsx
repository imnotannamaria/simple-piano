import { ReturnNoteSound } from '../../utils/ReturnNoteSound';
import styles from './styles.module.css';

interface TeclaProps {
  nota: string;
}

export function Tecla({ nota }: TeclaProps) {
  const playedNote = ReturnNoteSound(nota)

  return (
    <button className={styles.tecla} onClick={() => playedNote()}>{nota}</button>
  )
}