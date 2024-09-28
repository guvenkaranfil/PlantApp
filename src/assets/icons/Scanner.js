import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const SvgScanner = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="-"
    height="-"
    fill="none"
    viewBox="0 0 18 18"
    {...props}>
    <G fill="#fff" clipPath="url(#scanner_svg__a)">
      <Path d="M4.5 16.453H2.25a.704.704 0 0 1-.703-.703V13.5a.422.422 0 0 0-.844 0v2.25a1.55 1.55 0 0 0 1.547 1.547H4.5a.422.422 0 0 0 0-.844M16.875 13.078a.42.42 0 0 0-.422.422v2.25a.704.704 0 0 1-.703.703H13.5a.422.422 0 0 0 0 .844h2.25a1.55 1.55 0 0 0 1.547-1.547V13.5a.42.42 0 0 0-.422-.422M1.125 4.922a.42.42 0 0 0 .422-.422V2.25a.703.703 0 0 1 .703-.703H4.5a.422.422 0 0 0 0-.844H2.25A1.55 1.55 0 0 0 .703 2.25V4.5a.42.42 0 0 0 .422.422M15.75.703H13.5a.422.422 0 1 0 0 .844h2.25a.703.703 0 0 1 .703.703V4.5a.422.422 0 0 0 .844 0V2.25A1.55 1.55 0 0 0 15.75.703M4.078 5.625v2.11h9.844v-2.11a1.55 1.55 0 0 0-1.547-1.547h-6.75a1.55 1.55 0 0 0-1.547 1.547" />
      <Path
        fillOpacity={0.7}
        d="M13.922 12.375V9.422h1.828a.422.422 0 1 0 0-.844H2.25a.422.422 0 0 0 0 .844h1.828v2.953a1.55 1.55 0 0 0 1.547 1.547h6.75a1.55 1.55 0 0 0 1.547-1.547"
      />
    </G>
    <Defs>
      <ClipPath id="scanner_svg__a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgScanner;
