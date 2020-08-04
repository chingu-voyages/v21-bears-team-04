import React from "react";
import { TextField } from "../../components";

const CaloriesField = ({ field }) => {
  return (
    <TextField
      type="number"
      name="calories"
      min={0}
      onChange={field.onChange}
      value={field.value}
    />
  );
};

export default CaloriesField;
