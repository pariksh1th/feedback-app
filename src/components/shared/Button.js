function Button({ children, type, disabled, version }) {
  return (
    <button type={type} disabled={disabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  disabled: false,
};

export default Button;
