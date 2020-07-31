import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import DateTimePickerField from "./DateTimePickerField";
import CategorySelect from "./CategorySelect";
import InputLabel from "@material-ui/core/InputLabel";

export const _AddActivity = ({ categories }) => {
  const handleSubmit = (values) => {
    console.log("values", values);
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
          <InputLabel id="activity-category">Activity</InputLabel>
          <Field
            name="category"
            component={(props) => (
              <CategorySelect categories={categories} {...props} />
            )}
          />
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
