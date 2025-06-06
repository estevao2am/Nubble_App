import React from 'react';
 import {Svg, Path} from 'react-native-svg';
 import { IconBase } from './Incon';
 
 export function MessageIcon({size = 20, color = 'black'}: IconBase) {
   return (
     <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
       <Path
         fillRule="evenodd"
         clipRule="evenodd"
         fill={color}
         d="M18 6.50212L11.173 10.7367C11.1303 10.7632 11.0855 10.7877 11.0389 10.81C11.0243 10.8201 11.0091 10.83 10.9935 10.8397C10.4862 11.1543 9.63384 11.1404 9.09922 10.8088L2 6.40536V14C2 15.1 2.9 16 4 16H16C17.1 16 18 15.1 18 14V6.50212ZM10.078 9.12782L2.97269 4.72057C2.86506 4.65381 2.74455 4.59993 2.61657 4.55901C2.9765 4.21325 3.46456 4 4 4H16C16.5555 4 17.06 4.22951 17.4233 4.59839C17.3429 4.63082 17.2665 4.66894 17.1959 4.71273L10.078 9.12782ZM16 2H4C1.7875 2 0 3.7875 0 6V14C0 16.2125 1.7875 18 4 18H16C18.2125 18 20 16.2125 20 14V6C20 3.7875 18.2125 2 16 2Z"
       />
     </Svg>
   );
 }