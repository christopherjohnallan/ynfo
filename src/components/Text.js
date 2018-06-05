import * as React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import StyleGuide from './theme/StyleGuide';

class TextComp extends React.PureComponent {
  static defaultProps = {
    type: 'body',
    theme: '',
    style: {},
    color: StyleGuide.palette.black,
    align: 'left',
    primary: false,
    children: '',
    numberOfLines: 0,
    adjustsFontSizeToFit: false,
  };

  render() {
    const {
      theme,
      type,
      style,
      children,
      primary,
      numberOfLines,
      adjustsFontSizeToFit,
      align: textAlign,
    } = this.props;
    const typography = StyleGuide.typography[type];
    const color = (() => {
      if (primary) {
        return theme.palette.primary;
      } else if (typeof typography.color === 'string' && !this.props.color) {
        return typography.color;
      }
      return this.props.color;
    })();
    const computedStyle = [typography, { textAlign, color }];
    computedStyle.push(style);
    return (
      <Text style={computedStyle} {...{ numberOfLines, adjustsFontSizeToFit }}>
        {children}
      </Text>
    );
  }
}

TextComp.propTypes = {
  // StyleSheet.create returns an int id for optimizations
  // but we should still accept traditional style objects
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  ]),

  type: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  primary: PropTypes.bool,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
  numberOfLines: PropTypes.number,
  adjustsFontSizeToFit: PropTypes.bool,
};

export default TextComp;
