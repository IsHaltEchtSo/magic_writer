/* eslint-disable max-len */
import './css/styles.css';
import React from 'react';


/**
 * The Component that renders the Content of the Privacy Policy Page
 *
 * @return {JSX}
 */
export function PrivacyPolicyPageContent() {
  return (
    <>
      <p className='policy-header'>MagicWriter</p>
      <p className='policy-header'>Impressum / Contact</p>
      <p className='policy-header'>Anbieter der Website gemäß § 5 TMG:</p>
      <br />
      <p className='policy-header'>Deniz Grollmusz</p>
      <p className='policy-header'>Bosestraße 47</p>
      <p className='policy-header'>12103 Berlin</p>
      <p className='policy-header'>Email: deniz.grollmusz@code.berlin</p>
      <br />
      <br />
      <p className='policy-topic'>Datenschutz</p>
      <p className='policy-description'>Diese Seite macht nicht von Cookies oder ähnlichen Technologien Gebrauch um persönliche Daten zu sammeln oder zu verarbeiten. Soweit dem Author bekannt enthält die Seite keine Funktionalitäten, die ohne ausdrückliches Einverständnis persönliche Daten nutzen. Ein einmal gegebenes Einverständnis zum Teilen persönlicher Daten kann jeder Zeit widerrufen werden.</p>
      <p className='policy-topic'>Technische Gründe</p>
      <p className='policy-description'>Aus technischen Gründen werden einige persönliche Daten, wie die IP Adresse von Besuchern, vom jeweiligen Browser zu Servern im Internet übermittelt. Durch das Benutzen der Seite werden diese Daten an den Dienstleister Vercel übermittelt, und fallen unter die <a className='policy-link' href="https://vercel.com/legal/privacy-policy">hier</a> genannte Privacy Policy.</p>
      <p className='policy-topic'>Web Vitals</p>
      <p className='policy-description'>Es gibt als Web Vitals bezeichnete Metriken, die von dieser Seite durch den Dienstleister erhoben werden. Vercel hat ein spezifisches Statement zum Datenschutz bei diesem Feature verfasst, das Sie <a className='policy-link' href="https://vercel.com/docs/concepts/analytics/privacy-policy">hier</a> nachlesen können. Das Sammeln dieser Metriken verläuft ohne persönliche Daten, und bezieht sich nur auf Informationen wie ob Besucher die Seite mit einem Mobil-, einem Tablet- oder einem Desktopgerät besuchen, was für eine Art Browser benutzt wurde oder etwa der Ort des Benutzers.</p>
      <p className='policy-topic'>Privacy Policy</p>
      <p className='policy-description'>This site does not use cookies or similar technologies to gather or process personal data. To the knowledge of the author there is no functionality on this site that uses personal data or without consent. Consent to share personal data can be revoked at any time.</p>
      <p className='policy-topic'>Technical reasons</p>
      <p className='policy-description'>Due to technical reasons some personal data such as the IP address of a visitor is transmitted by the Browser to servers on the internet. When using this site such data will be transmitted to the service provider of this site, which is named Vercel whose dedicated Privacy Policy is available <a className='policy-link' href="https://vercel.com/legal/privacy-policy">here</a>.</p>
      <p className='policy-topic'>Web Vitals</p>
      <p className='policy-description'>There are metrics known as Web Vitals, which are collected by this site in cooperation with the service provider. Vercel has a dedicated statement on the privacy of this feature <a className='policy-link' href="https://vercel.com/docs/concepts/analytics/privacy-policy">here</a>. These metrics are gathered without personal data and only contain information such as whether a mobile, tablet or desktop device was used, how fast or slow the network was for a participant or what type of Browser was used.</p>
    </>
  );
}
