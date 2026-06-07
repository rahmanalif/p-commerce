import React from 'react';
import styles from './LabButton.module.css';

const LabButton = () => {
  return (
    <div className={styles.main}>
      <div className={styles.buttons}>
        <div className={styles.btn}>
          <button className={styles.button3}>
            <span className={styles.button_text}>ENTER LAB</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LabButton;
