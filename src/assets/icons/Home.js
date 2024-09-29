import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgHome = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 25 25"
    {...props}>
    <Path
      fill={props.fill ?? '#28AF6E'}
      d="M6.501 3.042h12.008c-.067-.813-.56-1.256-1.47-1.256H7.962c-.901 0-1.404.443-1.46 1.256m-1.935 2.67h15.878c-.133-.878-.588-1.377-1.594-1.377H6.16c-1.006 0-1.461.5-1.594 1.377m1.12 16.61h13.629c1.973 0 3.007-.998 3.007-2.901v-9.303c0-1.903-1.034-2.9-3.007-2.9H5.685c-1.982 0-3.006.988-3.006 2.9v9.303c0 1.903 1.024 2.9 3.006 2.9"
    />
  </Svg>
);
export default SvgHome;
