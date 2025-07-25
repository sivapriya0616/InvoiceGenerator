import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();

// Create the provider component
export const AppContextProvider = ({ children }) => {
  // State for the invoice title
  const [invoiceTitle, setInvoiceTitle] = useState("New Invoice");

  // Context value to be shared
  const contextValue = {
    invoiceTitle,
    setInvoiceTitle,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};