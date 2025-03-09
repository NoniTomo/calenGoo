import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export const NotificationRepeatPlus = () => {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <Defs>
        <ClipPath id="clip0_1_2791">
          <Rect width="30" height="30" fill="white" />
        </ClipPath>
        <ClipPath id="clip1_1_2791">
          <Rect
            width="15"
            height="15"
            fill="white"
            transform="translate(16 16)"
          />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_1_2791)">
        <Path
          d="M15.625 21.25H5C5.68117 20.8643 6.26226 20.324 6.69648 19.6727C7.13071 19.0213 7.40593 18.2771 7.5 17.5V13.75C7.57445 12.1638 8.07913 10.6278 8.95994 9.30662C9.84075 7.98541 11.0645 6.92878 12.5 6.25C12.5 5.58696 12.7634 4.95107 13.2322 4.48223C13.7011 4.01339 14.337 3.75 15 3.75C15.663 3.75 16.2989 4.01339 16.7678 4.48223C17.2366 4.95107 17.5 5.58696 17.5 6.25C18.9355 6.92878 20.1593 7.98541 21.0401 9.30662C21.9209 10.6278 22.4255 12.1638 22.5 13.75V15"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M11.25 21.25V22.5C11.2499 23.0465 11.3692 23.5864 11.5996 24.0819C11.83 24.5775 12.166 25.0167 12.5839 25.3688C13.0019 25.7209 13.4917 25.9774 14.0192 26.1203C14.5466 26.2632 15.099 26.2892 15.6375 26.1963"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <G clipPath="url(#clip1_1_2791)">
          <Path
            d="M28.4582 24.1505C28.3401 25.0505 27.9794 25.9014 27.4145 26.6119C26.8497 27.3224 26.1021 27.8658 25.2519 28.1837C24.4017 28.5016 23.481 28.5821 22.5886 28.4165C21.6961 28.251 20.8656 27.8456 20.186 27.2439C19.5064 26.6421 19.0035 25.8668 18.7311 25.001C18.4587 24.1351 18.4271 23.2115 18.6398 22.329C18.8524 21.4466 19.3012 20.6387 19.9381 19.992C20.575 19.3453 21.376 18.8842 22.255 18.658C24.6919 18.033 27.2144 19.2874 28.1457 21.6249"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M28.5 18.5V21.625H25.375"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>
        <Path
          d="M11 13.75H18.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.75 10V17.5"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
