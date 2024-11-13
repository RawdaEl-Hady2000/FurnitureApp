import Form from 'react-bootstrap/Form';
import contactImg from '../Images/contactUs.jpg';
// import contactImg from '../Images/contact_us.jpg';

function ContactUs() {
  return (
    <>
<div className='container contactUs-style'>
  <h2 className='m-80'>Contact with Rokna Furniture Staff</h2>
  <div className='row'>
    
      <div className='col-8'>

          <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Customer Service
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body"> For all questions related to our furniture & organization offers to our customers before or after  they buy or use products , <a href="mailto: customerservice@roknafurniture.com">Contact us </a>  </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Supplier Inquiries
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Information for suppliers who want to collaborate with Rokna Furniture, including guidelines for submitting product catalogs, proposals, or partnership requests , <a href='mailto: suppliers@roknafurniture.com'>Contact us</a> </div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Technology Support
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">To report accessibility-related issues or share suggestions , <a href='mailto: techsupport@roknafurniture.com'> Contact us</a></div>
                </div>
              </div>


              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-headingFour" aria-expanded="false" aria-controls="flush-headingFour">
                    For complaints
                  </button>
                </h2>
                <div id="flush-headingFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">At Rokna Furniture, we value your feedback and are committed to resolving any issues you may encounter. If you have a complaint regarding our products or services, please reach out to our customer service team. We are here to assist you and ensure that your concerns are addressed promptly and effectively. You can submit your complaint through the contact form on our website, via email, or by calling our customer support line. We aim to resolve all complaints as quickly as possible to maintain your satisfaction and trust in our brand , <a href='mailto:complaints@roknafurniture.com'>Contact us</a>
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    For complaints
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    At Rokna Furniture, we value your feedback and are committed to resolving any issues you may encounter. If you have a complaint regarding our products or services, please reach out to our customer service team. We are here to assist you and ensure that your concerns are addressed promptly and effectively. You can submit your complaint through the contact form on our website, via email, or by calling our customer support line. We aim to resolve all complaints as quickly as possible to maintain your satisfaction and trust in our brand , <a href='mailto:complaints@roknafurniture.com'>Contact us</a>
                  </div>
                </div>
              </div>


              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Corporate Address
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    <p>123 Furniture Lane <br></br>
                      Design City, State 45678<br></br>
                      Country: Exampleland</p>
                  </div>
                </div>
              </div>

          </div>
      </div>

      <div className='col-4 col-sm-none d-none d-md-none d-sm-none d-lg-block'>
        <img src={contactImg} width='500' height='380' className='border border-3 rounded ' />
      </div>

  </div>
</div>


      {/* <div className='container contactUs-style'>
     <h1 className='m-60'>Contact with Rokna Furniture Staff</h1>
        <div className='row'>
            <div className='col-8'>
              <h4> Customer Service </h4>
                <p> For all questions related to our furniture & organization offers to our customers before or after  they buy or use products , <a href= "mailto: customerservice@roknafurniture.com">Contact us </a>  </p>
              <h4>Supplier Inquiries </h4>
                <p> Information for suppliers who want to collaborate with Rokna Furniture, including guidelines for submitting product catalogs, proposals, or partnership requests , <a href='mailto: suppliers@roknafurniture.com'>Contact us</a> </p>
              <h4>Technology Support </h4>
              <p> To report accessibility-related issues or share suggestions , <a href='mailto: techsupport@roknafurniture.com'> Contact us</a></p>
              <h4>For complaints</h4>
              <p>At Rokna Furniture, we value your feedback and are committed to resolving any issues you may encounter. If you have a complaint regarding our products or services, please reach out to our customer service team. We are here to assist you and ensure that your concerns are addressed promptly and effectively. You can submit your complaint through the contact form on our website, via email, or by calling our customer support line. We aim to resolve all complaints as quickly as possible to maintain your satisfaction and trust in our brand , <a href='mailto:complaints@roknafurniture.com'>Contact us</a></p>
              <h4> Corporate Address </h4>
              <p>123 Furniture Lane <br></br>
                Design City, State 45678<br></br>
                Country: Exampleland</p>
            </div>

            <div className='col-4 col-sm-none d-none d-md-none d-sm-none d-lg-block'>
              <img  src={contactImg} width='500' height='380' className='border border-3 rounded '/>
            </div>
        </div>
     </div> */}

    </>

  )
}
export default ContactUs;