import React from "react";
import Paper from "@mui/material/Paper";
import Head from "next/head";

const Privacy = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#009688" />
        <title>Audio Profiles - Privacy Policy</title>
      </Head>
      <div className="privacyContent">
        <Paper className="privacy">
          <h3>Audio Profiles Privacy Policy</h3>
          <p className="top">Effective: 22nd of October 2022</p>
          <h4>
            <span className="section">I</span>GENERAL PROVISIONS
          </h4>
          <p>
            <span className="section">1.1</span>This Privacy Policy governs the
            collection, usage and storage of information obtained from the Users
            (hereinafter: <b>Information</b>) through the usage of the Audio
            Profiles Android application (hereinafter: <b>App</b>) and App’s
            Services. We do not sell or otherwise make available personal
            information to third-parties. We use Information exclusively for our
            internal and marketing purposes. In some instances, we are obliged
            to comply with court orders and government requests and provide
            Information or parts of it to authorized bodies. The Information on
            Users is divided into identifiable and non-identifiable Information
            depending on whether Information can identify the User as a specific
            person. The Privacy Policy applies to all Users, regardless of the
            version of the App they are using.
          </p>
          <h4>
            <span className="section">II</span>CHANGES TO THE PRIVACY POLICY
          </h4>
          <p>
            <span className="section">2.1</span>We reserve the right to change
            our Privacy Policy at any time without prior notification. The
            current version of Privacy Policy is available from the App
            indicating the effective date. If the changes to the Privacy Policy
            are significant in nature, we will notify you by e-mail, if such
            Information is available, prior to the changes becoming effective.
            You are encouraged to periodically check our Privacy Policy.
          </p>
          <h4>
            <span className="section">III</span>CONSENT
          </h4>
          <p>
            <span className="section">3.1</span>By downloading and using the App
            you agree to be bound by the terms of our Privacy Policy, applicable
            laws, and internet policies. The App’s services are intended for a
            general audience and are not targeted at children. We take
            children’s online safety very seriously, and if we ever learn that
            the Information collected belongs to a child, we will immediately
            remove any such Information unless such Information is provided with
            the verifiable parental consent and is otherwise in compliance with
            relevant laws.
          </p>
          <h4>
            <span className="section">IV</span>IDENTIFIABLE INFORMATION
          </h4>
          <p>
            <span className="section">4.1</span>We sometimes require access to
            personal information in order to provide our Services. The
            information we access is necessary to provide our Services, and we
            do not access or collect any information which is not strictly
            required by the nature of the Service. Personal Information which we
            may access includes device ID & call information, contacts, and
            storage.
          </p>
          <p>
            <i className="sub-section">Device ID & call information</i>
          </p>
          <p>
            Since one of the main features of the App is creating different
            audio profiles for different contacts, the App can intercept
            incoming calls and identify the callers in order to perform the
            Service. This data is necessary for proper functioning of the app.
            This data is retained on User’s device and we do not collect such
            data or make it available to any third party.
          </p>
          <p>
            <i className="sub-section">Contacts</i>
          </p>
          <p>
            The App is also able to read and write the User’s phonebook data.
            This data is only used depending on the User’s configuration of the
            App such as when User sets a custom ringtone for a certain contact
            or rejects a phone call from a certain contact. This data is
            retained on User’s device and we do not collect such data or make it
            available to any third party.
          </p>
          <p>
            <span className="section">4.2</span>We may keep records of any
            questions, complaints or compliments made by you and the response if
            any. Whenever you contact us, we will collect your name, e-mail
            address and any additional information which you provide and store
            it on secure servers in order to provide you with the best service
            possible and to improve our Services.
          </p>
          <p>
            <span className="section">4.3</span>If you provide us your e-mail
            address you agree to receive periodical emails from us. We may
            contact you using the available contact information provided by you,
            for any matters relating to the Service. We may also inform you
            through e-mail about news, promotions, special offers,
            advertisements, and or other topics of interest related to the Audio
            Profiles and our affiliates (<b>Promotional e-mails</b>). You may
            choose to stop receiving these Promotional e-mails at any time by
            following the instructions contained in promotional e-mails.
          </p>
          <p>
            <span className="section">4.4</span>We endeavor to maintain
            appropriate physical, procedural and technical security with respect
            to our offices and information storage facilities so as to prevent
            any loss, misuse, unauthorized access, disclosure, or modification
            of personal information which also applies to our disposal or
            destruction of personal information. We keep the personal
            Information we collect about you strictly confidential. Only
            authorized personnel have access to this personal Information.
          </p>
          <h4>
            <span className="section">V</span>NON-IDENTIFIABLE INFORMATION
          </h4>
          <p>
            <span className="section">5.1</span>By using the App we
            automatically collect some non-identifiable Information regarding
            your mobile device and your activities using{" "}
            <a
              href="https://amplitude.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Amplitude
            </a>
            . We may collect other Information in order to improve the User’s
            experience and provide better service. This Information is not
            personally identifiable. Users are able to choose not to provide
            such information by uninstalling the App.
          </p>
          <p>
            <span className="section">5.2</span>We use your information to
            provide and improve our services, customize services for you, better
            understand our Users, diagnose and fix problems, etc.
          </p>
          <h4>
            <span className="section">VI</span>THIRD PARTIES WEBSITES
          </h4>
          <p>
            <span className="section">6.1</span>The App may contain links to
            other external websites that do not fall under our domain. We are
            not responsible for the privacy practices or the content of such
            external websites. If you choose to follow such links to external
            websites, you do so at your risk.
          </p>
          <h4>
            <span className="section">VII</span>CONTACT INFORMATION
          </h4>
          <p>
            <span className="section">7.1</span>If you have any questions
            regarding our Privacy Policy and how the information is handled, or
            you wish to access, amend, or update your information feel free to
            contact us at{" "}
            <a href="mailto:fnp.developer@gmail.com">fnp.developer@gmail.com</a>
            .
          </p>
        </Paper>
      </div>
    </>
  );
};

export default Privacy;
