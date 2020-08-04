import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const ActivitySelect = ({ field, form, categories }) => {
  const renderCategoryChoices = (categories) => {
    return categories.map((category) => (
      <MenuItem key={Math.random()} name={category.id} value={category.id}>
        {category.name}
      </MenuItem>
    ));
  };

  return (
    <Select
      labelId="activity-category"
      required
      name={field.name}
      value={field.value}
      onChange={(category) => {
        console.log("category", category);
        form.setFieldValue(field.name, category.target.value, false);
      }}
    >
      {renderCategoryChoices(categories)}
    </Select>
  );
};

export default ActivitySelect;
