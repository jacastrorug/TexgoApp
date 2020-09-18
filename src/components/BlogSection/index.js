import React from "react";
import { Link } from "gatsby";
import blog1 from "../../images/blog/1.jpg";
import blog2 from "../../images/blog/2.jpg";
import blog3 from "../../images/blog/3.jpg";

import "./style.css";

const BlogSection2 = () => {
  return (
    <div className="wpo-blog-area">
      <div className="container">
        <div className="col-l2">
          <div className="wpo-section-title wpo-section-title-3 text-center">
            <span>Stay With Our Blog</span>
            <h2>Our Latest News</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12 blog-p">
            <div className="wpo-blog-item">
              <div className="wpo-blog-img">
                <img src={blog1} alt="" />
              </div>
              <div className="wpo-blog-content-sub">
                <ul>
                  <li>
                    <Link to="/blog">Business</Link>
                  </li>
                  <li>October 13, 2018</li>
                </ul>
              </div>
              <div className="wpo-blog-content">
                <h3>
                  <Link to="">We can ensure you about the safe delevery</Link>
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 blog-p">
            <div className="wpo-blog-item">
              <div className="wpo-blog-content">
                <h3>
                  <Link to="/blog">
                    We can ensure you about the safe delevery
                  </Link>
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
              <div className="wpo-blog-content-sub-2">
                <ul>
                  <li>
                    <Link to="/blog">Business</Link>
                  </li>
                  <li>October 13, 2018</li>
                </ul>
              </div>
              <div className="wpo-blog-img">
                <img src={blog2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 blog-p">
            <div className="wpo-blog-item">
              <div className="wpo-blog-img">
                <img src={blog3} alt="" />
              </div>
              <div className="wpo-blog-content-sub wpo-blog-content-sub">
                <ul>
                  <li>
                    <Link to="/blog">Business</Link>
                  </li>
                  <li>October 13, 2018</li>
                </ul>
              </div>
              <div className="wpo-blog-content">
                <h3>
                  <Link to="/blog">
                    We can ensure you about the safe delevery
                  </Link>
                </h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection2;
