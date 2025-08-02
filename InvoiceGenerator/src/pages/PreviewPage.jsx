import React, { useContext, useRef } from "react";
import { templates } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx"; // Import AppContext to access shared state
import "../index.css"; // Import index.css for global styles


const PreviewPage = () => {
  // Example usage of useRef initialized with null
  const previewRef = useRef();
  const { selectedTemplate } = useContext(AppContext);// Assuming selectedTemplate is part of the templates array


  return (
    <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
      {/* Action buttons */}
      <div className="d-flex flex-column align-items-center mb-4 gap-3">
        {/*list of template buttons}*/}
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {templates.map(({ id, label }) => (
            <button
              key={id}
              style={{ minHeight: "38px", minWidth: "100px" }}
              className={`btn btn-sm rounded-pill p-2 ${selectedTemplate === id ? 'btn-primary' : 'btn-outline-secondary'}`}
            >
              {label}
            </button>
          ))}
        </div>


        {/* Example action buttons */}
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {/* Add your tab or buttons here */}
          {/* Example buttons as placeholders */}
          <button className="btn btn-primary d-flex align-items-center justify-content-center">
            Save and Exit
          </button>

          <button className="btn btn-danger ">
            Delete Invoice
          </button>

          <button className="btn btn-secondary" >
            Back to Dashboard
          </button>

          <button className="btn btn-info">
            Send Email
          </button>

          <button className="btn btn-success d-flex align-items-center justify-content-center">
            Download PDF
          </button>

        </div>
      </div>
      {/* Display the invoice preview */}
<div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">
  <div ref={previewRef} className="invoice-preview">
    <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
  </div>
</div>

     
    </div>
  );
};

export default PreviewPage;
