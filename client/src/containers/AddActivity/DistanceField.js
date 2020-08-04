import React from "react";
import { TextField } from "../../components";

const DistanceField = ({ field }) => {
  return (
    <TextField
      type="number"
      name="distance"
      min={0}
      step={0.01}
      onChange={field.onChange}
      value={field.value}
    />
  );
};

export default DistanceField;
