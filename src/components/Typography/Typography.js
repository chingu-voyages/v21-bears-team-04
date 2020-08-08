import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import capitalize from '../../utils/capitalize';

const variantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
};

export const Typography = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    variant = 'body1',
    align = 'inherit',
    display = 'initial',
    color = 'primary',
    className,
    component,
  } = props;

  const Component = component || variantMapping[variant] || 'span';

  return React.createElement(Component, {
    className: clsx(
      {
        [classes[variant]]: variant !== 'inherit',
        [classes[`color${capitalize(color)}`]]: color !== 'initial',
        [classes[`align${capitalize(align)}`]]: align !== 'inherit',
        [classes[`display${capitalize(display)}`]]: display !== 'initial',
      },
      className
    ),
    ref: ref,
    children: props.children,
  });
});

export const styles = (theme) => ({
  h1: theme.typography.h1,
  h2: theme.typography.h2,
  h3: theme.typography.h3,
  h4: theme.typography.h4,
  h5: theme.typography.h5,
  h6: theme.typography.h6,
  body1: theme.typography.body1,
  body2: theme.typography.body2,
  subtitle1: theme.typography.subtitle1,
  subtitle2: theme.typography.subtitle2,
  caption: theme.typography.caption,
  overline: theme.typography.overline,
  alignLeft: {
    textAlign: 'left',
  },
  alignCenter: {
    textAlign: 'center',
  },
  alignRight: {
    textAlign: 'right',
  },
  alignJustify: {
    textAlign: 'justify',
  },
  displayInline: {
    display: 'inline',
  },
  displayBlock: {
    display: 'block',
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.palette.text.primary,
  },
  colorSecondary: {
    color: theme.palette.text.secondary,
  },
});

const useStyles = createUseStyles(styles, { name: 'typography' });

Typography.propTypes = {
  /**
   * Set text align
   */
  align: PropTypes.oneOf(['center', 'inherit', 'justify', 'left', 'right']),
  /**
   * Set content of the component
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Set the color of the text
   */
  color: PropTypes.oneOf(['primary', 'secondary', 'initial', 'inherit']),
  /**
   * The component used for the root node
   * Either string or HTML element or a component
   */
  component: PropTypes.elementType,
  /**
   * Controls the display type
   */

  display: PropTypes.oneOf(['block', 'initial', 'inline']),
  /**
   * Applies the theme typography styles
   */
  variant: PropTypes.oneOf([
    'body1',
    'body2',
    'caption',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'inherit',
    'overline',
    'subtitle1',
    'subtitle2',
  ]),
};
