import React from "react";

type Props = {
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export default (props: Props) => (
  <div
    style={{
      textAlign: "center",
      ...props.style
    }}
  >
    {props.children}
  </div>
);
