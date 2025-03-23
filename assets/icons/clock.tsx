import Svg, { Path } from "react-native-svg";

export const ClockIcon = ({ color }: { color?: string }) => (
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
    <Path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
    <Path d="M12 7v5l3 3" />
  </Svg>
);
