

import React, { forwardRef } from "react";
import { formatInvoiceData } from "../util/formatInvoice"; // Ensure this utility is correctly implemented
import { templateComponents } from "../util/invoiceTemplates.js"; // Ensure this file exists and is correctly implemented

const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    console.log("Rendering in previewpage template:", template); // Debugging log

    // Format the invoice data using the utility function
    const formattedData = formatInvoiceData(invoiceData);

    // Dynamically select the template component or fallback to Template1
    const SelectedTemplate = templateComponents[template] || templateComponents["Template1"]; // Fallback to Template1 if template is undefined

    // Handle cases where the selected template is undefined
    if (!SelectedTemplate) {
        console.error(`Template "${template}" is not defined in templateComponents.`);
        return <div className="alert alert-danger">Template not found.</div>;
        
    }

    return (
        <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
            {/* Render the dynamically selected template */}
            <SelectedTemplate data={formattedData} />
        </div>
    );
});

export default InvoicePreview;