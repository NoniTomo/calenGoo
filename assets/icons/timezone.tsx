import Svg, { Path } from "react-native-svg";

export const TimezoneIcon = ({ color }: { color?: string }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <Path d="M20.884 10.554a9 9 0 1 0 -10.337 10.328" />
    <Path d="M3.6 9h16.8" />
    <Path d="M3.6 15h6.9" />
    <Path d="M11.5 3a17 17 0 0 0 -1.502 14.954" />
    <Path d="M12.5 3a17 17 0 0 1 2.52 7.603" />
    <Path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
    <Path d="M18 16.5v1.5l.5 .5" />
  </Svg>
);
