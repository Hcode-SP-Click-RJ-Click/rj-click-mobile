import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './IconProps';

export function TrashIcon(props: IconProps) {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M6.525 21c-.417 0-.77-.146-1.063-.438a1.447 1.447 0 01-.437-1.062V5.25H4v-1.5h4.7V3h6.6v.75H20v1.5h-1.025V19.5c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45H6.525zm10.95-15.75H6.525V19.5h10.95V5.25zm-8.3 12.1h1.5V7.375h-1.5v9.975zm4.15 0h1.5V7.375h-1.5v9.975zm-6.8-12.1V19.5 5.25z"
        fill={props.color ?? '#000'}
      />
    </Svg>
  );
}
