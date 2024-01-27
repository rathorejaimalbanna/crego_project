import React, { useState } from 'react';
import DropdownButton from './dropdownButton.js';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Selectoperator from './selectComponent.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ExpressionForm(props) {
  // State for form validation
  const [validated, setValidated] = useState(false);
  // State for form data
  const [formData, setFormData] = useState({
    "rule": null, 'value': null, 'score': null, "operator": null
  });

  // Form submission handler
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      event.preventDefault();
      setValidated(true);
      return;
    }
    setValidated(false);
    event.preventDefault();
    console.log(formData);
    // Pass form data to the parent component
    props.addRule(formData);
    // Reset form data after submission
    setFormData({ "rule": formData.rule, 'value': null, 'score': null, "operator": null });
    // Show success notification
    notify();
  };

  // Dropdown change handler for rule selection
  function handleDropDown(dropValue) {
    setFormData({ rule: dropValue, value: formData.value, score: formData.score, operator: formData.operator });
  }

  // Operator change handler
  function handleOperator(eventValue) {
    setFormData({ rule: formData.rule, value: formData.value, score: formData.score, operator: eventValue });
  }

  // Notification function
  const notify = () => toast.success("Rule added successfully", { autoClose: 2000 });


  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* DropdownButton component for rule selection */}
          <DropdownButton handleDropDown={handleDropDown} options="Rule" expression={props.expression} />
          {/* Selectoperator component for selecting operators */}
          <Selectoperator handleOperator={handleOperator} />
        </Row>
        <Row className="mb-3">
          {/* Form.Group for entering the value */}
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Value</Form.Label>
            <Form.Control type="text" placeholder="Value" required value={formData.value || ""}
              onChange={(e) => setFormData({ rule: formData.rule, value: e.target.value, score: formData.score, operator: formData.operator })} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid value.
            </Form.Control.Feedback>
          </Form.Group>
          {/* Form.Group for entering the score */}
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Score</Form.Label>
            <Form.Control type="text" placeholder="Score" value={formData.score || ""}
              required onChange={(e) => setFormData({ rule: formData.rule, value: formData.value, score: e.target.value, operator: formData.operator })} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid score.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {/* Button to submit the form */}
        <Button type="submit">Add Rule</Button>
        {/* ToastContainer for displaying notifications */}
        <ToastContainer />
      </Form>
    </>
  );
}

export default ExpressionForm;
