import React from 'react'
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const DateTimePickerField = ({ field, form, ...other }) => {
    const currentError = form.errors[field.name];
  
    return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DateTimePicker
          clearable
          disablePast
          name={field.name}
          value={field.value}
          format="dd/MM/yyyy"
          helperText={currentError}
          error={Boolean(currentError)}
          onError={(error) => {
            if (error !== currentError) {
              form.setFieldError(field.name, error);
            }
          }}
         
          onChange={(date) => form.setFieldValue(field.name, date, false)}
          {...other}
        />
      </MuiPickersUtilsProvider>
    );
  };

  export default DateTimePickerField 