import React from "react";
import { Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import DateTimePickerField from "./DateTimePickerField";
import CategorySelect from "./CategorySelect";
import InputLabel from "@material-ui/core/InputLabel";
import { Typography, Button } from "../../components";
import TitleTextField from "./TitleTextField";
import StepsField from "./StepsField";
import DistanceField from "./DistanceField";
import CaloriesField from "./CaloriesField";

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
            <Field name="title" component={TitleTextField} />
            {displayNumericField(
              categories,
              props.values.category,
              "steps"
            ) && (
              <>
                <InputLabel id="steps">Steps</InputLabel>
                <Field name="steps" component={StepsField} />
              </>
            )}
            {displayNumericField(
              categories,
              props.values.category,
              "calories"
            ) && (
              <>
                <InputLabel id="title">Calories</InputLabel>
                <Field name="calories" component={CaloriesField} />
              </>
            )}
            {displayNumericField(
              categories,
              props.values.category,
              "distance"
            ) && (
              <>
                <InputLabel id="distance">Distance</InputLabel>
                <Field name="distance" component={DistanceField} />
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
