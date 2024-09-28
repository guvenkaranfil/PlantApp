import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 20 20"
    {...props}>
    <G clipPath="url(#search_svg__a)">
      <Path
        fill="#ABABAB"
        d="m17.258 16.075-2.833-2.825a6.6 6.6 0 0 0 1.408-4.083 6.667 6.667 0 1 0-6.666 6.666 6.6 6.6 0 0 0 4.083-1.408l2.825 2.833a.833.833 0 0 0 1.183 0 .833.833 0 0 0 0-1.183M4.167 9.167a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
      />
    </G>
    <Defs>
      <ClipPath id="search_svg__a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgSearch;
