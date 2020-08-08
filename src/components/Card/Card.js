import React from 'react';
import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Card = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const {
    className,
    component: Component = 'div',
    elevation = 1,
    square = false,
    ...other
  } = props;

  return (
    <Component
      className={clsx(
        classes.root,
        classes[`elevation${elevation}`],
        {
          [classes.rounded]: !square,
        },
        className
      )}
      ref={ref}
      {...other}
    />
  );
});

export const styles = (theme) => {
  const elevation = {};
  theme.shadows.forEach((shadows, index) => {
    elevation[`elevation${index}`] = {
      boxShadow: shadows,
    };
  });

  return {
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      overflow: 'hidden',
    },
    rounded: {
      borderRadius: theme.shapes.radius,
    },
    ...elevation,
  };
};

const useStyles = createUseStyles(styles, { name: 'card' });

Card.propTypes = {
  /**
   * The content of the component
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node
   * Either a string for HTML element or a component
   */
  component: PropTypes.elementType,
  /**
   * Shadow depth
   * Accept values between 0 and 10
   */
  elevation: PropTypes.number,
  /**
   * If true, the component will be rounded
   */
  square: PropTypes.bool,
};
