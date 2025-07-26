import React, { useContext } from 'react'; // Add useContext here
import { AppContext } from '../context/AppContext.jsx';
import { Pencil } from 'lucide-react';
import InvoiceForm from '../components/InvoiceForm.jsx'; // Ensure this path is correct
import TemplateGrid from '../components/TemplateGrid.jsx'; // Ensure this path is correct

const MainPage = () => {
  const [isEdittingTitle, setIsEdittingTitle] = React.useState(false);
  const { invoiceTitle, setInvoiceTitle } = useContext(AppContext); // Destructure context values
   const handleTitleChange = (e) => {
    setInvoiceTitle(e.target.value);
  }
  const handleTitleBlur = () => {
    setIsEdittingTitle(false);
  }
  const handleTitleEdit = () => {
    setIsEdittingTitle(true);
  }

  return (
    <div className=" mainpage container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items-center">
            {isEdittingTitle ? (
              <input
                type="text"
                className="form-control me-2"
                autoFocus
                value={invoiceTitle}
                onChange={(e) => handleTitleChange(e)}
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
          {/* Invoice form */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              <InvoiceForm/>
            </div>
          </div>

          {/* Template grid */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              <TemplateGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;