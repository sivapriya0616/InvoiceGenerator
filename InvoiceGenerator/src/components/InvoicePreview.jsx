import React, { forwardRef } from "react";
import { formatInvoiceData } from "../util/formatInvoice";
import Template1 from "../templates/Template1/Template1";
const InvoicePreview = forwardRef(({ invoiceData, template }, ref) => {
    const formattedData = formatInvoiceData(invoiceData);

    return (
        <div ref={ref} className="invoice-preview container px-2 py-2 overflow-x-auto">
            {/* Render the PDF content here using invoiceData and template */}
            <Template1 data={formattedData} />      {/* Add more invoice details as needed */}
        </div>
    );
});

export default InvoicePreview;
