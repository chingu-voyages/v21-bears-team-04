import React from 'react';
import { cleanup } from '@testing-library/react';
import { styles, Button } from './Button';
import mockClasses from '../../test-utils/mockClasses';
import createRender from '../../test-utils/createRender';

const classes = mockClasses(styles);

const render = createRender();

describe('<Button />', () => {
  afterEach(cleanup);

  it('should render with the root, text , and textPrimary classes but not others', () => {
    const { getByRole } = render(<Button>Hello</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).toHaveClass(classes.text);
    expect(button).toHaveClass(classes.textPrimary);
    expect(button).not.toHaveClass(classes.textSecondary);
    expect(button).not.toHaveClass(classes.contained);
    expect(button).not.toHaveClass(classes.containedPrimary);
    expect(button).not.toHaveClass(classes.containedSecondary);
    expect(button).not.toHaveClass(classes.textSizeSmall);
    expect(button).not.toHaveClass(classes.textSizeLarge);
    expect(button).not.toHaveClass(classes.containedSizeSmall);
    expect(button).not.toHaveClass(classes.containedSizeLarge);
  });

  it('should render a text primary button', () => {
    const { getByRole } = render(<Button color="primary">Hello</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).toHaveClass(classes.textPrimary);
    expect(button).not.toHaveClass(classes.textSecondary);
    expect(button).not.toHaveClass(classes.contained);
  });

  it('should render a text secondary button', () => {
    const { getByRole } = render(<Button color="secondary">Hello</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).not.toHaveClass(classes.textPrimary);
    expect(button).toHaveClass(classes.textSecondary);
    expect(button).not.toHaveClass(classes.contained);
  });

  it('should render a contained button', () => {
    const { getByRole } = render(<Button variant="contained">Hello</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).not.toHaveClass(classes.text);
    expect(button).not.toHaveClass(classes.textPrimary);
    expect(button).not.toHaveClass(classes.textSecondary);
    expect(button).toHaveClass(classes.contained);
  });

  it('should render a primary contained button', () => {
    const { getByRole } = render(
      <Button variant="contained" color="primary">
        Hello
      </Button>
    );
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).not.toHaveClass(classes.text);
    expect(button).toHaveClass(classes.contained);
    expect(button).toHaveClass(classes.containedPrimary);
    expect(button).not.toHaveClass(classes.containedSecondary);
  });

  it('should render a secondary contained button', () => {
    const { getByRole } = render(
      <Button variant="contained" color="secondary">
        Hello
      </Button>
    );
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).not.toHaveClass(classes.text);
    expect(button).toHaveClass(classes.contained);
    expect(button).not.toHaveClass(classes.containedPrimary);
    expect(button).toHaveClass(classes.containedSecondary);
  });

  it('should render a small text button', () => {
    const { getByRole } = render(<Button size="small">Hello</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).toHaveClass(classes.text);
    expect(button).toHaveClass(classes.textSizeSmall);
    expect(button).not.toHaveClass(classes.textSizeLarge);
    expect(button).not.toHaveClass(classes.containedSizeSmall);
    expect(button).not.toHaveClass(classes.containedSizeLarge);
  });

  it('should render a large text button', () => {
    const { getByRole } = render(<Button size="large">Hello</Button>);
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).toHaveClass(classes.text);
    expect(button).not.toHaveClass(classes.textSizeSmall);
    expect(button).toHaveClass(classes.textSizeLarge);
    expect(button).not.toHaveClass(classes.containedSizeSmall);
    expect(button).not.toHaveClass(classes.containedSizeLarge);
  });

  it('should render a small contained button', () => {
    const { getByRole } = render(
      <Button variant="contained" size="small">
        Hello
      </Button>
    );
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).toHaveClass(classes.contained);
    expect(button).not.toHaveClass(classes.textSizeSmall);
    expect(button).not.toHaveClass(classes.textSizeLarge);
    expect(button).toHaveClass(classes.containedSizeSmall);
    expect(button).not.toHaveClass(classes.containedSizeLarge);
  });

  it('should render a large contained button', () => {
    const { getByRole } = render(
      <Button variant="contained" size="large">
        Hello
      </Button>
    );
    const button = getByRole('button');

    expect(button).toHaveClass(classes.root);
    expect(button).toHaveClass(classes.contained);
    expect(button).not.toHaveClass(classes.textSizeSmall);
    expect(button).not.toHaveClass(classes.textSizeLarge);
    expect(button).not.toHaveClass(classes.containedSizeSmall);
    expect(button).toHaveClass(classes.containedSizeLarge);
  });
});
