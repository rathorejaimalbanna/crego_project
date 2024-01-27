// Import React and useState hook
import React, { useState } from "react";

// Import custom components and styles
import ExpressionForm from "./components/expression";
import styles from './App.module.css';
import DropdownButton from "./components/dropdownButton";
import JsonView from 'react18-json-view';
import 'react18-json-view/src/style.css';
import NavBar from "./components/navbar";
import Alert from './components/alert.js';

// Main App component
export default function App() {
  // State for combinator, expression, and mode (light/dark)
  const [combinator, setCombinator] = useState('And');
  const [expression, setExpression] = useState({ "rules": [], "combinator": combinator });
  const [mode, setMode] = useState('light');

  // Function to handle combinator change
  function handleCombinator(eventKey) {
    setCombinator(eventKey);
  }

  // Function to add a new rule to the expression
  function addRule(formData) {
    setExpression((prevState) => ({
      rules: [
        ...prevState.rules,
        { key: formData.rule, output: { value: formData.value, score: formData.score, operator: formData.operator } },
      ],
      combinator: combinator,
    }));
  }

  // Options for editable JSON view (delete and edit)
  const editableOptions = {
    delete: true,
    edit: true,
  };

  // Function to handle mode switch between light and dark
  function handleSwitchChange() {
    if (mode === 'light') {
      setMode("dark");
      alertHandler("Dark mode enabled", 'success');
    } else {
      setMode('light');
    }
  }

  // Function to handle alerts for modes with dismissal after a certain time
  function alertHandler(msg, type) {
    showAlert({ message: msg, type: type });
    function dismiss() {
      showAlert(null);
    }
    setTimeout(dismiss, 2000);
  }

  // State for displaying alerts
  const [alert, showAlert] = useState(null);

  // JSX structure for the component
  return (
    <>
      {/* Navbar component */}
      <NavBar handleSwitchChange={handleSwitchChange} />

      {/* Displaying Alert for dark mode */}
      {alert && <Alert alertHandler={alertHandler} alert={alert} />}

      {/* Main container with conditional dark mode */}
      <div className={`${styles.container} ${mode === 'dark' && styles.darkContainer}`}>
        <div className={styles.dropDiv}>
          {/* Dropdown for selecting combinator */}
          <DropdownButton options='Combinator' handleCombinator={handleCombinator} expression={expression} />
        </div>

        <div className={`${styles.formDiv} ${mode === 'dark' && styles.darkFormDiv}`}>
          {/* Form for adding expressions */}
          <ExpressionForm addRule={addRule} expression={expression} />
        </div>

        <div className={styles.heading}>
          {/* Heading for the expressions */}
          <h2>{"Expressions"}</h2>
        </div>

        <div className={styles.expressionDiv}>
          {/* Displaying JSON view for the expressions */}
          <JsonView src={expression} onEdit={(edit) => console.log('onEdit', edit)} editable={editableOptions} />
        </div>
      </div>
    </>
  );
}
