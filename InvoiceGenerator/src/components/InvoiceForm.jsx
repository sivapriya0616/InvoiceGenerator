import React from 'react'
import { AppContext } from '../context/AppContext.jsx'; // Ensure the path is correct

import { assets } from '../assets/assets.js'; // Ensure this path is correct
import { Trash2 } from 'lucide-react';
import { useContext } from 'react';


const InvoiceForm = () => {
    const { invoiceData, setInvoiceData } = useContext(AppContext);
    const addItem = () => {
        setInvoiceData((prev) => ({
            ...prev,
            items: [...prev.items, { name: "", qty: "", amount: "", description: "", total: 0 }]
        }));

    }
    const deleteItem = (index) => {
        const updatedItems = invoiceData.items.filter((_, i) => i !== index);
        setInvoiceData((prev) => ({
            ...prev,
            items: updatedItems
        }));
    }
    const handleChange = (section, field, value) => {
        setInvoiceData((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value,
            },
        }));
    };
    const handleSameAsBilling =()=>{
        setInvoiceData((prev) => ({
            ...prev,
            shipping: {
                ...prev.billing
            }
        }));
    }


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
                        <input type="text" className="form-control" placeholder="Company name" onChange={(e) => handleChange("company", "name", e.target.value)} value={invoiceData.company.name} />
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Company phone" onChange={(e) => handleChange("company", "phone", e.target.value)} value={invoiceData.company.phone} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Company address" onChange={(e) => handleChange("company", "address", e.target.value)} value={invoiceData.company.address} />
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <h5>Bill To</h5>
                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name"  onChange={(e)=>handleChange("billing","name",e.target.value)} value={invoiceData.billing.name}/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone number" onChange={(e)=>handleChange("billing","phone",e.target.value)} value={invoiceData.billing.phone} />
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Address"  onChange={(e)=>handleChange("billing","address",e.target.value)} value={invoiceData.billing.address}/>
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5>Ship To</h5>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="sameAsBilling"  onChange={handleSameAsBilling}/>
                            <label htmlFor="sameAsBilling" className="form-check-label">
                                Same as Billing
                            </label>
                        </div>
                    </div>
                </div>


                <div className="row g-3">
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Name"  onChange={(e)=>handleChange("shipping","name",e.target.value)} value={invoiceData.shipping.name}/>
                    </div>
                    <div className="col-md-6">
                        <input type="text" className="form-control" placeholder="Phone number"  onChange={(e)=>handleChange("shipping","phone",e.target.value)} value={invoiceData.shipping.phone}/>
                    </div>
                    <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Shipping Address" onChange={(e)=>handleChange("shipping","address",e.target.value) } value={invoiceData.shipping.address} />
                    </div>
                </div>


            </div>
            <div className="mb-4">
                <h5>Invoice Information</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <label htmlFor="invoiceNumber" className="form-label">Invoice Number</label>

                        <input type="text" disabled className="form-control" placeholder="Invoice Number" id='invoiceNumber' onChange={(e)=>handleChange("invoice","number",e.target.value)} value={invoiceData.invoice.number} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDate" className="form-label">Invoice Date</label>

                        <input type="date" className="form-control" id='invoiceDate' onChange={(e)=>handleChange("invoice","date",e.target.value)} value={invoiceData.invoice.date} />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="invoiceDueDate" className="form-label">Invoice Due Date</label>

                        <input type="date" className="form-control" id='invoiceDueDate' onChange={(e)=>handleChange("invoice","dueDate",e.target.value)} value={invoiceData.invoice.dueDate} />
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <h5>Item Details</h5>
                {invoiceData.items.map((item, index) => (

                    <div key={index} className="card p-3 mb-3">
                        <div className="row g-3 mb-2">
                            <div className="col-md-3">
                                {/* Item Name or similar input */}
                                <input type="text" className="form-control" placeholder="Item Name" />
                            </div>
                            <div className="col-md-3">
                                {/* Quantity */}
                                <input type="number" className="form-control" placeholder="Quantity" />
                            </div>
                            <div className="col-md-3">
                                {/* Price */}
                                <input type="number" className="form-control" placeholder="Price" />
                            </div>
                            <div className="col-md-3">
                                {/* Total (optional, calculated field maybe) */}
                                <input type="number" className="form-control" placeholder="Total" />
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <textarea className="form-control" placeholder="Description" ></textarea>
                            {invoiceData.items.length > 1 && (<button className="btn btn-outline-danger" onClick={() => deleteItem(index)} type="button">
                                <Trash2 size={18} />
                            </button>)}

                            {/* You can place extra controls or actions here */}
                        </div>
                    </div>
                ))}
                <button className="btn btn-primary" type="button" onClick={addItem}>Add Item</button>

            </div>
            <div className="mb-4">
                <h5>Bank Account Details</h5>
                <div className="row g-3">
                    <div className="col-md-4">
                        <input
                            type="text"

                            className="form-control"
                            placeholder="Account Holder Name"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Account Number"
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Branch"
                        />
                    </div>
                </div>

            </div>
            <div className="mb-4">
                {/* Totals */}
                <div className="mb-4">
                    <h5>Totals</h5>
                    <div className="d-flex justify-content-end">
                        <div className="w-100 w-md-50">
                            <div className="d-flex justify-content-between ">
                                <span>Subtotal:</span>
                                <span>LKR {1000.00}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-2">
                                <label htmlFor="tax" className="me-2">Tax(%):</label>
                                <input
                                    type="number"
                                    className="form-control w-50 text-end"
                                    id="tax"
                                    placeholder="2%" />
                            </div>
                            <div className="d-flex justify-content-between fw-bold">
                                <span>Tax Amount</span>
                                <span>LKR {1000.00}</span>
                            </div>
                            <div className="d-flex justify-content-between fw-bold mt-2">
                                <span>Total</span>
                                <span>LKR {1000.00}</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <h5>Notes:</h5>
                <div className="w-100">
                    <textarea name="notes" className="form-control" rows={3}></textarea>
                </div>


            </div>
        </div>
    );

}

export default InvoiceForm