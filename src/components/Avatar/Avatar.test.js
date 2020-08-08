import React from 'react';
import { cleanup } from '@testing-library/react';
import { styles, Avatar } from './Avatar';
import mockClasses from '../../test-utils/mockClasses';
import createRender from '../../test-utils/createRender';

const classes = mockClasses(styles);

const render = createRender();

describe('<Avatar />', () => {
  afterEach(cleanup);

  it('should render with default image', () => {
    const { container } = render(<Avatar />);

    expect(container.firstChild).toHaveStyle(
      'background: url(/images/avatar-default.jpg) no-repeat center/cover'
    );
  });

  it('should render with the small class', () => {
    const { container } = render(<Avatar size="small" />);

    expect(container.firstChild).toHaveClass(classes.small);
    expect(container.firstChild).not.toHaveClass(classes.large);
  });
});
