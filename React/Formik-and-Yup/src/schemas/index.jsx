import * as Yup from "yup";

export const validate = Yup.object({
  fullName: Yup.string().min(3).max(15).required("Name is required"),
  email: Yup.string().email().required("email is required"),
  mobile: Yup.string()
    .min(10, "number should be of 10 digit")
    .required("Number pls"),
  age: Yup.number()
    .typeError("Age must be a number")
    .min(18, "You must be at least 18 years old")
    .required("Age is required"),
  confirm_age: Yup.number()
    .required()
    .oneOf([Yup.ref("age"), null], "Age must be same"),
});
