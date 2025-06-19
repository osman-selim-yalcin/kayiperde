'use client';
import React, { PropsWithChildren } from 'react';
import { ReactLenis } from 'lenis/react';

function Lenis({ children }) {
  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;
