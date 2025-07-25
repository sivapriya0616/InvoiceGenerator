import React from 'react'
import { assets } from '../assets/assets.js'; // Ensure this path is correct

const InvoiceForm = () => {
    return (
        <div className="invoiceform container py-4">
            <div className="mb-4">
                <div className="mb-4">
                    <h5>Company Logo</h5>
                    <div className="d-flex align-items-center gap-3">
                        <label htmlFor="image" className="form-label">
                            <img src={assets.uploadarea} alt="upload" width={78} style={{ cursor: 'pointer' }} />
                        </label>
                        <input
                            type="file"
                            name="logo"
                            id="image"
                            hidden
                            className="form-control"
                            accept="image/*"
                        />
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <h5>Your Company</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company phone" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Company address" />
                    </div>
                </div>

            </div>
            <div className="mb-4">

            </div>
            <div className="mb-4">

            </div>
            <div className="mb-4">

            </div>
            <div className="mb-4">

            </div>
            <div className="mb-4">

            </div>
            <div className="mb-4">

            </div>
        </div>
    );

}

export default InvoiceForm