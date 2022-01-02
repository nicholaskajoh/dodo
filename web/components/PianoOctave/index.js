import styles from './styles.module.css';

export default function PianoOctave({ octave }) {
  return (
    <div className={styles.octave}>
      <div className={styles.blackKeys}>
        <button id={`keyCSharp${octave}`} className={`${styles.blackKey} ${styles.keyCSharp}`} />
        <button id={`keyEFlat${octave}`} className={`${styles.blackKey} ${styles.keyEFlat}`} />
        <button id={`keyFSharp${octave}`} className={`${styles.blackKey} ${styles.keyFSharp}`} />
        <button id={`keyAFlat${octave}`} className={`${styles.blackKey} ${styles.keyAFlat}`} />
        <button id={`keyBFlat${octave}`} className={`${styles.blackKey} ${styles.keyBFlat}`} />
      </div>

      <div className={styles.whiteKeys}>
        <button id={`keyC${octave}`} className={`${styles.whiteKey} ${styles.keyC}`} />
        <button id={`keyD${octave}`} className={`${styles.whiteKey} ${styles.keyD}`} />
        <button id={`keyE${octave}`} className={`${styles.whiteKey} ${styles.keyE}`} />
        <button id={`keyF${octave}`} className={`${styles.whiteKey} ${styles.keyF}`} />
        <button id={`keyG${octave}`} className={`${styles.whiteKey} ${styles.keyG}`} />
        <button id={`keyA${octave}`} className={`${styles.whiteKey} ${styles.keyA}`} />
        <button id={`keyB${octave}`} className={`${styles.whiteKey} ${styles.keyB}`} />
      </div>
    </div>
  );
}
