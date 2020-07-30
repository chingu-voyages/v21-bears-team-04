import React from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";

export const _AddActivity = () => {
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {},
    onSubmit: (values) => {},
  });

  return (
    <div>
      <h1>Add Activity</h1>
    </div>
  );
};

export const AddActivity = connect(null, {})(_AddActivity);
