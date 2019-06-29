import React, { useRef, useCallback } from "react";

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
      <div>Enter Your Name.</div>
      <div>
        <input ref={textRef} type="text" defaultValue={props.defaultName} />
        <button onClick={onClickButton}>Submit</button>
      </div>
    </div>
  );
};
