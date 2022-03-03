import React from "react";
import { useFormik } from "formik";
import "../components/SignUp.css";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "must be 15 characters or less")
        .required("required"),
      lastName: Yup.string()
        .max(15, "must be 20 characters or less")
        .required("required"),
      email: Yup.string().email("Invalid email format").required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.touched);

  //   console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Formik form </h1>
      <div className="input-container">
        <input
          id="firstName"
          name="firstName"
          type={"text"}
          placeholder="First Name"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          id="lasttName"
          name="lastName"
          type={"text"}
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
      </div>

      {formik.touched.lastName && formik.errors.lastName ? (
        <p>{formik.errors.lastName}</p>
      ) : null}

      <div className="input-container">
        <input
          id="email"
          name="email"
          type={"email"}
          placeholder="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>

      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
