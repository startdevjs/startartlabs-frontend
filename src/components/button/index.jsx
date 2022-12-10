const ButtonComponent = ({ onClick, type, disabled, label, variant }) => {
  return (
    <button className={`btn-${variant}`} onClick={onClick} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default ButtonComponent;
