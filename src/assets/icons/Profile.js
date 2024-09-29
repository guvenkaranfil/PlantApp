import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgProfile = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 25 25"
    {...props}>
    <Path
      fill={props.fill ?? '#BDBDBD'}
      d="M12.952 11.772c2.384 0 4.456-2.002 4.456-4.61a4.456 4.456 0 0 0-4.456-4.483c-2.384 0-4.456 1.95-4.456 4.505 0 2.586 2.06 4.588 4.456 4.588m-7.476 9.657h14.94c1.192 0 1.905-.522 1.905-1.387 0-2.69-3.598-6.403-9.38-6.403-5.771 0-9.37 3.712-9.37 6.403 0 .865.713 1.387 1.905 1.387"
    />
  </Svg>
);
export default SvgProfile;
