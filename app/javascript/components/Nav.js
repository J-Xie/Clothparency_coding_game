import React, { useCallback } from "react";
import Button from "./Button";

const Nav = ({ navItems }) => {
  const onClick = useCallback(path => {
    window.location.href = path;
  }, []);

  return (
    <div className="nav">
      {navItems.map(item => (
        <Button
          key={item.name}
          className="extra_button"
          onClick={() => onClick(item.path)}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default Nav;
