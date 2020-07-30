import React from "react";
import { useFormik, Field, Form, Formik } from "formik";
import { connect } from "react-redux";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import DateTimePickerField from "./DateTimePickerField";

// const DateTimePickerField = ({ field, form, ...other }) => {
//   const currentError = form.errors[field.name];

//   return (
//     <MuiPickersUtilsProvider utils={MomentUtils}>
//       <DateTimePicker
//         clearable
//         disablePast
//         name={field.name}
//         value={field.value}
//         format="dd/MM/yyyy"
//         helperText={currentError}
//         error={Boolean(currentError)}
//         onError={(error) => {
//           // handle as a side effect
//           if (error !== currentError) {
//             form.setFieldError(field.name, error);
//           }
//         }}
//         // if you are using custom validation schema you probably want to pass `true` as third argument
//         onChange={(date) => form.setFieldValue(field.name, date, false)}
//         {...other}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };

export const _AddActivity = ({ categories }) => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: { category: categories[0].id, date: new Date() },
    onSubmit: (values) => {},
  });

  const renderCategoryChoices = (categories) => {
    return categories.map((category) => (
      <MenuItem value={category.id}>{category.name}</MenuItem>
    ));
  };

  return (
    <div>
      <h1>Add Activity</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ category: categories[0].id, start: new Date() }}
      >
        <Form>
          <InputLabel id="activity-category">Activity</InputLabel>
          <Select
            labelId="activity-category"
            id="activity-category-select"
            value={values.category}
            onChange={handleChange}
          >
            {renderCategoryChoices(categories)}
          </Select>

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
