import React from 'react';
import { JssProvider, ThemeProvider } from 'react-jss';
import { render as testRender } from '@testing-library/react';
import { theme } from '../theme';

const generateId = (rule) => `${rule.key}`;

export default () => {
  return (element) => {
    const Wrapper = ({ children }) => (
      <JssProvider generateId={generateId}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </JssProvider>
    );

    const result = testRender(element, {
      wrapper: Wrapper,
    });

    return result;
  };
};
