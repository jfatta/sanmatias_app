// components/RadioGroup.js

import styles from "../styles/Home.module.css";


const RadioGroup = ({ selectedOption, onOptionChange }) => {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    onOptionChange(value); // Callback to update state in the parent
  };
  return (
    <div className={styles.radioGroupContainer}>
      <div style={{ fontWeight: 600, fontSize: '16px', color: '#171717', marginBottom: '4px' }}>Mapa:</div>
      <div className={styles.radioGroupOptions}>
      <label>
        <input
          type="radio"
          value="google"
          checked={selectedOption === "google"}
          onChange={handleOptionChange}
        />
        Google Maps
      </label>
      <label>
        <input
          type="radio"
          value="waze"
          checked={selectedOption === "waze"}
          onChange={handleOptionChange}
        />
        Waze
      </label>
      <label>
        <input
          type="radio"
          value="apple"
          checked={selectedOption === "apple"}
          onChange={handleOptionChange}
        />
        Apple Maps
      </label>
      </div>
    </div>
  );
};

export default RadioGroup;
