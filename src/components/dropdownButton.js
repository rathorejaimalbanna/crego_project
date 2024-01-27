import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function DropdownButton(props) {
  // State to keep track of the selected value
  const [selectedValue, setSelectedValue] = useState("");

  // Function to handle item selection
  const handleSelect = (eventKey, event) => {
    // Update the state with the selected value
    setSelectedValue(eventKey);
    props.handleDropDown(eventKey);
  };

  // Function to handle Combinator selection
  function handleSelectConnector(eventKey) {
    setSelectedValue(eventKey);
    props.handleCombinator(eventKey);
  };

  // Reset selectedValue when the expression changes
  useEffect(() => {
    setSelectedValue(null);
  }, [props.expression]);

  return (
    <Dropdown
      onSelect={props.options === "Rule" ? handleSelect : handleSelectConnector}
    >
      {/* Dropdown Toggle */}
      <Dropdown.Toggle
        variant={props.options === "Rule" ? "success" : "info"}
        id="dropdown-basic"
      >
        {/* Display the selected value or a placeholder */}
        {selectedValue ||
          `Select ${props.options === "Rule" ? "Rule" : "Combinator"}`}
      </Dropdown.Toggle>

      {/* Dropdown Menu */}
      <Dropdown.Menu>
        {/* Dropdown items based on options */}
        <Dropdown.Item eventKey={props.options === "Rule" ? "Age" : "AND"}>
          {props.options === "Rule" ? "Age" : "AND"}
        </Dropdown.Item>
        <Dropdown.Item
          eventKey={props.options === "Rule" ? "Account Statement" : "OR"}
        >
          {props.options === "Rule" ? "Account Statement" : "OR"}
        </Dropdown.Item>
        {/* Additional dropdown item for Rule option */}
        {props.options === "Rule" && (
          <Dropdown.Item eventKey="Credit Score">Credit Score</Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;
