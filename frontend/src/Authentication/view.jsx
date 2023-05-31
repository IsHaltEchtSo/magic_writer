import {AuthenticationPageContent} from './components';

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
