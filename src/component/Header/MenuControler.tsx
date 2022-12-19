import React, { useState } from "react";

export interface MenuProps {
  open: boolean;
  handleClick: any;
  handleClose: any;
  anchorE1: any;
}

export const MenuControler = <T extends {}>(
  Component: React.ComponentType<T & MenuProps>
) => {
  const InnerComponent: React.FC<T> = (props) => {
    const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorE1);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorE1(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorE1(null);
    };

    return (
      <Component
        {...props}
        handleClose={handleClose}
        handleClick={handleClick}
        open={open}
        anchorE1={anchorE1}
      />
    );
  };
  return InnerComponent;
};
