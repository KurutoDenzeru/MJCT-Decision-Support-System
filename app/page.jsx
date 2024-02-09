'use client';

import React from 'react';
import './globals.css';

import Hero from '../components/Hero';
import Content from '../components/Content';

export default function Index() {
  return (
    <>
      <Hero />
      <hr />
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <Content />
    </>
  );
}
