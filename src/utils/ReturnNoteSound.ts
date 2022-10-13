import useSound from 'use-sound';

import doSound from '../assets/do.mp3';
import reSound from '../assets/re.mp3';
import miSound from '../assets/mi.mp3';
import faSound from '../assets/fa.mp3';
import solSound from '../assets/sol.mp3';
import laSound from '../assets/la.mp3';
import siSound from '../assets/si.mp3';
import errorSound from '../assets/error.mp3';

export function ReturnNoteSound(note: string) {
  switch (note) {
    case 'C':
      const [C] = useSound(doSound);
      return C;
    case 'D':
      const [D] = useSound(reSound);
      return D;
    case 'E':
      const [E] = useSound(miSound);
      return E;
    case 'F':
      const [F] = useSound(faSound);
      return F;
    case 'G':
      const [G] = useSound(solSound);
      return G;
    case 'A':
      const [A] = useSound(laSound);
      return A;
    case 'B':
      const [B] = useSound(siSound);
      return B;
    default: 
      const [error] = useSound(errorSound);
      return error;
  }
}