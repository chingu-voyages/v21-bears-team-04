import React from "react";
import { TextField } from "../../components";

const TitleTextField = ({ field }) => {
  return (
    <TextField
      type="text"
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      required
    />
  );
};

export default TitleTextField;
