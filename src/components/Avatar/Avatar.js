import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

export const Avatar = (props) => {
  const {
    src = '/images/avatar-default.jpg',
    onClick,
    size,
    className,
  } = props;
  const classes = useStyles({ src });

  return (
    <div
      className={clsx(
        classes.root,
        { [classes[size]]: size !== 'medium' },
        className
      )}
      onClick={onClick}
    ></div>
  );
};

export const styles = (theme) => ({
  root: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    background: ({ src }) => `url(${src}) no-repeat center/cover`,
    cursor: 'pointer',
  },
  small: {
    width: '30px',
    height: '30px',
  },
  large: {
    width: '50px',
    height: '50px',
  },
});

const useStyles = createUseStyles(styles, { name: 'avatar' });

Avatar.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The size of the avatar
   */
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  /**
   * Handle onClick event
   */
  onClick: PropTypes.func,
  /**
   * Image src ow it will be default image
   */
  src: PropTypes.string,
};
