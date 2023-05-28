import {
  AuthenticationPageContent,
} from './components/authenticationpagecontent';
import {NavigationBar} from './components/navbar';

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
