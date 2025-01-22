import React, { ReactNode } from 'react';

function ContentWrapper({ children }: { children: ReactNode }) {
  return <div className="h-100 mt-16 w-full">{children}</div>;
}

export default ContentWrapper;
