export const formatInvoiceData = (invoiceData)=> {
    const {
      title = "",
      company = {},
      invoice = {},
      account = {},
      billing = {},
      shipping = {},
      tax = 0,
      notes = "",
      items = [],
      logo = ""
    } = invoiceData || {};
  
    const currencySymbol= "Rs."; // or "$", "₹", etc.
  
    const subtotal = items.reduce((acc, item) => {
      return acc + (item.qty * item.amount);
    }, 0);
  
    const taxAmount = subtotal * (tax / 100);
    const total = subtotal + taxAmount;
  
    // console.log("Subtotal:", currencySymbol + subtotal);
    // console.log("Tax:", currencySymbol + taxAmount);
    // console.log("Total:", currencySymbol + total);
    return {
  title,
  companyName: company.name,
  companyAddress: company.address,
  companyPhone: company.phone ,
  companyLogo: logo ,
  invoiceNumber: invoice.number ,
  invoiceDate: invoice.date,
  paymentDate: invoice.dueDate ,
  accountName: account.name ,
  accountNumber: account.number ,
  accountBranch: account.branch ,
  billingName: billing.name,
  billingAddress: billing.address,
  billingPhone: billing.phone ,
    shippingName: shipping.name ,
    shippingPhone: shipping.phone ,

    shippingAddress: shipping.address ,
    currencySymbol,
    tax,
    items,
    notes,
    subtotal,
    taxAmount,
    total
};

  };

  export const formatDate = (dateStr)=> {
  if (!dateStr) return "N/A";

  const date = new Date(dateStr);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
