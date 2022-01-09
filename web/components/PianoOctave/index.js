import { useState, useEffect } from 'react';
import classNames from 'classnames';

import styles from './styles.module.css';

export default function PianoOctave({ octave, notes = {} }) {
  const defaultKeysPressed = {
    c: false,
    csharp: false,
    d: false,
    eflat: false,
    e: false,
    f: false,
    fsharp: false,
    g: false,
    aflat: false,
    a: false,
    bflat: false,
    b: false,
  };
  const fullNotes = { ...defaultKeysPressed, ...notes };
  const [keysPressed, setKeysPressed] = useState(fullNotes);

  useEffect(() => {
    setKeysPressed(fullNotes);

    return function cleanUp() {
      setKeysPressed(defaultKeysPressed);
    };
  }, [notes]);

  return (
    <div className={styles.octave}>
      <div className={styles.blackKeys}>
        <button
          id={`key_csharp_${octave}`}
          className={
            classNames(
              styles.blackKey,
              styles.keyCSharp,
              { [styles.pressed]: keysPressed.csharp },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, csharp: !keysPressed.csharp })}
        />

        <button
          id={`key_eflat_${octave}`}
          className={
            classNames(
              styles.blackKey,
              styles.keyEFlat,
              { [styles.pressed]: keysPressed.eflat },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, eflat: !keysPressed.eflat })}
        />

        <button
          id={`key_fsharp_${octave}`}
          className={
            classNames(
              styles.blackKey,
              styles.keyFSharp,
              { [styles.pressed]: keysPressed.fsharp },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, fsharp: !keysPressed.fsharp })}
        />

        <button
          id={`key_aflat_${octave}`}
          className={
            classNames(
              styles.blackKey,
              styles.keyAFlat,
              { [styles.pressed]: keysPressed.aflat },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, aflat: !keysPressed.aflat })}
        />

        <button
          id={`key_bflat_${octave}`}
          className={
            classNames(
              styles.blackKey,
              styles.keyBFlat,
              { [styles.pressed]: keysPressed.bflat },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, bflat: !keysPressed.bflat })}
        />
      </div>

      <div className={styles.whiteKeys}>
        <button
          id={`key_c_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyC,
              { [styles.pressed]: keysPressed.c },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, c: !keysPressed.c })}
        />

        <button
          id={`key_d_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyD,
              { [styles.pressed]: keysPressed.d },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, d: !keysPressed.d })}
        />

        <button
          id={`key_e_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyE,
              { [styles.pressed]: keysPressed.e },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, e: !keysPressed.e })}
        />

        <button
          id={`key_f_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyF,
              { [styles.pressed]: keysPressed.f },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, f: !keysPressed.f })}
        />

        <button
          id={`key_g_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyG,
              { [styles.pressed]: keysPressed.g },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, g: !keysPressed.g })}
        />

        <button
          id={`key_a_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyA,
              { [styles.pressed]: keysPressed.a },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, a: !keysPressed.a })}
        />

        <button
          id={`key_b_${octave}`}
          className={
            classNames(
              styles.whiteKey,
              styles.keyB,
              { [styles.pressed]: keysPressed.b },
            )
          }
          onClick={() => setKeysPressed({ ...keysPressed, b: !keysPressed.b })}
        />
      </div>
    </div>
  );
}
