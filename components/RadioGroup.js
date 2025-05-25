// components/RadioGroup.js

import styles from "../styles/Home.module.css";

const RadioGroup = ({ selectedOption, onOptionChange }) => {
  const handleOptionChange = (value) => {
    onOptionChange(value); // Callback to update state in the parent
  };

  const options = [
    { value: 'google', label: 'Google' },
    { value: 'waze', label: 'Waze' },
    { value: 'apple', label: 'Apple' }
  ];

  return (
    <div className={styles.mapToggleContainer}>
      <div className={styles.radioGroupTitle}>Mapa:</div>
      <div className={styles.mapToggleButtons}>
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`${styles.mapToggleButton} ${
              selectedOption === option.value ? styles.mapToggleButtonActive : ''
            }`}
            onClick={() => handleOptionChange(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
