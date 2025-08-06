package in.priya.invoicegeneratorapi.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import in.priya.invoicegeneratorapi.entity.Invoice;
import in.priya.invoicegeneratorapi.service.InvoiceService;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/invoices")
@CrossOrigin("*") // Allow all origins for CORS
public class InvoiceController {

    private final InvoiceService invoiceService;

    @PostMapping
    public ResponseEntity<Invoice> saveInvoice(@RequestBody Invoice invoice) {
        return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
    }
}
