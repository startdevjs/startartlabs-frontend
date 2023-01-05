import { forwardRef } from "react";

const SelectComponent = forwardRef(({ text, ...props }, ref) => {
  return (
    <>
      <label style={{ color: "#a9a9a9" }}>{text}:</label>

      <div className="input-control ">
        <select className="select" ref={ref} {...props}>
          {props.children}
        </select>
      </div>
    </>
  );
});

export default SelectComponent;
