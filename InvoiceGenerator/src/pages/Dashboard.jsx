import { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
// import { AxiosResponse } from "axios";
// import { getAllInvoices } from "../api/invoiceApi";  // Adjust import path
import { AppContext } from "../context/AppContext";  // Adjust import path
import { Plus } from "lucide-react";  // Adjust import path
import "../index.css";  // Import global styles
import { formToJSON } from "axios";
import { formatDate } from "../util/formatInvoice";

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);
  const { baseURL } = useContext(AppContext);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await getAllInvoices(baseURL);
        setInvoices(response.data);
      } catch (error) {
        toast.error("Failed to load invoices");
      }
    };

    fetchInvoices();
  }, [baseURL]);

  return (
    <div>
      <div className="container py-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
          {/* Create New Invoice card */}
          <div className="col">
            <div className="card h-100 d-flex justify-center align-items-center border-light shadow-sm cursor-pointer" style={{ minHeight: '270px' }}>
              <Plus size={48} />
              <p className="mt-3 fw-medium">create New Invoice</p>

            </div>
          </div>
          {/* Render the existing invoices  */}
          {invoices.map((invoice, idx) => (
            <div className="col" key={idx}>
              <div className="card h-100 shadow-sm cursor-pointer" style={{ minHeight: '270px' }}>
                {invoice.thumbnailurl && (
                  <img src={invoice.thumbnailurl} className="card-img-top" style={{ height: '200px', objectFit: "cover" }} />
                )}
                <div className="card-body">
                  <h6 className="card-title mb-1">{invoice.title}</h6>
                  <small className="text-muted">
                    Last Updated: {formatDate(invoice.lastUpdatedAt)}
                  </small>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
