import React, { useContext, useRef, useState } from "react";
import { templates } from "../assets/assets.js";
import { AppContext } from "../context/AppContext.jsx"; // Import AppContext to access shared state
import InvoicePreview from "../components/InvoicePreview.jsx"; // Import InvoicePreview component
import { saveInvoice } from "../service/invoicesevice.js"; // Import saveInvoice function to handle saving invoices
import { deleteInvoice } from "../service/invoicesevice.js";
import { uploadInvoiceThumbnail } from "../service/cloudinarySErvice.js"; // Import uploadInvoiceThumbnail function to handle thumbnail uploads
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas'; // <-- Add this import statement
import {generatePdfFromElement} from "../util/pdfUtil.js"; // Import utility function to generate PDF from HTML element



import "../index.css"; // Import index.css for global styles
import { Loader2 } from "lucide-react";

const PreviewPage = () => {
  const navigate = useNavigate();

  const previewRef = useRef();
  const { selectedTemplate, setSelectedTemplate, invoiceData, baseURL } = useContext(AppContext);
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [downloading, setDownloading] = useState(false); // State to manage downloading state
  // Make sure setSelectedTemplate and invoiceData are provided by AppContext
  const handleSaveAndExit = async () => {
    try {

      setLoading(true);
      const canvas = await html2canvas(previewRef.current, {
        scale: 2, // Increase scale for better quality
        useCORS: true, // Enable CORS to load external images
        backgroundColor: "#fff", // Set background color to transparent
        scrolly: -window.scrollY,
      });
      const imageData = canvas.toDataURL("image/png")// Adjust for scroll position.
      const thumbnailURL = await uploadInvoiceThumbnail(imageData);
      //TODO: create thumbnail url
      const payLoad = {
        ...invoiceData,
        thumbnailurl: thumbnailURL,
        template: selectedTemplate,
      }
      const response = await saveInvoice(baseURL, payLoad);
      if (response.status === 200) {
        toast.success('Invoice saved successfully');
        navigate('/dashboard'); // Redirect to dashboard after saving

      } else {
        toast.error('Failed to save invoice',);
      }
      // Optionally, you can reset the invoiceData or redirect the user
    } catch (error) {
      console.error("Error saving invoice:", error);
      toast.error('Failed to save invoice', error.message);

    } finally {
      setLoading(false); // Reset loading state
    }


  }
  const handleDelete = async () => {
    // 1. Check if invoice ID is missing
    // if (!invoiceData.id) {
    //   toast.error("Invoice ID is missing.");
    //   return;
    // }

    try {
      // 2. Call API to delete invoice
      const response = await deleteInvoice(baseURL, invoiceData.id);

      // 3. If backend returned 204 No Content
      if (response.status === 204) {
        toast.success("Invoice deleted successfully.");
        navigate("/dashboard");
      } else {
        toast.error("Unable to delete invoice.");
      }
    } catch (error) {
      toast.error(`Failed to delete invoice: ${error.message}`);
    }
  };
  //ergerg
  const handleDownloadPdf = async () => {
    if (!previewRef.current) return;

    try {
      setDownloading(true);
      await generatePdfFromElement(
        previewRef.current,
        `invoice_${Date.now()}.pdf`
      );
    } catch (error) {
      toast.error(
        `Failed to generate invoice${error?.message ? `: ${error.message}` : ""}`
      );
    } finally {
      setDownloading(false);
    }
  };



  return (
    <div className="previewpage container-fluid d-flex flex-column p-3 min-vh-100">
      {/* Action buttons */}
      <div className="d-flex flex-column align-items-center mb-4 gap-3">
        {/* List of template buttons */}
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          {templates.map(({ id, label }) => (
            <button
              key={id}
              style={{ minHeight: "38px", minWidth: "100px" }}
              className={`btn btn-sm rounded-pill p-2 ${selectedTemplate === id ? "btn-primary" : "btn-outline-secondary"}`}
              onClick={() => setSelectedTemplate(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Example action buttons */}
        <div className="d-flex gap-2 flex-wrap justify-content-center">
          <button className="btn btn-primary d-flex align-items-center justify-content-center" onClick={handleSaveAndExit} disabled={loading}>
            {loading && <Loader2 className="me-2 spin-animation" size={18} />}
            {loading ? "Saving..." : "Save and Exit"}
          </button>
          {invoiceData.id && <button className="btn btn-danger" onClick={handleDelete}>
            Delete Invoice
          </button>}
          <button className="btn btn-secondary">
            Back to Dashboard
          </button>
          <button className="btn btn-info">
            Send Email
          </button>
          <button className="btn btn-success d-flex align-items-center justify-content-center" disabled={loading} onClick={handleDownloadPdf}>
            {downloading && <Loader2 className="me-2 spin-animation" size={18} />}
            {downloading ? "Downloading...":"Download PDF" }
          </button>
        </div>
      </div>
      {/* Display the invoice preview */}
      <div className="flex-grow-1 overflow-auto d-flex justify-content-center align-items-start bg-light py-3">
        <div ref={previewRef} className="invoice-preview">
          {/* <div ref={previewRef} className="invoice-preview"> */}
          {console.log("Selected template:", selectedTemplate)}
          <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} />
          {/* </div> */}
          {/* <InvoicePreview invoiceData={invoiceData} template={selectedTemplate} /> */}
          {/* console.log("Selected template:", selectedTemplate);  */}
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
