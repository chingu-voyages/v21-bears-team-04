import React from 'react'
import { useFormik } from 'formik';

const AddActivity = () => {

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
         
        },
        onSubmit: (values) => {
          signUp(values);
        },
      });

    return <div>
          <h1>Add Activity</h1>
          

   
    </div>

}

export default AddActivity