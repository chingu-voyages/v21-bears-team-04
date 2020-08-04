import React from "react";
import { TextField } from "../../components";

const StepsField = ({ field }) => {
  return (
    <TextField
      type="number"
      name="steps"
      min={0}
      onChange={field.onChange}
      value={field.value}
    />
  );
};

export default StepsField;
