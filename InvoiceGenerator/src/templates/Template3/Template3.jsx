import React from 'react'
import './Template3.css' // Import the CSS file for Template1 styles;

const Template3 = ({ data }) => {
    return (
        <div className="template1 border rounded mx-auto my-4 px-sm-4 py-3 w-100">
            {/* Header section */}
            <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                    {data.companyLogo && (
                        <div className="mb-2">
                            <img src={data.companyLogo} alt="Company logo" width={98} />
                        </div>
                    )}
                    <h2 className="mb-1 company-title">{data.companyName}</h2>
                    <p className="mb-1">{data.companyAddress}</p>
                    <p className="mb-0">Phone: {data.companyPhone}</p>
                </div>

                <div className="col-md-6 text-start text-md-end">
                    <h1 className="mb-2 invoice-title">Invoice</h1>
                    <div className="d-flex flex-column flex-md-row justify-content-md-end gap-2 gap-md-4">
                        <div className="w-100 w-md-50 mb-3 mb-md-0">
                            <p className='mb-1'>
                                <strong>Invoice No:</strong> {data.invoiceNumber}
                            </p>
                            <p className='mb-1'>
                                <strong>Invoice Date:</strong> {data.invoiceDate}
                            </p>
                            <p className='mb-1'>
                                <strong>Due Date:</strong> {data.paymentDate}
                            </p>
                            {/* Additional invoice details can go here, like Invoice No or Date */}
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-3 orange-border" />


            {/* Billing section */}
            <div className="row g-3 mb-4">
                {data.shippingName && data.shippingPhone && data.shippingAddress && (
                    <div className="col-md-6">
                        <div className="p-3 rounded h-100 billing-box">
                            <h3 className="mb-2 billing-title">Shipped To</h3>
                            <p className="mb-1">
                                <strong>{data.shippingName}</strong>
                            </p>
                            <p className="mb-1">{data.shippingAddress}</p>
                            <p className="mb-0">Phone: {data.shippingPhone}</p>
                        </div>
                    </div>
                )}
                <div className="col-md-6">
                    <div className="p-3 rounded h-100 billing-box">
                        <h3 className="mb-2 billing-title">Billed To</h3>
                        <p className="mb-1">
                            <strong>{data.billingName}</strong>
                        </p>
                        <p className="mb-1">{data.billingAddress}</p>
                        <p className="mb-0">Phone: {data.billingPhone}</p>
                    </div>
                </div>
            </div>
            <hr className="my-3 orange-border" />

            {/* Items section */}
            <div className="mb-4">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="p-2 table-header">Item description</th>
                                <th className="p-2 text-center table-header">Qty.</th>
                                <th className="p-2 text-end table-header">Rate</th>
                                <th className="p-2 text-end table-header">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.items.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-2">{item.name}</td>
                                    <td className="p-2 text-center">{item.qty}</td>
                                    <td className="p-2 text-end">
                                        LKR{Number(item.amount)?.toFixed(2)}
                                    </td>
                                    <td className="p-2 text-end">
                                        LKR{(Number(item.qty) * Number(item.amount)).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>


                        {/* You can add tbody here with table rows */}
                    </table>
                </div>
            </div>



            {/* Totals section */}

            <div className="mb-4">
                <div className="d-flex justify-content-end">
                    <div className="p-3 w-100 totals-box" style={{ maxWidth: "300px" }}>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Sub Total: </span>
                            <span>{data.subtotal.toFixed(2)}</span>
                        </div>
                        {data.tax > 0 && (
                            <div className="d-flex justify-content-between mb-2">
                                <span>Tax ({data.tax}%):</span>
                                <span>LKR{data.taxAmount.toFixed(2)}</span>
                            </div>
                        )}

                        <div className="d-flex justify-content-between fw-bold total-highlight">
                            <span>Total:</span>
                            <span>LKR{data.total.toFixed(2)}</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bank account section */}
            {(data.accountName || data.accountNumber || data.accountIfscCode) && (
  <div className="mt-4">
    <h3 className="mb-2 billing-title">Bank Account Details</h3>

    {data.accountName && (
      <p className="mb-1">
        <strong>Account Holder: </strong> {data.accountName}
      </p>
    )}

    {data.accountNumber && (
      <p className="mb-1">
        <strong>Account Number: </strong> {data.accountNumber}
      </p>
    )}

    {data.accountBranch && (
      <p className="mb-0">
        <strong>Branch </strong> {data.branch}
      </p>
    )}

  </div>
)}


            {/* Notes section */}
            {data.notes && (
                <div className="mt-4">
                    <h3 className="mb-2 billing-title">Notes</h3>
                    <p className='mb-0'>{data.notes}</p>
                </div>
            )}

            {/* Footer section */}
        </div>

    )
}

export default Template1