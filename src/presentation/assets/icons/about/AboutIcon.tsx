import React from 'react';
import {Path, Svg} from 'react-native-svg';

export function AboutIcon() {
  return (
    <Svg width="18" height="19" viewBox="0 0 512 512">
      <Path
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        stroke="#222"
      />
    </Svg>
  );
}
