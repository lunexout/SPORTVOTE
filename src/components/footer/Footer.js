import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="footer-col">
              <h4>ჩვენ შესახებ</h4>
              <ul>
                <li>
                  <a href="#">წესები</a>
                </li>
                <li>
                  <a href="#">კონფიდენციალურობა</a>
                </li>
                <li>
                  <a href="#">კონტაქტი</a>
                </li>
                <li>
                  <a href="#">ხშირად დასმული კითხვები</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>ნავიგაცია</h4>
              <ul>
                <li>
                  <a href="#">შესვლა</a>
                </li>
                <li>
                  <a href="#">რეგისტრაცია</a>
                </li>
                <li>
                  <a href="#">თამაშები</a>
                </li>
                <li>
                  <a href="#">ძიება</a>
                </li>
                <li>
                  <a href="#">კომპონენტი</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>ლოგარითმი</h4>
              <ul>
                <li>
                  <a href="#">ალბერტ აინშტაინი</a>
                </li>
                <li>
                  <a href="#">ნიკა შამილაძე</a>
                </li>
                <li>
                  <a href="#">მარკ ცუკერბერგი</a>
                </li>
                <li>
                  <a href="#">ილონ მასკი</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>სოციალური ქსელები</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
