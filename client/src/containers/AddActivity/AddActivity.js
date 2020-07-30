import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DateTimePickerField from "./DateTimePickerField";

export const _AddActivity = ({ categories }) => {
    
  const onChange = (e) => {
    const {value} = e.target.value
    
  }

  const handleSubmit = (values) => {
    console.log("values", values);
  };

  const renderCategoryChoices = (categories) => {
    return categories.map((category) => (
      <MenuItem name={category.id} value={category.id}>
        {category.name}
      </MenuItem>
    ));
  };


  return (
    <div>
      <h1>Add Activity</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          category: categories[0].id,
          start: new Date(),
          end: new Date(),
        }}
      >
        <Form>
          {/* <InputLabel id="activity-category">Activity</InputLabel>
          <Select
            labelId="activity-category"
            id="activity-category-select"
            name="category"
          >
            {renderCategoryChoices(categories)}
          </Select> */}

          <InputLabel id="activity-start">Start</InputLabel>
          <Field name="start" component={DateTimePickerField} />
          <InputLabel id="activity-end">Ending</InputLabel>
          <Field name="end" component={DateTimePickerField} />
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.activityCategories };
};

export const AddActivity = connect(mapStateToProps, {})(_AddActivity);
