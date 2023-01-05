import { forwardRef } from "react";

const InputComponent = forwardRef(({ text, ...props }, ref) => {
  return (
    <>
      <label style={{ color: "#a9a9a9" }}>{text}:</label>
      <div className="input-control">
        <input ref={ref} {...props} />
      </div>
    </>
  );
});

export default InputComponent;
