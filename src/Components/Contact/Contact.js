import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';



library.add(fab, faGithub, faFacebook, faLinkedin);

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_3suthib', e.target, 'user_Og3NEBSGR5qJcdoZVtdRv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div>
            <div className="container background-img my-5 py-5">
                <h2 className="text-center"> Contact Me </h2>
                <hr className="line mb-3" style={{width: "200px"}} />
                    
                <div className="container py-5 pl-5 font-weight-normal">
                    <form className="contact-form text-center" onSubmit={sendEmail}>
                        <input type="text" className="form-control" name="name" placeholder="Your Name" />
                        <br/>
                        <input type="email" className="form-control" name="email" placeholder="Your Email" />
                        <br/>
                        <input type="text" className="form-control" name="subject" placeholder="Subject" />
                        <br/>
                        <textarea className="form-control" rows="5" name="message" placeholder="Message"/>
                        <br/>
                        <input className="btn btn-dark btn-lg btn-block" type="submit" value="Send" />
                    </form>  
                </div>
                <div className="text-center">
                <h5 className="text-center"> Can also contact via :  </h5>
                    <a href="mailto: arifulhaque02128@gmail.com" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-outline-danger ml-3 my-2">
                            <FontAwesomeIcon className="mr-2" icon={faEnvelopeSquare} />
                            Gmail
                        </button>
                    </a>
                    <a href="https://github.com/Arifulhaque-02128" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-outline-dark ml-3 my-2">
                            <FontAwesomeIcon className="mr-2" icon={['fab', 'github']} />
                            Github
                        </button>
                    </a>
                    <a href="https://www.facebook.com/ariful.haque29" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-outline-primary ml-3 my-2">
                            <FontAwesomeIcon className="mr-2" icon={['fab', 'facebook']} />
                            Facebook
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/md-ariful-haque-7b57911b9" target="_blank" rel="noopener noreferrer">
                        <button type="button" className="btn btn-outline-info ml-3 my-2">
                            <FontAwesomeIcon className="mr-2" icon={['fab', 'linkedin']} />
                            LinkedIn
                        </button>
                    </a>
                </div>  
            </div>
        </div>
    );
};

export default Contact;