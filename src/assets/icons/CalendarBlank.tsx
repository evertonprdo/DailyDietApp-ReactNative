import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const CalendarBlank = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    fill="#000000"
    viewBox="0 0 256 256"
    {...props}
  >
    <Path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
  </Svg>
);
export default CalendarBlank;
