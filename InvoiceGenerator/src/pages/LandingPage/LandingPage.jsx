import React from 'react'
import { assets } from '../../assets/assets.js';
import './LandingPage.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const LandingPage = () => {
  return (
    <>
      {/* Hero Section: Full-width, centered text with background image */}
      <header id="hero" className="hero-section text-white bg-primary text-center">
        <div className="container py-5 d-flex flex-column justify-content-center" style={{ height: '100vh' }}> {/* style code not sure */}
          <div className="row py-lg-5">
            <div className="col-lg-9 col-md-10 mx-auto">
              <h1 className="display-3 fw-bold mb-4">
                Effortless Invoicing. Professional Results.
              </h1>
              <p className="lead mb-5" style={{ fontSize: '1.3rem' }}>
                Stop wrestling with spreadsheets. QuickInvoice helps you create and send beautiful invoices in minutes, so you get paid faster.
              </p>
              <p>
                {/* Primary call to action */}
                <button className="btn btn-lg btn-warning fw-bold rounded-pill my-2 mx-1 px-5 py-3 ">
                  Generate Your First Invoice
                </button>
                {/* Secondary call to action */}
                <a href="#how-it-works" className="btn btn-lg btn-outline-light rounded-pill my-2 mx-1 px-5 py-3">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        </div>
      </header >

      <section id="how-it-works" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">
            Get Started in 4 Simple Steps </h2>
          <div className="row g-4 justify-content-center">
            {/* Step 1 Card */}
            <div className="col-md-6 col-lg-3 d-flex ">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill hover-shadow">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 " style={{ backgroundColor: '#b9c9ed' }} >
                  <img src="https://placehold.co/150x150/0D6EFD/FFFFFF?text=1&font=montserrat"
                    className="rounded-circle"
                    alt="Enter Details"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Enter Details
                  </h5>
                  <p className="card-text text-muted small">
                    Quickly fill in your clients information, item descriptions, quantities, and prices. Our intuitive form makes it a breeze.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 Card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill hover-shadow">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 " style={{ backgroundColor: '#defad4' }}>
                  <img src="https://placehold.co/150x150/086e1c/FFFFFF?text=2&font=montserrat"
                    className="rounded-circle"
                    alt="Choose Template"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Choose Template
                  </h5>
                  <p className="card-text text-muted small">
                    Browse our gallery of professionally designed templates. Pick one that matches your brand and style.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 Card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill hover-shadow">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 " style={{ backgroundColor: '#fae3d4' }} >
                  <img src="https://placehold.co/150x150/fc9803/FFFFFF?text=3&font=montserrat"
                    className="rounded-circle"
                    alt="Preview Invoice"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/EeE0E0/000000?text=Error'; }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Preview Invoice
                  </h5>
                  <p className="card-text text-muted small">
                    See exactly how your invoice will look before sending it. Make any last-minute adjustments with ease.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 Card */}
            <div className="col-md-6 col-lg-3 d-flex">
              <div className="card h-100 shadow-sm border-0 text-center flex-fill hover-shadow">
                <div className="card-img-top-container d-flex align-items-center justify-content-center p-4 " style={{ backgroundColor: '#ccfcf8' }} >
                  <img src="https://placehold.co/150x150/03b6fc/FFFFFF?text=4&font=montserrat"
                    className="rounded-circle"

                    alt="Download & Save"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/E0E0E0/000000?text=Error'; }}
                  />
                </div>
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold mb-2 fs-5">
                    Download & Save
                  </h5>
                  <p className="card-text text-muted small">
                    Download your invoice as a PDF, send it directly via email, or save it for your records and future reference.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features section */}

      <section id="features" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5 display-5 fw-bold">Why Choose QuickInvoice?</h2>

          {/* feature 1 */}
          <div className="row allign-items-center gy-4">
            <div className="col-md-6">
              <img
                src={assets.landing1} 
                alt="Invoice Customization"
                className="img-fluid rounded shadow-lg hover-shadow"
                onError={(e) => { e.target.onError = null; e.target.src = "" }} />
            </div>

            <div className="col-md-6">
              <h3 className="fw-bold mx-2">
                Easy to fill Invoice Details
              </h3>
              <p className="text-muted lead fs-6 mx-2">
                Keep track of all your invoices in one place. Our dashboard gives you a clear overview of sent, paid, and overdue invoices, so you can manage your finances effortlessly.
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
              </ul>
            </div>
          </div>

          {/* feature 2 */}
          <div className="row allign-items-center gy-4 mt-5 flex-row-reverse">
            <div className="col-md-6">
              <img
                src={assets.landing2}
                alt="Time Saving"
                className="img-fluid rounded shadow-lg hover-shadow"
                onError={(e) => { e.target.onError = null; e.target.src = "" }} />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">
                Beautifull Dashboard
              </h3>
              <p className="text-muted lead fs-6 mx-2">
                description 2
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
              </ul>
            </div>
          </div>

          {/* feature 3 */}
          <div className="row allign-items-center mt-5 gy-4">
            <div className="col-md-6">
              <img
                src={assets.landing3}
                alt="Invoice Customization"
                className="img-fluid rounded shadow-lg hover-shadow"
                onError={(e) => { e.target.onError = null; e.target.src = "" }} />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">
                Time Saving
              </h3>
              <p className="text-muted lead fs-6 mx-2">
                description 3
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
              </ul>
            </div>
          </div>

          {/* feature 4 */}
          <div className="row allign-items-center gy-4 mt-5 flex-row-reverse">
            <div className="col-md-6">
              <img
                src={assets.landing4}
                alt="Invoice Customization"
                className="img-fluid rounded shadow-lg hover-shadow"
                onError={(e) => { e.target.onError = null; e.target.src = "" }} />
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mx-2">
                Send invoices instantly
              </h3>
              <p className="text-muted lead fs-6 mx-2">
                description 4
              </p>
              <ul className="list-unstyled text-muted">
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
                <li className="mb-2"><i className="bi bi-check-circle-fill text-primary me-2"></i></li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      <section id="generate-invoice" className="py-5 text-center bg-primary text-white">
        <div className="container">
          <h2 className="display-5 fw-bold mb-3">Ready to Streamline Your Invoicing?</h2>
          <p className="lead mb-4 mx-auto" style={{ maxWidth: '600px' }}>
            Join thousands of freelancers and small businesses who trust QuickInvoice.
            Start creating professional invoices today - it's fast, easy, and effective!
          </p>
          <button
            className="btn btn-lg btn-warning fw-bold rounded-pill px-5 py-3"
            onClick={() => window.location.href = '/Generate'}
          >
            Start Generating Invoices Now
          </button>
          <p className="mt-3 small">
            (This will lead to the invoice generation interface)
          </p>
        </div>
      </section>
      <footer className="py-5 bg-dark text-white-50">
        <div className="container text-center">
          <h5 className="text-white fw-bold mb-3">QuickInvoice</h5>

          <p className="mb-2">
            &copy; {new Date().getFullYear()} QuickInvoice. All rights reserved.
          </p>

          <p className="mb-3 small">
            Crafted with <i className="bi bi-heart-fill text-danger"></i> for freelancers and small businesses.
          </p>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center gap-3">
            <a href="#" className="text-white-50 fs-5" aria-label="Twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white-50 fs-5" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white-50 fs-5" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>


    </>
  )
}

export default LandingPage;
// here i used boootstrap icons (using npm insatll...) but i can used lucide icons (put  <Twitter> instead to <i className="bi bi-twitter"></i>)