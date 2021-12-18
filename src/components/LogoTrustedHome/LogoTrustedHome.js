import React from "react";
import "./LogoTrustedHome.css"
export default function LogoTrustedHome() {
  return (
    <section className="logo_trusted container_all">
      <div className="logo_trusted_content">
        <span>Trusted by:</span>
        <ul>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                alt=""
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                alt=""
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
  );
}
