import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa6';
import { SiVisa, SiPaypal, SiApple, SiGoogleplay } from 'react-icons/si';

export default function Footer(props) {
  const FooterMenu1 =props.FooterMenu1;
    const FooterMenu2 =props.FooterMenu2;


  return (
    <footer className="footer">
      <div className=" container footer-container ">
        
        <div className='footer-info'>
          <h3 >Subscribe To Our Newsletter</h3>
          <div className="footer-info-input-holder ">
            <input
              type="email"
              placeholder="Enter email address"
              className="footer-info-input"
            />
            <button className="footer-info-submit">
              Subscribe
            </button>
          </div>
              <div>
             <Image
           src="/header/logo.png"                     width={2000}
                               height={2000}
                               alt="loading..."
                               className=" footer-info-logo"
                             />
          <p className="footer-info-description" dangerouslySetInnerHTML={{__html:props.footerText}}></p>
        </div>
        </div>

    

     
        <div>
          <h3 className="footer-menu">Menu</h3>
          <ul className="footer-menu-list">
           {FooterMenu1?.map((i ,index)=>(
            <Link href={i.url} key={index}>
                {i.title}
            </Link>
           ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-menu">Menu Two</h3>
          <ul className="footer-menu-list">
             {FooterMenu2?.map((i,index)=>(
            <Link href={i.url} key={index}>
                {i.title}
            </Link>
           ))}
          </ul>
        </div>
           <div className="footer-links ">
        
        <div className='footer-links-apps '>
          <h3 className="footer-links-apps-text">Download The App And Go To Travel The World!</h3>
          <div className="footer-links-apps-holder">
            <button className="footer-links-apps-btn">
              <SiApple size={20} />
              <span className="footer-links-apps-btn-text">Apple Store</span>
            </button>
            <button className="footer-links-apps-btn">
              <SiGoogleplay size={20} />
              <span className="footer-links-apps-btn-text">Google Play</span>
            </button>
          </div>
        </div>

        <div className="footer-links-credits">
          <h3 className="footer-links-credits-text">Secure Paymentns</h3>
          <div className="footer-links-credits-icons">
            <SiPaypal  size={32}/>
            <SiVisa  size={32}/>
            <FaCreditCard size={32}/>
          </div>
        </div>

        <div className="footer-links-social ">
            <div className='footer-links-social-holder'>
          <FaFacebookF className='footer-social-icon' />

            </div>
                        <div className='footer-links-social-holder'>

          <FaLinkedinIn className='footer-social-icon' />
                      </div>
                        <div className='footer-links-social-holder'>

          <FaInstagram  className='footer-social-icon'/>
                                </div>
                        <div className='footer-links-social-holder'>

          <FaTwitter className='footer-social-icon' />
                                          </div>

        </div>
      </div>
      </div>


     
    </footer>
  );
}
