import PropoTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

Button.propTypes = {
  children: PropoTypes.node.isRequired,
  version: PropoTypes.string,
  type: PropoTypes.string,
  isDisabled: PropoTypes.bool,
};

export default Button;
