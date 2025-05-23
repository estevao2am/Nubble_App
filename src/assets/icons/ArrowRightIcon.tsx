import React from 'react';
 import {Svg, Path} from 'react-native-svg';
 import {IconBase} from '../icons/Incon';
 
 export function ArrowRightIcon({size = 20, color = 'black'}: IconBase) {
   return (
     <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
       <Path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M10.2995 3.39731C10.812 2.86756 11.643 2.86756 12.1555 3.39731L17.6156 9.0408C18.1281 9.57055 18.1281 10.4294 17.6156 10.9592L12.1555 16.6027C11.643 17.1324 10.812 17.1324 10.2995 16.6027C9.78695 16.0729 9.78695 15.214 10.2995 14.6843L13.5191 11.3565L3.31242 11.3565C2.58759 11.3565 2 10.7492 2 10C2 9.25082 2.58759 8.64349 3.31242 8.64349L13.5191 8.64349L10.2995 5.3157C9.78695 4.78595 9.78695 3.92706 10.2995 3.39731Z"
         fill={color}
       />
     </Svg>
   );
 }