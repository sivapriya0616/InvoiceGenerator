import React from 'react'
import { AppContext } from '../context/AppContext.jsx'; // Ensure the path is correct

import { assets } from '../assets/assets.js'; // Ensure this path is correct
import { Trash2 } from 'lucide-react';
import { useContext ,useEffect } from 'react';


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
    const handleItemChange = (index, field, value)=> {
        const items = [...invoiceData.items];
      
        items[index][field] = value;
      
        if (field === "qty" || field === "amount") {
          const qty = Number(items[index].qty) || 0;
          const amount = Number(items[index].amount) || 0;
          items[index].total = qty * amount;
        }
      
        setInvoiceData((prev) => ({
          ...prev,
          items,
        }));
      };
      const calculateTotal = ()=> {
        const subtotal = invoiceData.items.reduce((sum, item) => sum + (item.total || 0), 0);
      
        const taxRate = Number(invoiceData.tax || 0);
      
        const taxAmount = (subtotal * taxRate) / 100;
      
        const grandTotal = subtotal + taxAmount;
      
        return { subtotal, taxAmount, grandTotal };
      };
      
     const {subtotal, taxAmount, grandTotal} = calculateTotal();
    // This function calculates the total, tax amount, and grand total based on the items and tax rate
    // You can use this function to display the totals in your form
      
    const handlLogoUpload = (e)=> {
        const file = e.target.files[0];
        if (file) {
          const reader= new FileReader();
          reader.onloadend = () => {
            setInvoiceData((prev) => ({
              ...prev,
              logo: reader.result,
            }))
          };
          reader.readAsDataURL(file);
        }
      };
      useEffect(() => {
        if (!invoiceData.invoice.number) {
            const now = new Date();

  // Format date with time down to milliseconds: YYYYMMDDHHmmssSSS
  const datePart = now.getFullYear().toString() +
    (now.getMonth() + 1).toString().padStart(2, '0') +
    now.getDate().toString().padStart(2, '0') +
    now.getHours().toString().padStart(2, '0') +
    now.getMinutes().toString().padStart(2, '0') +
    now.getSeconds().toString().padStart(2, '0') +
    now.getMilliseconds().toString().padStart(3, '0');

  
  // Generate a random 6-digit number
  const randomPart = Math.floor(100000 + Math.random() * 900000).toString();

  // Combine prefix, date and random number
  const InvoiceNumber=`INV-${datePart}-${randomPart}`;
          const randomNumber = InvoiceNumber;
          setInvoiceData(prev => ({
            ...prev,
            invoice: {
              ...prev.invoice,
              number: randomNumber,
            },
          }));
        }
      }, [invoiceData.invoice.number, setInvoiceData]);
      const handleSubmit = () => {
        // Handle form submission logic here
        console.log("Invoice Data Submitted:", invoiceData);
        // You can send this data to your server or handle it as needed
      }
      
    return (
        <div className="invoiceform container py-4">
            <div className="mb-4">
                <div className="mb-4">
                    <h5>Company Logo</h5>
                    <div className="d-flex align-items-center gap-3">
                        <label htmlFor="image" className="form-label">
                            <img src={invoiceData.logo? invoiceData.logo:assets.uploadarea} alt="upload" width={78} style={{ cursor: 'pointer' }} />
                        </label>
                        <input
                            type="file"
                            name="logo"
                            id="image"
                            hidden
                            className="form-control"
                            accept="image/*"
                            onChange={handlLogoUpload}
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

                        <input type="text" disabled className="form-control"  id='invoiceNumber' onChange={(e)=>handleChange("invoice","number",e.target.value)} value={invoiceData.invoice.number} />
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
                                <input type="text" className="form-control" placeholder="Item Name" value={item.name} onChange={(e)=>handleItemChange(index,"name",e.target.value)}/>
                            </div>
                            <div className="col-md-3">
                                {/* Quantity */}
                                <input type="number" className="form-control" placeholder="Quantity" value={item.qty} onChange={(e)=>handleItemChange(index,"qty",e.target.value)} />
                            </div>
                            <div className="col-md-3">
                                {/* Price */}
                                <input type="number" className="form-control" placeholder="Price" value={item.amount} onChange={(e)=>handleItemChange(index,"amount",e.target.value)} />
                            </div>
                            <div className="col-md-3">
                                {/* Total (optional, calculated field maybe) */}
                                <input type="number" className="form-control" placeholder="Total" disabled value={item.total} />
                            </div>
                        </div>
                        <div className="d-flex gap-2">
                            <textarea className="form-control" placeholder="Description"  value={item.description} onChange={(e)=>handleItemChange(index,"description",e.target.value)}></textarea>
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
                            value={invoiceData.account.name}
                            onChange={(e) => handleChange("account", "name", e.target.value)}
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Account Number"
                            value={invoiceData.account.number}
                            onChange={(e) => handleChange("account", "number", e.target.value)}
                        />
                    </div>

                    <div className="col-md-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Branch"
                            value={invoiceData.account.branch}
                            onChange={(e) => handleChange("account", "branch", e.target.value)}
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
                                <span>LKR {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-center my-2">
                                <label htmlFor="tax" className="me-2">Tax(%):</label>
                                <input
                                    type="number"
                                    className="form-control w-50 text-end"
                                    id="tax"
                                    placeholder="2%" 
                                    value={invoiceData.tax}
                                    onChange={(e) => setInvoiceData((prev) => ({
                                        ...prev,
                                        tax: e.target.value
                                    }))}/>
                            </div>
                            <div className="d-flex justify-content-between fw-bold">
                                <span>Tax Amount</span>
                                <span>LKR {taxAmount.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between fw-bold mt-2">
                                <span>Total</span>
                                <span>LKR {grandTotal.toFixed(2)}</span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className="mb-4">
                <h5>Notes:</h5>
                <div className="w-100">
                    <textarea name="notes" className="form-control" rows={3}
                    value={invoiceData.notes} onChange={(e)=>setInvoiceData((prev)=>({
                        ...prev,
                        notes: e.target.value
                    }))}></textarea>
                </div>


            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );

}

export default InvoiceForm