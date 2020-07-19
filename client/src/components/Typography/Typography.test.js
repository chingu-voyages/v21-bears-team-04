import React from 'react';
import { cleanup } from '@testing-library/react';
import { styles, Typography } from './Typography';
import mockClasses from '../../test-utils/mockClasses';
import createRender from '../../test-utils/createRender';

const classes = mockClasses(styles);

const render = createRender();

describe('<Typography />', () => {
  afterEach(cleanup);

  it('should render the text', () => {
    const { container } = render(<Typography>Hello</Typography>);

    expect(container.firstChild).toHaveTextContent('Hello');
  });

  it('should render body1 by default', () => {
    const { container } = render(<Typography>Hello</Typography>);

    expect(container.firstChild).toHaveClass(classes.body1);
  });

  it('should center text', () => {
    const { container } = render(<Typography align="center">Hello</Typography>);

    expect(container.firstChild).toHaveClass(classes.alignCenter);
  });

  [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'overline',
  ].forEach((variant) => {
    it(`should render ${variant} text`, () => {
      const { container } = render(
        <Typography variant={variant}>Hello</Typography>
      );

      expect(classes[variant] != null).toBe(true);
      expect(container.firstChild).toHaveClass(classes[variant]);
    });
  });

  [
    ['primary', 'colorPrimary'],
    ['secondary', 'colorSecondary'],
    ['inherit', 'colorInherit'],
  ].forEach(([color, className]) => {
    it(`should render ${color} color`, () => {
      const { container } = render(
        <Typography color={color}>Hello</Typography>
      );

      expect(classes[className] != null).toBe(true);
      expect(container.firstChild).toHaveClass(classes[className]);
    });
  });

  describe('headline', () => {
    it('should render p by default', () => {
      const { getByText } = render(<Typography>Hello</Typography>);

      expect(getByText(/hello/i).tagName).toBe('P');
    });

    it(`should render with mapped headline`, () => {
      const { getByText } = render(<Typography variant="h6">Hello</Typography>);

      expect(getByText(/hello/i).tagName).toBe('H6');
    });
  });

  describe('prop: display', () => {
    it('should render with displayInline class in display="inline"', () => {
      const { container } = render(
        <Typography display="inline">Hello</Typography>
      );

      expect(container.firstChild).toHaveClass(classes.displayInline);
      expect(container.firstChild).not.toHaveClass(classes.displayBlock);
    });

    it('should render with displayBlock class in display="block"', () => {
      const { container } = render(
        <Typography display="block">Hello</Typography>
      );

      expect(container.firstChild).not.toHaveClass(classes.displayInline);
      expect(container.firstChild).toHaveClass(classes.displayBlock);
    });

    it('should render with no display classes in display="initial"', () => {
      const { container } = render(
        <Typography display="initial">Hello</Typography>
      );

      expect(container.firstChild).not.toHaveClass(classes.displayInline);
      expect(container.firstChild).not.toHaveClass(classes.displayBlock);
    });
  });
});
