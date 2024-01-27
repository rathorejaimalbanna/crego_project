
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

// Functional component for selecting connector (operator) type
function SelectConnector(props) {

  const [connector, setConnector] = useState('');

  const handleConnectorChange = (event) => {
    // Update the state with the selected connector value
    setConnector(event.target.value);
    // Pass the selected connector value to the parent component
    props.handleOperator(event.target.value);
  };

  return (
    <Form.Select
      aria-label="Default select example"
      style={{ margin: '1.5% 1%', maxWidth: '90%' }}
      value={connector}
      onChange={handleConnectorChange}
    >
      {/* Default option for the dropdown */}
      <option>Select Operator type</option>
      {/* Options for different connector values */}
      <option value='&gt;='>&gt;=</option>
      <option value="&lt;=">&lt;=</option>
      <option value="&lt;">&lt;</option>
      <option value="&gt;">&gt;</option>
    </Form.Select>
  );
}

export default SelectConnector;
