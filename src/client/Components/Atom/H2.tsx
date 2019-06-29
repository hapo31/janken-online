import React from "react";
import AlignCenter from "./AlignCenter";

type Props = {
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default (props: Props) => (
  <AlignCenter
    style={{
      fontSize: "16px",
      ...props.style
    }}
  >
    {props.children}
  </AlignCenter>
);
