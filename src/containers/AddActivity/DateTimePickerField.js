import React from "react";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const DateTimePickerField = ({ field, form, ...other }) => {
  const currentError = form.errors[field.name];

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DateTimePicker
        clearable
        disablePast
        required
        name={field.name}
        value={field.value}
        format="MMMM Do h:mm a"
        helperText={currentError}
        error={Boolean(currentError)}
        onError={(error) => {
          if (error !== currentError) {
            form.setFieldError(field.name, error);
          }
        }}
        onChange={(date) => {
          console.log("date onChange", date);
          form.setFieldValue(field.name, date, false);
        }}
        {...other}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateTimePickerField;
