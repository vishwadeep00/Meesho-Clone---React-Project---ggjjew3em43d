import React from 'react'
import '../../styles/Footer.css'
import playStoreIcon from '../../images/googleplay_image.png'
import appStoreIcon from '../../images/app-store-image.jpg'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-container-1' style={{width:'30vw'}}>
        <h2 style={{color:'black',fontWeight:'500',marginBottom:'30px',marginLeft:'15px'}}>Shop Non-Stop on Meesho</h2>
        <span style={{fontSize:'18px',marginLeft:'15px',display:'block'}}>Trusted by more than 1 Crore Indians<br/>
              Cash on Delivery | Free Delivery</span>
        <div className='footer-download-icons'>
          <div className="footer-playstore-img">
            <img src={playStoreIcon} alt='play-store' />
          </div>
          <div className="footer-appstore-img">
            <img src={appStoreIcon} alt='app-store' />
          </div>
        </div>
      </div>
      <div className='footer-container-2' style={{marginLeft:'2vw', width:'15vw'}}>
        <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px'}}>Careers</span>
        <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px'}}>Become a supplier</span>
        <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px'}}>Hall of Fame</span>
      </div>
      <div className='footer-container-3' style={{marginLeft:'2vw',width:'15vw'}}>
        <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px'}}>Legal and Policies</span>
        <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px'}}>Meesho Tech Blog</span>
        <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px'}}>Notices and Returns</span>
      </div>
      <div className='footer-container-4' style={{marginLeft:'2vw',width:'15vw'}}>
      <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px',color:'black'}}>Reach out to us</span>
      <div className='footer-social-media-icons'>
        <i className="fa-brands fa-facebook fa-2x footer-social"></i>
        <i className="fa-brands fa-instagram fa-2x footer-social"></i>
        <i className="fa-brands fa-youtube fa-2x footer-social"></i>
        <i className="fa-brands fa-linkedin fa-2x footer-social"></i>
        <i className="fa-brands fa-twitter fa-2x footer-social"></i>
      </div>
      </div>
      <div className='footer-container-5' style={{marginLeft:'2vw',width:'15vw'}}>
      <span style={{fontWeight:'500',fontSize:'18px',cursor:'pointer',display:'block',marginBottom:'15px',color:'black'}}>Contact us</span>
      <div className='footer-contact-address'>
        Fashnear Technologies Private Limited,<br/>
        CIN: U74900KA2015PTC082263
        06-105-B, 06-102, (138 Wu) Vaishnavi Signature, No. 78/9, Outer Ring Road, Bellandur, Varthur Hobli, Bengaluru-560103, Karnataka, India<br/>
        E-mail address: query@meesho.com
        © 2015-2022 Meesho.com
      </div>
      </div>
    </div>
  )
}
