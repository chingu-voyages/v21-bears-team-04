import React from 'react';

import { cleanup } from '@testing-library/react';
import { shallow } from 'enzyme';

import { styles, Typography } from './Typography';
import mockClasses from '../../test/mockClasses';

const classes = mockClasses(styles);

describe('<Typography />', () => {
  afterEach(cleanup);

  it('should render the text', () => {
    const wrapper = shallow(<Typography classes={classes}>Hello</Typography>);

    expect(wrapper.childAt(0).text()).toBe('Hello');
  });

  it('should render body1 by default', () => {
    const wrapper = shallow(<Typography classes={classes}>Hello</Typography>);

    expect(wrapper.hasClass(classes.body1)).toBe(true);
  });

  it('should center text', () => {
    const wrapper = shallow(
      <Typography align="center" classes={classes}>
        Hello
      </Typography>
    );

    expect(wrapper.hasClass(classes.alignCenter)).toBe(true);
  });

  [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'overline',
  ].forEach((variant) => {
    it(`should render ${variant} text`, () => {
      const wrapper = shallow(
        <Typography variant={variant} classes={classes}>
          Hello
        </Typography>
      );

      expect(classes[variant] != null).toBe(true);
      expect(wrapper.hasClass(classes[variant])).toBe(true);
    });
  });

  [
    ['primary', 'colorPrimary'],
    ['secondary', 'colorSecondary'],
    ['inherit', 'colorInherit'],
  ].forEach(([color, className]) => {
    it(`should render ${color} color`, () => {
      const wrapper = shallow(
        <Typography color={color} classes={classes}>
          Hello
        </Typography>
      );

      expect(classes[className] != null).toBe(true);
      expect(wrapper.hasClass(classes[className])).toBe(true);
    });
  });

  describe('headline', () => {
    it('should render p by default', () => {
      const wrapper = shallow(<Typography classes={classes}>Hello</Typography>);

      expect(wrapper.type()).toBe('p');
    });

    it(`should render with mapped headline`, () => {
      const wrapper = shallow(
        <Typography variant="h6" classes={classes}>
          Hello
        </Typography>
      );

      expect(wrapper.type()).toBe('h6');
    });
  });

  describe('prop: display', () => {
    it('should render with displayInline class in display="inline"', () => {
      const wrapper = shallow(
        <Typography display="inline" classes={classes}>
          Hello
        </Typography>
      );

      expect(wrapper.hasClass(classes.displayInline)).toBe(true);
      expect(wrapper.hasClass(classes.displayBlock)).toBe(false);
    });

    it('should render with displayBlock class in display="block"', () => {
      const wrapper = shallow(
        <Typography display="block" classes={classes}>
          Hello
        </Typography>
      );

      expect(wrapper.hasClass(classes.displayInline)).toBe(false);
      expect(wrapper.hasClass(classes.displayBlock)).toBe(true);
    });

    it('should render with no display classes in display="initial"', () => {
      const wrapper = shallow(
        <Typography display="initial" classes={classes}>
          Hello
        </Typography>
      );

      expect(wrapper.hasClass(classes.displayInline)).toBe(false);
      expect(wrapper.hasClass(classes.displayBlock)).toBe(false);
    });
  });
});
