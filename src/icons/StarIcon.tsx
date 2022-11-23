import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export function StarIcon(props: SvgProps) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M8 11.513L12.12 14l-1.093-4.687 3.64-3.153-4.794-.407L8 1.333l-1.873 4.42-4.794.407 3.64 3.153L3.88 14 8 11.513z"
        fill="#E88F09"
      />
    </Svg>
  );
}
