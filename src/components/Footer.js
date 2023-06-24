import React from "react";
import { Footer } from "react-materialize";

export const FooterFilm = () => {
  return (
    <div className="footer-container">
      <Footer
        className="footer-edit"
        copyrights="&copy 2015 Copyright Text"
        links={
          <ul>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Quy định
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Điều khoản chung
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Chính sách riêng tư
              </a>
            </li>
            <li>
              <a className="grey-text text-lighten-3" href="#!">
                Giới thiệu
              </a>
            </li>
          </ul>
        }
        moreLinks={
          <a className="grey-text text-lighten-4 right" href="#!">
            Facebook
          </a>
        }
      >
        <h5 className="white-text">Xem phim online</h5>
        <p className="grey-text text-lighten-4">
          miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng
          tiếng. Mọt phim có nhiều thể loại phim phong phú, đặc sắc, nhiều bộ
          phim hay nhất - mới nhất.
        </p>
      </Footer>
    </div>
  );
};
