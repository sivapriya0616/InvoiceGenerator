// package in.priya.invoicegeneratorapi.controller;


// import lombok.RequiredArgsConstructor;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import in.priya.invoicegeneratorapi.entity.Invoice;
// import in.priya.invoicegeneratorapi.service.InvoiceService;

// @RestController
// @RequiredArgsConstructor
// @RequestMapping("/api/invoices")
// @CrossOrigin("*") // Allow all origins for CORS
// public class InvoiceController {

//     private final InvoiceService invoiceService;

//     @PostMapping
//     public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice) {
//         return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
//     }
// }
package in.priya.invoicegeneratorapi.controller;

import in.priya.invoicegeneratorapi.entity.Invoice;
import in.priya.invoicegeneratorapi.service.InvoiceService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger; // 1. Import the Logger
import org.slf4j.LoggerFactory; // 2. Import the LoggerFactory
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
@CrossOrigin("*")
public class InvoiceController {

    private final InvoiceService invoiceService;

    // 3. Create a logger instance for this class
    private static final Logger logger = LoggerFactory.getLogger(InvoiceController.class);

    @PostMapping
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice) {
        // 4. Log the received invoice object. The {} is a placeholder for the invoice.
        logger.info("Received request to save invoice: {}", invoice);

        Invoice savedInvoice = invoiceService.saveInvoice(invoice);

        // 5. (Optional) Log the invoice after it's saved
        logger.info("Successfully saved invoice with ID: {}", savedInvoice.getId());

        return ResponseEntity.ok(savedInvoice);
    }
}