import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'
import logo from '../../assets/icons/logo.svg'
import Image from '../../atoms/images/index'
import DropDown from '../../atoms/dropdown'

const Footer = () => {
  const backToTop = () => {
    console.log('here')
    //document.documentElement.scrollTo = 0
    window.scrollTo(0, 0)
  }
  return (
    <div className="footer">
      <div className="back-to-top">
        <a onClick={backToTop}>
          <Typography label="Back to top" fontSize="regular" />
        </a>
      </div>
      <div className="footer-content">
        <div className="links-container">
          <div className="section">
            <Typography label="Get To Know Us" fontSize="default" fontWeight="semiBold" tag="p" />
            <ul>
              <li>
                <a href="" className="link">
                  <Typography label="About Us" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Careers" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Press Releases" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Amazon Cares" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Gift a Smile" fontSize="regular" tag="span" />
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            <Typography label="Connect with us" fontSize="default" fontWeight="semiBold" tag="p" />
            <ul>
              <li>
                <a href="" className="link">
                  <Typography label="Facebook" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Twitter" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Instagram" fontSize="regular" tag="span" />
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            <Typography
              label="Make money with us"
              fontSize="default"
              fontWeight="semiBold"
              tag="p"
            />
            <ul>
              <li>
                <a href="" className="link">
                  <Typography label="Sell on Amazon" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Sell under Amazon Accelerator" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Become an Affiliate" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Fulfilment by Amazon" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Advertise Your Products" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Amazon Pay on Merchants" fontSize="regular" tag="span" />
                </a>
              </li>
            </ul>
          </div>
          <div className="section">
            <Typography label="Let us help you" fontSize="default" fontWeight="semiBold" tag="p" />
            <ul>
              <li>
                <a href="" className="link">
                  <Typography label="Sell on Amazon" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Sell under Amazon Accelerator" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Become an Affiliate" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Fulfilment by Amazon" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Advertise Your Products" fontSize="regular" tag="span" />
                </a>
              </li>
              <li>
                <a href="" className="link">
                  <Typography label="Amazon Pay on Merchants" fontSize="regular" tag="span" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-footer-line"></div>
        <div className="footer-logo">
          <Image src={logo} height="30px" width="100px" />
        </div>
      </div>
    </div>
  )
}

export default Footer
