import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/privacy-policy.css'

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-page">
      {/* Breadcrumb */}
      <nav className="pp-breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <span>Privacy Policy</span>
      </nav>

      {/* Title */}
      <h1 className="pp-title">Privacy Policy</h1>

      {/* Content */}
      <div className="pp-content">
        <p>
          Thygesen Textile Vietnam Co., Ltd (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://thygesenapparel.com, including any other media form, media channel, or mobile website related or connected thereto (collectively, the “Site”).
        </p>
        <p>
          If you do not agree with the terms of this Privacy Policy, please do not access the site.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <h3>a. Personal Information</h3>
        <p>Information that identifies you as an individual, such as:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Company name</li>
          <li>Any other information you provide through our forms or communications.</li>
        </ul>
        <h3>b. Non-Personal Information</h3>
        <p>
          Automatically collected data such as:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Website usage statistics (pages visited, time spent on the site).</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries or requests submitted through our website.</li>
          <li>To improve our website and customer service.</li>
          <li>To send marketing and promotional communications.</li>
          <li>To comply with legal obligations.</li>
        </ul>

        <h2>3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar technologies to enhance your browsing experience. These may include:
        </p>
        <ul>
          <li>Essential cookies for website functionality.</li>
          <li>Analytical cookies for tracking user behavior.</li>
        </ul>
        <p>You can adjust your cookie preferences in your browser settings.</p>

        <h2>4. Sharing Your Information</h2>
        <p>
          We do not sell, rent, or trade your personal information. We may share your personal information with third parties to assist us in managing and improving our services as outlined in this policy—for instance, we use Google Analytics to better understand how users interact with our site. You can learn more by visiting Google’s Privacy Policy.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, or disclosure.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the following rights:</p>
        <ul>
          <li>To access, correct, or delete your personal data.</li>
          <li>To object to processing for marketing purposes.</li>
          <li>To withdraw consent for data collection at any time.</li>
        </ul>
        <p>To exercise these rights, contact us at <a href="mailto:privacy@indongepic.vn">privacy@indongepic.vn</a>.</p>

        <h2>7. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
        </p>

        <h2>8. Updates to this Privacy Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy as necessary to comply with applicable laws or changes in our operations. Updates will be posted on this page with the effective date.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@indongepic.vn">privacy@indongepic.vn</a></li>
          <li>Address: 9th Floor, Vinafor Building, 127 Lo Duc Street, Hai Ba Trung District, Hanoi, Vietnam</li>
        </ul>
      </div>

    </div>
  )
}



