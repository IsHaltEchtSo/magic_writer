import {NavigationBar} from '../NavigationBar';

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

/**
 * The Component that renders the Contents of the Authentication Page
 *
 * @return {JSX}
 */
export function AuthenticationPageContent() {
  return (
    <>
      <h1>Authentication</h1>
      <p>This shows either a login or register link or logouts immediately.</p>
    </>
  );
}
