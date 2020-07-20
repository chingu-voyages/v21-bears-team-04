import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import capitalize from '../../utils/capitalize';

export const Button = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const {
    children,
    className,
    color = 'primary',
    component,
    disabled = false,
    fullWidth = false,
    size = 'medium',
    variant = 'text',
    onClick,
    type = 'button',
    ...other
  } = props;

  const Component = component || 'button';

  const buttonProps = {};
  if (Component === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (Component !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }
    buttonProps['aria-disabled'] = disabled;
  }

  return React.createElement(Component, {
    className: clsx(
      classes.root,
      classes[variant],
      {
        [classes[`${variant}${capitalize(color)}`]]: color !== 'inherit',
        [classes[`${variant}Size${capitalize(size)}`]]: size !== 'medium',
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,
        [classes.colorInherit]: color === 'inherit',
      },
      className
    ),
    ref: ref,
    children,
    onClick,
    disabled,
    ...buttonProps,
    ...other,
  });
});

export const styles = (theme) => ({
  root: {
    margin: 0,
    padding: '6px 16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    borderRadius: theme.shapes.buttonRadius,
    cursor: 'pointer',
    ...theme.typography.button,
  },
  text: {
    padding: '6px 8px',
  },
  textPrimary: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  textSecondary: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.secondary.dark,
    },
  },
  contained: {
    '&:hover': {
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
    },
  },
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,

    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },
  textSizeSmall: {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13),
  },
  textSizeLarge: {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15),
  },
  containedSizeSmall: {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13),
  },
  containedSizeLarge: {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15),
  },
  disabled: {},
  fullWidth: {
    width: '100%',
  },
  colorInherit: {
    color: 'inherit',
  },
});

const useStyles = createUseStyles(styles, { name: 'button' });

Button.propTypes = {
  /**
   * The content of the button
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * the color of the component. It supports those theme colors
   */
  color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
  /**
   * The component used for the root node
   */
  component: PropTypes.elementType,
  /**
   * If true, button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * if true, the button will take full width of the parent
   */
  fullWidth: PropTypes.node,
  /**
   * The size of the button
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * The variant to use
   */
  variant: PropTypes.oneOf(['contained', 'text']),
  /**
   * Handle onClick event
   */
  onClick: PropTypes.func,
};
