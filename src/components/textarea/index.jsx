import { forwardRef } from "react";

const TextareaComponent = forwardRef(({ text, ...props }, ref) => {
  return (
    <>
      <label style={{ color: "#a9a9a9" }}>{text}:</label>
      <div className="input-control">
        <textarea ref={ref} {...props} />
      </div>
    </>
  );
});

export default TextareaComponent;
