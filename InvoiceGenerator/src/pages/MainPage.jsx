import React, { useContext } from 'react'; // Add useContext here
import { AppContext } from '../context/AppContext.jsx';
import { Pencil } from 'react-bootstrap-icons';

const MainPage = () => {
  const [isEdittingTitle, setIsEdittingTitle] = React.useState(false);
  const { invoiceTitle, setInvoiceTitle } = useContext(AppContext); // Destructure context values

  return (
    <div className="container-fluid bg-light min-vh-100 py-4">
      <div className="container">
        <div className="bg-white border rounded shadow-sm p-3 mb-4">
          <div className="d-flex align-items-center">
            {isEdittingTitle ? (
              <input
                type="text"
                className="form-control me-2"
                autoFocus
                value={invoiceTitle}
                onChange={(e) => setInvoiceTitle(e.target.value)}
                onBlur={() => setIsEdittingTitle(false)}
              />
            ) : (
              <>
                <h5 className="mb-0 me-2">{invoiceTitle}</h5>
                <button
                  className="btn btn-sm p-0 border-0 bg-transparent"
                  onClick={() => setIsEdittingTitle(true)}
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
              Invoice Form
            </div>
          </div>

          {/* Template grid */}
          <div className="col-12 col-lg-6 d-flex">
            <div className="bg-white border rounded shadow-sm p-4 w-100">
              Template Grid
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;