import React, { FC, ReactNode } from 'react';

export const Output: FC<{ children: ReactNode }> = ({ children }) => {
  return <p>{children}</p>;
};

export default Output;
