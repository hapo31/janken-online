import React, { useRef, useCallback } from "react";
import H2 from "./Atom/H2";
import AlignCenter from "./Atom/AlignCenter";

type Props = {
  defaultName: string;
  onEnterName: (name: string) => void;
};

export default (props: Props) => {
  const textRef = useRef<HTMLInputElement | null>(null);

  const onClickButton = useCallback(() => {
    if (textRef && textRef.current) {
      props.onEnterName(textRef.current.value);
    }
  }, [textRef]);

  return (
    <div
      style={{
        width: "500px"
      }}
    >
      <H2>Enter Your Name.</H2>
      <AlignCenter>
        <div>
          <input ref={textRef} type="text" defaultValue={props.defaultName} />
        </div>
        <div>
          <button onClick={onClickButton}>Submit</button>
        </div>
      </AlignCenter>
    </div>
  );
};
