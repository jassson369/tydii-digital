import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Privacy.css';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Tydii Digital</title>
        <meta
          name="description"
          content="Privacy Policy for Tydii Digital and Tydii Text. How we collect, use, and protect your data."
        />
      </Helmet>
      <div className="privacy-page">
        <div className="privacy-container">
          <h1 className="privacy-header">Privacy Policy</h1>
          <p className="privacy-updated">Last updated: February 2025</p>

          <section className="privacy-section">
            <h2>1. Introduction</h2>
            <p>
              Tydii Digital (“we,” “our,” or “us”) operates Tydii Text, a business messaging platform that helps businesses manage customer conversations on Facebook Messenger, Instagram, and WhatsApp. This Privacy Policy explains how we collect, use, disclose, and protect information when you or your business uses our services, and applies to both business users and end users who interact with businesses through our platform.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Information We Collect</h2>
            <p>We collect information necessary to provide and improve our services:</p>
            <ul>
              <li><strong>Business account information:</strong> Business name, email address, and contact details when you sign up or connect your account.</li>
              <li><strong>Meta (Facebook/Instagram/WhatsApp) account and Page data:</strong> When you connect your Meta pages via OAuth, we receive access to the pages and accounts you authorize, including page names, IDs, and messaging permissions.</li>
              <li><strong>Messages and conversations:</strong> Customer messages sent to your connected pages and your business’s replies, which we store and process to power AI-generated replies and support.</li>
              <li><strong>Product catalog and business content:</strong> Product or service information you provide so that our AI can generate relevant replies.</li>
              <li><strong>Usage and analytics data:</strong> How you use the platform (e.g., features used, response times) to improve our services and troubleshoot issues.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li><strong>Provide and operate Tydii Text:</strong> Connect your Meta pages, store and display messages, and deliver AI-generated replies based on your product catalogs and settings.</li>
              <li><strong>Improve and personalize the service:</strong> Use analytics and usage data to improve features, reliability, and user experience.</li>
              <li><strong>Support and communication:</strong> Respond to your requests, send important notices about the service, and provide customer support.</li>
              <li><strong>Security and compliance:</strong> Protect against abuse, enforce our terms, and comply with applicable laws.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>4. Third-Party Services and Data Sharing</h2>
            <p>We work with trusted third parties to run our platform:</p>
            <ul>
              <li><strong>Meta (Facebook, Instagram, WhatsApp):</strong> We use Meta’s APIs and OAuth to connect your pages and send and receive messages. Your use of our platform is also subject to Meta’s terms and data policies.</li>
              <li><strong>OpenAI:</strong> We use OpenAI’s services to generate automated replies. Message content and relevant context may be sent to OpenAI to produce responses. OpenAI’s use of data is governed by their privacy policy and our agreement with them.</li>
              <li><strong>Infrastructure and tools:</strong> We use third-party providers for hosting, databases, and analytics. These providers process data on our behalf under strict agreements.</li>
            </ul>
            <p>We do not sell your personal information. We share data only as described in this policy or with your consent.</p>
          </section>

          <section className="privacy-section">
            <h2>5. Data Storage and Security</h2>
            <p>
              We store your data on secure servers and use industry-standard measures to protect it, including encryption in transit and at rest, access controls, and regular security practices. We retain messages and account data for as long as your account is active or as needed to provide the service and comply with legal obligations. You may request deletion of your data as described in your rights below.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal and operational requirements.</li>
              <li><strong>Opt-out and portability:</strong> Object to certain processing or request your data in a portable format where applicable.</li>
            </ul>
            <p>
              To exercise these rights, or if you are an end user messaging a business that uses Tydii Text and have questions about how that business handles your data, please contact us using the details below. We will respond in accordance with applicable law.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Contact Us</h2>
            <p>
              For privacy-related questions, requests, or complaints, contact Tydii Digital:
            </p>
            <ul className="privacy-contact">
              <li>Email: <a href="mailto:privacy@tydiidigital.com">privacy@tydiidigital.com</a></li>
              <li>Website: <a href="https://tydiidigital.com">https://tydiidigital.com</a></li>
            </ul>
            <p>
              We will respond to your request within a reasonable time as required by applicable law.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Privacy;
