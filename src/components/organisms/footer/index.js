import React from 'react'
import './styles.scss'
import Typography from '../../atoms/typography'

const Footer = () => {
  return (
    <div className="footer">
      <div className="back-to-top">
        <Typography label="Back to top" fontSize="regular" />
      </div>
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
          <Typography label="Make money with us" fontSize="default" fontWeight="semiBold" tag="p" />
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
          <Typography label="Let us help you" fontSize="default" fontWeight="semiBold" tag="p" />
        </div>
      </div>
    </div>
  )
}

export default Footer
