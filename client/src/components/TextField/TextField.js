import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

export const TextField = React.forwardRef((props, ref) => {
  const classes = useStyles();

  const { className, ...others } = props;

  return (
    <input ref={ref} className={clsx(classes.root, className)} {...others} />
  );
});

export const styles = (theme) => ({
  root: {
    width: '100%',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1.5),
    borderRadius: theme.shapes.radius,
    border: '1px solid #ccc',

    '&:focus': {
      borderColor: theme.palette.secondary.main,
      outline: 'none',
    },
  },
});

const useStyles = createUseStyles(styles, { name: 'text-field' });
