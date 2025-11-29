import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">

        <div className="footer-col">
          <h4 className="footer-title">WorldAtlas</h4>
          <p className="footer-text">Explore every country on Earth.</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Find us</h4>
          <p className="footer-icon">
            <MdPlace /> Pune, Maharashtra
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Call us</h4>
          <p className="footer-icon">
            <IoCallSharp /> 9876543211
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-title">Mail us</h4>
          <p className="footer-icon">
            <TbMailPlus /> contact@kodifyer.com
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
