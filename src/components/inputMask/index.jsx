import React, { forwardRef } from "react";
import InputMask from "react-input-mask";

const InputMaskCellPhone = forwardRef(({ text, ...props }, ref) => {
  return (
    <>
      <label style={{ color: "#a9a9a9" }}>{text}:</label>
      <div className="input-control">
        <InputMask mask="(99) 99999-9999" {...props} />
      </div>
    </>
  );
});

const InputMaskCEP = forwardRef(({ text, ...props }, ref) => {
  return (
    <>
      <label style={{ color: "#a9a9a9" }}>{text}:</label>
      <div className="input-control">
        <InputMask mask="99.999-999" {...props} />
      </div>
    </>
  );
});

const InputMaskCPF = forwardRef(({ text, ...props }, ref) => {
  return (
    <>
      <label style={{ color: "#a9a9a9" }}>{text}:</label>
      <div className="input-control">
        <InputMask mask="999.999.999-99" {...props} />
      </div>
    </>
  );
});

export { InputMaskCellPhone, InputMaskCEP, InputMaskCPF };
