import { Redirect, Slot } from 'expo-router';
import React from 'react';

export default function _Layout() {
  const isAuthenticated = false;

  if(!isAuthenticated) return <Redirect href="/(auth)/sign-in" />

  return <Slot/>
}