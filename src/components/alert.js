import React from "react";

// Functional component for displaying alerts
export default function Alert(props) {
  return (
    // Container for alert with styling
    <div className="alert" style={{ height: '50px', marginBottom: '25px', marginTop: '-15px' }}>
      {props.alert &&  // Check if alert exists
        <div className={`alert alert-${props.alert.type}`} role="alert">
          {/* Display the alert message and type */}
          <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong> {props.alert.message}
        </div>}
    </div>
  );
}
