import jsPDF from "jspdf";
import html2canvas from "html2canvas"; // You need to import this too!

export const generatePdfFromElement = async (
  element,
  fileName = "invoice.pdf",
  returnBlob = false
) => {
  // Step 1: Render element as canvas
  const canvas= await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#fff",
    scrollY: -window.scrollY, // correct way to reference scrollY
  });

  // Step 2: Get the image data
  const imgData= canvas.toDataURL("image/jpeg");

  // Step 3: Create new PDF
  const pdf= new jsPDF("p", "pt", "a4");

  // Step 4: Get image properties
  const imgProps = pdf.getImageProperties(imgData);

  // Step 5: Calculate dimensions for A4 scaling
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  // Step 6: Add image to PDF
  pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

  // Step 7: Save the PDF file
  if (returnBlob) {
    return pdf.output("blob");
  } else {
    pdf.save(fileName);
  }
  
};
