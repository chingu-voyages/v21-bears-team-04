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
      id="activity-category-select"
      name={field.name}
      value={field.value}
      onChange={(category) => form.setFieldValue(field.name, category, false)}
    >
      {renderCategoryChoices(categories)}
    </Select>
  );
};

export default ActivitySelect;
