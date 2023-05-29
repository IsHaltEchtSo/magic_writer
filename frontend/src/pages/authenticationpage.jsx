import {AuthenticationPageContent} from '../components/authenticationPageContent';
import {NavigationBar} from '../components/navigationbar';

import React from 'react';

/**
 * The Component that renders the Authentication Page
 *
 * @return {JSX}
 */
export function AuthenticationPage() {
  return (
    <>
      <NavigationBar />
      <AuthenticationPageContent />
    </>
  );
}
