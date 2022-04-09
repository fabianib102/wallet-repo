import React, { FunctionComponent } from "react";
import { Button } from "react-bootstrap";

export interface IButtonCustom { }


const ButtonCustom: FunctionComponent<IButtonCustom> = () => {
  return <Button>Es el boton custom</Button>;
};

export default ButtonCustom;
