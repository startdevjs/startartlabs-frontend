const Toggle = ({ value, onChange }) => {
  return (
    <div
      class="form-ext-control"
      style={{
        marginLeft: "-22px",
      }}
    >
      <label class="form-ext-toggle__label">
        <div class="form-ext-toggle form-ext-toggle--success">
          <input
            name="toggleCheckbox-success"
            type="checkbox"
            class="form-ext-input"
            defaultChecked={value}
            value={value}
            onChange={onChange}
          />
          <div class="form-ext-toggle__toggler">
            <i></i>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
