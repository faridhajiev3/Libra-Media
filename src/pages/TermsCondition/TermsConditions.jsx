// eslint-disable-next-line no-unused-vars
import React from "react";
import "../../scss/termsconditions.scss";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const TermsCondition = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="page-bg">
      <div className="terms-container">
        <div className="order-detail-header">
          <div className="back-icon-box" onClick={handleBackClick}>
            <FaArrowLeft className="back-icon" />
          </div>
          <h2 className="terms_title">Terms and Conditions</h2>
        </div>
        <div className="terms-content">
          <div className="terms-date">Effective Date: 10 December, 2024</div>
          <div className="terms-text">
            <b>Introduction and Overview</b>
            <br />
            <b>
              This Privacy Policy (&quot;Policy&quot;) explains how Fashion
              Choice Pte. Ltd., which does business as &quot;Vendo&quot;,
              collects, uses, shares and processes your personal information
              when you access this website, located at{" "}
              <a
                href="https://www.shein.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.shein.com
              </a>
              , our mobile application (&quot;App&quot;), or use any of our
              services, including any written or electronic, and oral
              communications, online and offline, purchases performed and any
              other related services we provide (collectively, the
              &quot;Services&quot;). The Policy also describes your rights
              regarding your personal information and explains how you can
              contact us to learn more about our data practices or to exercise
              your rights.
            </b>
            <br />
            <b>
              The Services include any services provided via this website,
              located at{" "}
              <a
                href="https://www.shein.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                SHEIN.com
              </a>{" "}
              (the &quot;Site&quot;), our mobile applications (the
              &quot;Apps&quot;), our accounts and fan pages on social media
              platforms (the &quot;Social Media Accounts&quot;), and any other
              websites, pages, features, or content owned and operated by the
              Company that hyperlink to this Policy.
            </b>
            <br />
            <b>
              The Site and the App are provided by Fashion Choice Pte. Ltd.,
              which is the controller of your personal information, and
              responsible for processing and protecting your personal
              information. In this Policy, the terms &quot;SHEIN&quot;,
              &quot;Company&quot;, &quot;we&quot;, &quot;us&quot; or
              &quot;our&quot; refer to Fashion Choice Pte. Ltd.
            </b>
            <br />
            <b>
              Please read our Terms and Conditions and this Policy before
              accessing or using our Services. If you cannot agree with this
              Policy or the Terms and Conditions, please do not access or use
              our Services.
            </b>
            <br />
            <b>
              Right to modify this Policy: We may change this Policy from time
              to time, to reflect how we intend to process your data or to
              update it due to changes in privacy laws or regulations, and if we
              make changes, we will revise the effective date or last modified
              date at the top of this Policy. If we make significant changes
              that materially affect your privacy rights, we will attempt to
              provide advanced notice or otherwise on the Site or App, or by
              some other means of contact such as email, so that you have a
              reasonable opportunity to review the changes before you continue
              to use the Services. If you do not agree with the modified Policy,
              please stop using the Site, or the Services.
            </b>
            <br />
            <b>
              Instant information: In addition, we may provide you with real
              time disclosures or additional information about the personal
              information handling practices of specific parts of our Services.
              Such notices may supplement this Policy or provide you with
              additional choices about how we process your personal information.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;