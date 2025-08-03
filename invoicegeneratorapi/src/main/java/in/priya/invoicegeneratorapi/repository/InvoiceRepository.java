package in.priya.invoicegeneratorapi.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import in.priya.invoicegeneratorapi.entity.Invoice; // Import the Invoice class

public interface InvoiceRepository extends MongoRepository<Invoice, String> {
    // Custom query methods can be defined here if needed

}
