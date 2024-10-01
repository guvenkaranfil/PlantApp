import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgClose = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="#fff"
      d="M8.201 16.278a.64.64 0 0 1-.005-.883l2.91-2.915-2.91-2.91a.643.643 0 0 1 .005-.884.645.645 0 0 1 .889-.005L12 11.59l2.905-2.91a.64.64 0 0 1 .889.005c.244.244.244.649.005.888l-2.905 2.906 2.905 2.91a.64.64 0 0 1-.005.888.635.635 0 0 1-.889.005L12 13.373l-2.91 2.91a.645.645 0 0 1-.889-.005"
    />
  </Svg>
);
export default SvgClose;
