package in.priya.invoicegeneratorapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import in.priya.invoicegeneratorapi.repository.InvoiceRepository;
import in.priya.invoicegeneratorapi.entity.Invoice;
import java.util.List;

@Service
@RequiredArgsConstructor
public class InvoiceService {  

    private final InvoiceRepository invoiceRepository;

    public Invoice saveInvoice(Invoice invoice) {
        return invoiceRepository.save(invoice);
    }
    public List<Invoice> fetchInvoices  () {
        return invoiceRepository.findAll();
    }
    
}
