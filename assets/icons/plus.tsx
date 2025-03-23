import Svg, { Path } from "react-native-svg";

export const PlusIcon = ({ color }: { color?: string }) => {
  return (
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
      <Path d="M12 5l0 14" />
      <Path d="M5 12l14 0" />
    </Svg>
  );
};
