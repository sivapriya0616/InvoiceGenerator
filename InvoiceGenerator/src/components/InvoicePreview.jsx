import React, { forwardRef } from "react";

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
  return (
    <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
      {/* Render the PDF content here using invoiceData and template */}
      <h2>Invoice Preview</h2>
      {/* Add more invoice details as needed */}
    </div>
  );
});

export default InvoicePreview;
