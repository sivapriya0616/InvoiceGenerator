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
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone number" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Address" />
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5>Ship To</h5>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="sameAsBilling" />
                            <label htmlFor="sameAsBilling" className="form-check-label">
                                Same as Billing
                            </label>
                        </div>
                    </div>
                </div>


                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone number" />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping Address" />
                    </div>
                </div>


            </div>
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                    <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>

                        <input type="text" disabled className="form-control" placeholder="Invoice Number" id='invoiceNumber' />
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>

                        <input type="date" className="form-control" id='invoiceDate' />
                    </div>
                    <div className="col-md-4">
                    <label htmlFor="invoiceDueDate" className="form-label">Invoice Due Date</label>

                        <input type="date" className="form-control"  id='invoiceDueDate'/>
                    </div>
                </div>

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