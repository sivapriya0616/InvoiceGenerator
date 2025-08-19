# InvoiceGenerator

A **React + Spring Boot + MongoDB** full-stack invoice builder with PDF export, Cloudinary thumbnails, email delivery, and a simple dashboard.

---

## ✨ Features

* Build invoices with company, billing, shipping, items, tax, notes, and logo
* Live preview with switchable templates
* Generate & download PDF (client-side with jsPDF + html2canvas)
* Save invoices to MongoDB with audit fields (created/updated dates)
* Generate thumbnails & upload to Cloudinary
* Dashboard to list, open, and delete invoices
* Send invoice via email with PDF attachment (backend endpoint)

---

## 🛠 Tech Stack

**Frontend**

* React (Vite)
* React Router
* Bootstrap
* jsPDF & html2canvas

**Backend**

* Spring Boot 3 (Java 21)
* MongoDB
* JavaMail
* Lombok

**Integrations**

* Cloudinary (thumbnails)
* SMTP (Brevo, SendGrid, Gmail, etc.)

---

## 📂 Monorepo Structure

```
InvoiceGenerator/                # Root
├─ InvoiceGenerator/             # Frontend (React + Vite)
│  ├─ src/
│  │  ├─ pages/                  # MainPage, PreviewPage, Dashboard
│  │  ├─ components/             # InvoicePreview, etc.
│  │  ├─ context/                # AppContext (global state + API URL)
│  │  ├─ service/                # invoicesevice.js, cloudinaryService.js
│  │  ├─ util/                   # Helpers (formatInvoice, pdfUtil)
│  │  └─ templates/              # Visual invoice templates
└─ invoicegeneratorapi/          # Backend (Spring Boot)
   ├─ controller/                # InvoiceController
   ├─ entity/                    # Invoice model
   ├─ repository/                # InvoiceRepository
   ├─ service/                   # InvoiceService, EmailService
   └─ resources/                 # application.properties
```

---

## ⚡ Quick Start

### Prerequisites

* Node.js 18+ (recommended 20+)
* Java 21 (JDK)
* Maven 3.9+
* MongoDB running locally
* Cloudinary account (unsigned upload preset)
* SMTP credentials (e.g., Brevo, SendGrid, Gmail)

### Run Locally

1. **Start MongoDB**

   * Default DB: `invoicedb`

2. **Backend** (Spring Boot)

   ```bash
   cd invoicegeneratorapi
   mvn spring-boot:run
   ```

   * Default port: **8080**
   * Configure MongoDB & SMTP in environment variables or `application.properties`

3. **Frontend** (React + Vite)

   ```bash
   cd InvoiceGenerator
   npm install
   npm run dev
   ```

   * Default port: **5173**
   * API base URL is set in `AppContext.jsx`

---

## 🔗 API Endpoints

Base URL: `http://localhost:8080/api`

* **POST /invoices** → Save invoice
* **GET /invoices** → List all invoices
* **DELETE /invoices/{id}** → Delete invoice
* **POST /invoices/sendinvoice** → Send invoice via email (PDF attachment)

---

## 🚀 How It Works

* **Build**: Enter invoice details on MainPage, select a template, preview live
* **Save**: Preview → Save generates thumbnail, uploads to Cloudinary, saves invoice in MongoDB
* **Dashboard**: Lists saved invoices with thumbnails & last updated date
* **PDF**: Download invoices as PDF (client-side render)
* **Delete**: Remove invoices from Dashboard/Preview
* **Email**: Backend endpoint sends invoice as email attachment

---

## 🔧 Troubleshooting

* **MongoDB connection error** → Check `spring.data.mongodb.uri`
* **CORS issues** → Backend allows all origins (`@CrossOrigin("*")`)
* **PDF quality** → Adjust scale in `pdfUtil.js`
* **Email fails** → Verify SMTP config, TLS, and sender domain
* **Cloudinary 400 error** → Check unsigned preset & cloud name

---

## 🔐 Security Notes

* Do **not** commit real SMTP/Mongo/Cloudinary credentials
* Use environment variables for secrets
* Add authentication/authorization if exposing API publicly

---

## 🗺 Roadmap

* Hook up frontend "Send Email" button → call backend `/sendinvoice`
* More templates & customization options
* Pagination + search on dashboard
* Docker Compose setup (MongoDB + API + UI)
* Improved validation & error handling
* Tests (unit & integration)

---

## 📜 License

This project is licensed under the **MIT License**.

---

👉 Would you like me to also add **status badges** (React version, Java, license, deploy status) at the top so your GitHub page looks more professional?
