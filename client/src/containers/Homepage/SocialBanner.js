import React from 'react';
import { createUseStyles } from 'react-jss';
import { Typography } from '../../components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {image: '/images/insta1.jpg', description: '@sarah: FitX has motivated me to do yoga outside every day after work! #showyoursweat'},
  {image: '/images/insta2.jpg', description: '@tim: FitX motivates me to run every morning! #showyoursweat'},
  {image: '/images/insta3.jpg', description: '@maggie: I found a new gym and new favorite workout class on FitX #showyoursweat'},
  {image: '/images/insta4.jpg', description: '@tyler: FitX helped me find new friends to help me meet my fitness goals #showyoursweat'},
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
    <div id='SocialBanner' className={classes.root}>
      <Typography variant="h3">Show your sweat</Typography>

      <Slider className={classes.slider} {...settings}>
        {photos.map((photo, index) => (
          <div className={classes.item} key={index}>
            <div className={classes.image}>
              <img className={classes.photo} key={index} src={photo.image} alt="Fitx social media posts" />
              <div id='caption'>{photo.description}</div>
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
      position: 'relative',
    },
    '& img': {
      borderRadius: theme.shapes.radius,
    },
    '& #caption':{
      position: 'absolute',
      bottom: '0%',
      borderBottomLeftRadius: theme.shapes.radius,
      borderBottomRightRadius: theme.shapes.radius,
      textAlign: 'center',
      backgroundColor: 'rgb(0,0,0,.8)',
      color: 'white',
      display: 'none',
      padding: '5px',
      textAlign: 'center',
    },
    '&:hover': {
      '& #caption': {
          display: 'block',
        },
      '&  img':{
        opacity: '.8'
      }
    },
}
});

const useStyles = createUseStyles(styles, { name: 'social' });
