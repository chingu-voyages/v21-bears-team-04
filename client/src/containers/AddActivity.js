import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export const _AddActivity = ({categories}) => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {category: categories[0].id},
    onSubmit: (values) => {},
  });

  const renderCategoryChoices = (categories) => {
    return categories.map(category => <MenuItem value={category.id}>{category.name}</MenuItem>)
  }

  return (
    <div>
      <h1>Add Activity</h1>
      <form onSubmit={handleSubmit}>
        <InputLabel id="activity-category">Activity</InputLabel>
        <Select
         labelId="activity-category"
          id="activity-category-select"
          value={values.category}
          onChange={handleChange}
        >
           
          {renderCategoryChoices(categories)}
        </Select>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.activityCategories };
};

export const AddActivity = connect(mapStateToProps, {})(_AddActivity);
