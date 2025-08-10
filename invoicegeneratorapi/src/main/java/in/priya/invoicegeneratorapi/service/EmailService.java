package in.priya.invoicegeneratorapi.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

import java.io.IOException;
import org.springframework.mail.javamail.JavaMailSender;
// import javax.mail.MessagingException;
import org.springframework.mail.javamail.MimeMessageHelper;

@Service
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender mailSender;

    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

    public void sendInvoiceEmail(String toEmail, MultipartFile file) throws MessagingException, IOException {
        // method body
        MimeMessage message = mailSender.createMimeMessage();

MimeMessageHelper helper = new MimeMessageHelper(message, true); // true = multipart

helper.setFrom(fromEmail);
helper.setTo(toEmail);
helper.setSubject("Your Invoice");
helper.setText("Dear Customer,\n\nPlease find attached your invoice.\n\nThank you!");

// Attach file
helper.addAttachment(file.getOriginalFilename(), new ByteArrayResource(file.getBytes()));

// Send the message
mailSender.send(message);

    }
}
