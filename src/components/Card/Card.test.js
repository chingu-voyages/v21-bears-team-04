import React from 'react';
import { cleanup } from '@testing-library/react';
import { styles, Card } from './Card';
import mockClasses from '../../test-utils/mockClasses';
import createRender from '../../test-utils/createRender';

const classes = mockClasses(styles);

const render = createRender();

describe('<Card />', () => {
  afterEach(cleanup);

  describe('prop: square', () => {
    it('should disable the rounded classes', () => {
      const { container } = render(<Card square>Hello</Card>);

      expect(container.firstChild).not.toHaveClass(classes.rounded);
    });

    it('should render rounded classes when omitted', () => {
      const { container } = render(<Card>Hello</Card>);

      expect(container.firstChild).toHaveClass(classes.rounded);
    });
  });

  it('should render appropriate elevation classes', () => {
    const { container } = render(<Card elevation={5}>Hello</Card>);

    expect(container.firstChild).toHaveClass(classes.elevation5);
  });
});
