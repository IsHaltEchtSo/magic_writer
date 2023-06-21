import {PrivacyPolicyPageContent} from './components';

import {NavigationBar} from '../NavigationBar';

import React from 'react';


/**
 * The Component that renders the Privacy Policy Page
 *
 * @return {JSX}
 */
export function PrivacyPolicyPage() {
  return (
    <>
      <NavigationBar />
      <PrivacyPolicyPageContent />
    </>
  );
}
