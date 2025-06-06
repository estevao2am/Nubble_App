import React from 'react';
 import {Svg, Path} from 'react-native-svg';
 import { IconBase } from './Incon';
 
 export function SearchIcon({size = 20, color = 'black'}: IconBase) {
   return (
     <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
       <Path
         fillRule="evenodd"
         clipRule="evenodd"
         fill={color}
         d="M8.69193 0C3.89151 0 0 3.89151 0 8.69193C0 13.4923 3.89151 17.3839 8.69193 17.3839C10.788 17.3839 12.7119 16.6411 14.2128 15.4057L18.56 19.7529C18.8894 20.0824 19.4235 20.0824 19.7529 19.7529C20.0823 19.4235 20.0823 18.8895 19.7529 18.5601L15.4057 14.2128C16.6411 12.7119 17.3839 10.788 17.3839 8.69193C17.3839 3.89151 13.4923 0 8.69193 0ZM1.687 8.69193C1.687 4.82321 4.82321 1.687 8.69193 1.687C12.5606 1.687 15.6968 4.82321 15.6968 8.69193C15.6968 10.6232 14.9165 12.3706 13.6518 13.6385L13.6518 13.6386C12.3827 14.911 10.6298 15.6968 8.69193 15.6968C4.82321 15.6968 1.687 12.5606 1.687 8.69193Z"
       />
     </Svg>
   );
 }