import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import DateTimePickerField from "./DateTimePickerField";
import CategorySelect from "./CategorySelect";
import InputLabel from "@material-ui/core/InputLabel";
import { Typography, Button, TextField } from "../../components";

export const _AddActivity = ({ categories }) => {
  const handleSubmit = (values) => {
    console.log("values", values);
  };

  return (
    <div>
      <Typography variant="h1">Add Activity</Typography>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          category: categories[0].id,
          start: new Date(),
          end: new Date(),
          title: "",
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
          <InputLabel id="start">Start</InputLabel>
          <Field name="start" component={DateTimePickerField} />
          <InputLabel id="end">Ending</InputLabel>
          <Field name="end" component={DateTimePickerField} />
          <InputLabel id="title">Title</InputLabel>
          <Field
            name="title"
            component={(props) => {
              console.log("Formik props", props);
              return (
                <TextField
                  type="text"
                  name="title"
                  required
                  onChange={props.field.onChange}
                  value={props.field.value}
                />
              );
            }}
          />
          <Button variant="contained" color="secondary" fullWidth type="submit">
            Submit
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.activityCategories };
};

export const AddActivity = connect(mapStateToProps, {})(_AddActivity);
