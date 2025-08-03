import React, { forwardRef } from "react";
import { formatInvoiceData } from "../util/formatInvoice";
import {templateComponents} from "../util/invoicetemplates.js";
const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    const formattedData = formatInvoiceData(invoiceData);
    const selectedTemplate= templateComponents[template] || templateComponents['Template1'];

    return (
        <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
            <selectedTemplate data={formattedData} />
            {/* Render the PDF content here using invoiceData and template */}
        </div>
    );
});

export default InvoicePreview;
