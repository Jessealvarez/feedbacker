import PropTypes from "prop-types";

function Header({ info, bgColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{info}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedbacker",
  bgColor: "rgba(0,0,0,0.5)",
};

export default Header;
