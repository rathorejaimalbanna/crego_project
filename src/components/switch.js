// Import React and Form component from react-bootstrap
import React from 'react';
import Form from 'react-bootstrap/Form';

// Functional component for a dark mode switch (toggle) input
function SwitchExample(props) {
  return (
    <Form>
      <Form.Check
        type="switch" 
        id="custom-switch" 
        label="Dark Mode" 
        onChange={props.handleSwitchChange} // Event handler for switch change
      />
    </Form>
  );
}

export default SwitchExample;
