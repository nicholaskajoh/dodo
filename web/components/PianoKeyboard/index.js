import PianoOctave from '../PianoOctave';

import styles from './styles.module.css';

export default function PianoKeyboard({ numOctaves = 4 }) {
  /**
   * If numOctaves is 2, we'll generate C4 and C5 (rather than C1 and C2), and so on.
   */
  const octaveMapping = {
    2: [4, 5],
    3: [4, 5, 6],
    4: [3, 4, 5, 6],
    5: [2, 3, 4, 5, 6],
    6: [1, 2, 3, 4, 5, 6],
    7: [1, 2, 3, 4, 5, 6, 7],
  };
  const octaves = octaveMapping[numOctaves];
  const octaveWidth = 184.94; // px
  const keyboardWidth = octaveWidth * numOctaves;

  return (
    <div className={styles.keyboard} style={{ width: keyboardWidth }}>
      {octaves.map((octave, index) => <PianoOctave octave={octave} key={index} />)}
    </div>
  );
}
