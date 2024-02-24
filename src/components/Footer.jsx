import React from 'react'

const Footer = () => {
  return (
    <div>
  <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
  <div className="row px-xl-5 pt-5">
    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
      <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
      <p className="mb-4">
      Have questions, suggestions, or just want to say hello? We'd love to hear from you! Feel free to reach out using the contact form below, and we'll get back to you as soon as possible.
      </p>
      <p className="mb-2">
        <i className="fa fa-map-marker-alt text-primary mr-3" />
        sector 62, Noida,Utter Pradesh, India
      </p>
      <p className="mb-2">
        <i className="fa fa-envelope text-primary mr-3" />
         ErAmitKumar453@Gmail.com
      </p>
      <p className="mb-0">
        <i className="fa fa-phone-alt text-primary mr-3" />
        +91 9675294618
      </p>
    </div>
    <div className="col-lg-8 col-md-12">
      <div className="row">
        <div className="col-md-4 mb-5">
          <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Home
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Our Shop
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Shop Detail
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Shopping Cart
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Checkout
            </a>
            <a className="text-secondary" href="#">
              <i className="fa fa-angle-right mr-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Home
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Our Shop
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Shop Detail
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Shopping Cart
            </a>
            <a className="text-secondary mb-2" href="#">
              <i className="fa fa-angle-right mr-2" />
              Checkout
            </a>
            <a className="text-secondary" href="#">
              <i className="fa fa-angle-right mr-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
          <p>We hope this newsletter finds you in good spirits and high energy! As always, we are delighted to bring you the latest updates, exciting news, and exclusive offers from [Your Website Name]. 🚀</p>
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email Address"
              />
              <div className="input-group-append">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </form>
          <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
          <div className="d-flex">
            <a className="btn btn-primary btn-square mr-2" href="#">
              <i className="fab fa-twitter" />
            </a>
            <a className="btn btn-primary btn-square mr-2" href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="btn btn-primary btn-square mr-2" href="https://www.linkedin.com/in/amit-kumar-355bb41aa/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="btn btn-primary btn-square" href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="row border-top mx-xl-5 py-4"
    style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
  >
    <div className="col-md-6 px-xl-0">
      <p className="mb-md-0 text-center text-md-left text-secondary">
        ©{" "}
        <a className="text-primary" href="#">
          Domain
        </a>
        . All Rights Reserved. Designed by
        <a className="text-primary" href="#">
          CodeCounter Technical
        </a>
      </p>
    </div>
    <div className="col-md-6 px-xl-0 text-center text-md-right">
      <img className="img-fluid" src="img/payments.png" alt="" />
    </div>
  </div>
</div>


    </div>
  )
}

export default Footer;