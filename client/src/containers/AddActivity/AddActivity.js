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

  const initialValues = {
    category: categories[0].id,
    start: new Date(),
    end: new Date(),
    title: "",
    calories: "",
    distance: "",
    steps: "",
  };
  console.log("categories", categories);
  const displayNumericField = (categories, categoryId, numericFieldName) => {
    const category = categories.find((category) => category.id === categoryId);
    if (numericFieldName === "steps") return category.use_steps;
    else if (numericFieldName === "distance") return category.use_distance;
    else return category.use_calories;
  };

  return (
    <div>
      <Typography variant="h1">Add Activity</Typography>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {(props) => (
          <Form>
            {console.log("props values", props.values)}
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
            {displayNumericField(
              categories,
              props.values.category,
              "steps"
            ) && (
              <>
                <InputLabel id="title">Steps</InputLabel>
                <Field
                  name="steps"
                  component={(props) => {
                    return (
                      <TextField
                        type="number"
                        name="steps"
                        required
                        min={0}
                        onChange={props.field.onChange}
                        value={props.field.value}
                      />
                    );
                  }}
                />
              </>
            )}
            {displayNumericField(
              categories,
              props.values.category,
              "calories"
            ) && (
              <>
                <InputLabel id="title">Calories</InputLabel>
                <Field
                  name="calories"
                  component={(props) => {
                    return (
                      <TextField
                        type="number"
                        name="calories"
                        required
                        min={0}
                        onChange={props.field.onChange}
                        value={props.field.value}
                      />
                    );
                  }}
                />
              </>
            )}
            {displayNumericField(
              categories,
              props.values.category,
              "distance"
            ) && (
              <>
                <InputLabel id="distance">Distance</InputLabel>
                <Field
                  name="distance"
                  component={(props) => {
                    return (
                      <TextField
                        type="number"
                        name="distance"
                        required
                        step="0.01"
                        min="0"
                        onChange={props.field.onChange}
                        value={props.field.value}
                      />
                    );
                  }}
                />
              </>
            )}
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { categories: state.activityCategories };
};

export const AddActivity = connect(mapStateToProps, {})(_AddActivity);
