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
                  <a href="#" rel="nofollow noreferrer">წესები</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">კონფიდენციალურობა</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">კონტაქტი</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">ხშირად დასმული კითხვები</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>ნავიგაცია</h4>
              <ul>
                <li>
                  <a href="#" rel="nofollow noreferrer">შესვლა</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">რეგისტრაცია</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">თამაშები</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">ძიება</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">კომპონენტი</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>ლოგარითმი</h4>
              <ul>
                <li>
                  <a href="#" rel="nofollow noreferrer">ალბერტ აინშტაინი</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">ნიკა შამილაძე</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">მარკ ცუკერბერგი</a>
                </li>
                <li>
                  <a href="#" rel="nofollow noreferrer">ილონ მასკი</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>სოციალური ქსელები</h4>
              <div className="social-links">
                <a href="#" rel="nofollow noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" rel="nofollow noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" rel="nofollow noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" rel="nofollow noreferrer">
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
