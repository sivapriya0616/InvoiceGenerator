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
import in.priya.invoicegeneratorapi.service.EmailService;
import in.priya.invoicegeneratorapi.service.InvoiceService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.slf4j.Logger; // 1. Import the Logger
import org.slf4j.LoggerFactory; // 2. Import the LoggerFactory
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
@CrossOrigin("*")
public class InvoiceController {

    private final InvoiceService invoiceService;
    private final EmailService emailService; // Assuming you have an EmailService for sending emails

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
@GetMapping
public ResponseEntity<List<Invoice>> fetchInvoices() {
    return ResponseEntity.ok(invoiceService.fetchInvoices());
}

@DeleteMapping("/{id}")
public ResponseEntity<Void> removeInvoice(@PathVariable String id) {
    invoiceService.removeInvoice(id);
    return ResponseEntity.noContent().build();
}
   @PostMapping("/sendinvoice")
public ResponseEntity<?> sendInvoice(
        @RequestPart("file") MultipartFile file,
        @RequestPart("email") String customerEmail) {
    try {
        emailService.sendInvoiceEmail(customerEmail, file);
        return ResponseEntity.ok().body("Invoice sent successfully.");
    } catch (Exception e) {
        return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Failed to send invoice.");
    }
}


}