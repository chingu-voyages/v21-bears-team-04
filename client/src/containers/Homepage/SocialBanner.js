import React from 'react';
import { createUseStyles } from 'react-jss';
import { Typography } from '../../components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  '/images/insta1.jpg',
  '/images/insta2.jpg',
  '/images/insta3.jpg',
  '/images/insta4.jpg',
];

export const SocialBanner = () => {
  const classes = useStyles();

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3">Show your sweat</Typography>

      <Slider className={classes.slider} {...settings}>
        {photos.map((photo, index) => (
          <div className={classes.item} key={index}>
            <div>
              <img key={index} src={photo} alt="Fitx social media posts" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const styles = (theme) => ({
  root: {
    margin: theme.spacing(10, 0),
  },
  slider: {
    margin: theme.spacing(3, 0),
  },
  item: {
    outline: 'none',
    '& > div': {
      marginRight: theme.spacing(2),
    },

    '& img': {
      borderRadius: theme.shapes.radius,
    },
  },
});

const useStyles = createUseStyles(styles, { name: 'social' });
