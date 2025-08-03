import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

import { Pencil } from 'lucide-react';
import InvoiceForm from '../components/InvoiceForm.jsx'; // Ensure this path is correct
import TemplateGrid from '../components/TemplateGrid.jsx'; // Ensure this path is correct
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications

const MainPage = () => {
  const [isEdittingTitle, setIsEdittingTitle] = React.useState(false);
  const { invoiceTitle, setInvoiceTitle, invoiceData, setinvoiceData, setSelectedTemplate } = useContext(AppContext);
  const navigate = useNavigate(); // Corrected useNavigate initialization


  const handleTemplateClick = (templateId) => {
    const hasInvalidItem = invoiceData.items.some(
      (item) => !item.qty || !item.amount
    );

    if (hasInvalidItem) {
      toast.error("Please enter quantity and amount for all items.");
      return;
    }

    setSelectedTemplate(templateId);
    console.log("Selected template", { templateId });
    navigate('/preview');
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setInvoiceTitle(newTitle);
    setinvoiceData((prev) => ({
      ...prev,
      title: newTitle, // Update the invoice title in the invoice data
    }));
  };

  const handleTitleBlur = () => {
    setIsEdittingTitle(false);
  };

  const handleTitleEdit = () => {
    setIsEdittingTitle(true);
  };

  return (
    <div className="mainpage container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items-center">
            {isEdittingTitle ? (
              <input
                type="text"
                className="form-control me-2"
                autoFocus
                value={invoiceTitle}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
              />
            ) : (
              <>
                <h5 className="mb-0 me-2">{invoiceTitle}</h5>
                <button
                  className="btn btn-sm p-0 border-0 bg-transparent"
                  onClick={handleTitleEdit}
                >
                  <Pencil className="text-primary" size={20} />
                </button>
              </>
            )}
          </div>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-12 col-lg-6">
            <InvoiceForm />
          </div>
          <div className="col-12 col-lg-6">
            <TemplateGrid onTemplateClick={handleTemplateClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;