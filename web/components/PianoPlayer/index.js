import { useState } from 'react';
import PianoKeyboard from '../PianoKeyboard';
import sequenceData from '../../configs/sample-step-sequence-data.json';

import styles from './styles.module.css';

export default function PianoPlayer() {
  let playbackStatus = 'Ready';
  let sequenceSize = sequenceData.sequence.length;
  let defaultNumOctaves = sequenceData.instrument.metadata.number_of_octaves;
  const [numOctaves, setNumOctaves] = useState(defaultNumOctaves);
  const [currentStep, setCurrentStep] = useState(0);

  let notes = [];
  if (sequenceData.type === 'step' && currentStep > 0) {
    notes = sequenceData.sequence[currentStep - 1].notes;
    playbackStatus = currentStep < sequenceSize ? 'Running' : 'Finished';
  }

  return (
    <>
      <PianoKeyboard numOctaves={numOctaves} notes={notes} />

      <div className={styles.pianoPlayer}>
        <ul className={styles.playerStatus}>
          <li className={styles.statusItem}>Playback: <strong>{playbackStatus}</strong></li>

          {sequenceData.type === 'step' &&
            <li className={styles.statusItem}>Step: <strong>{currentStep}/{sequenceSize}</strong></li>
          }

          {sequenceData.type === 'time' &&
            <li className={styles.statusItem}>Time: <strong>5.1s</strong></li>
          }
        </ul>

        <ul className={styles.playerControls}>
          <li className={styles.control}>
            <label htmlFor="piano_key">Key: </label>
            <select id="piano_key">
              <option value="c">C (original)</option>
              <option value="csharp">C♯</option>
              <option value="d">D</option>
              <option value="eflat">E♭</option>
              <option value="e">E</option>
              <option value="f">F</option>
              <option value="fsharp">F♯</option>
              <option value="g">G</option>
              <option value="aflat">A♭</option>
              <option value="a">A</option>
              <option value="bflat">B♭</option>
              <option value="b">B</option>
            </select>
          </li>

          {sequenceData.type === 'step' &&
            <li className={styles.control}>
              <button
                onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              >
                Previous
              </button>

              <button
                onClick={() => currentStep < sequenceData.sequence.length && setCurrentStep(currentStep + 1)}
              >
                Next
              </button>
            </li>
          }

          {sequenceData.type === 'time' &&
            <li className={styles.control}>
              <button>Play/Pause</button>
            </li>
          }

          <li className={styles.control}>
            <label htmlFor="num_octaves">Octaves: </label>
            <select
              id="num_octaves"
              defaultValue={numOctaves}
              onChange={(event) => setNumOctaves(parseInt(event.target.value))}
            >
              <option value="2" disabled={defaultNumOctaves > 2}>2</option>
              <option value="3" disabled={defaultNumOctaves > 3}>3</option>
              <option value="4" disabled={defaultNumOctaves > 4}>4</option>
              <option value="5" disabled={defaultNumOctaves > 5}>5</option>
              <option value="6" disabled={defaultNumOctaves > 6}>6</option>
              <option value="7" disabled={defaultNumOctaves > 7}>7</option>
            </select>
          </li>
        </ul>
      </div>
    </>
  );
}
