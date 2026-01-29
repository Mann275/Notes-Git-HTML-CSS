import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

// Validation Schema using Yup
const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  age: Yup.number()
    .min(18, "Age must be 18 or above")
    .required("Age is required"),
  address: Yup.string(), // Optional field
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function App() {
  // useState for various states
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [prefilledData, setPrefilledData] = useState(null);

  // useRef for auto-focus
  const fullNameRef = useRef(null);

  // Initial values for the form
  const initialValues = {
    fullName: "",
    email: "",
    mobile: "",
    age: "",
    address: "",
    password: "",
  };

  // useEffect to simulate API call and pre-fill form data
  // useEffect(() => {
  //   // Simulate API call to get pre-filled data
  //   const simulateApiCall = () => {
  //     setTimeout(() => {
  //       const mockData = {
  //         fullName: "Patel Mann",
  //         email: "Mann27@example.com",
  //         mobile: "7990126127",
  //         age: "21",
  //         address: "Vadodara,Gujarat",
  //         password: "",
  //       };
  //       setPrefilledData(mockData);
  //       console.log("Pre-filled data loaded:", mockData);
  //     }, 1000);
  //   };

  //   simulateApiCall();
  // }, []);

  // useEffect to auto-focus the Full Name input on component mount
  useEffect(() => {
    if (fullNameRef.current) {
      fullNameRef.current.focus();
    }
  }, []);

  // useEffect to log user data changes whenever form is submitted
  useEffect(() => {
    if (userData) {
      console.log("User data submitted:", userData);
    }
  }, [userData]);

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    setIsLoading(true);
    setShowSuccess(false);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(values);

      // Store the submitted data
      setUserData(values);

      // Show success message
      setShowSuccess(true);

      // Reset form after successful submission
      resetForm();

      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🧑‍💼 User Profile Management Form</h1>

        {showSuccess && (
          <div className="success-message">
            ✅ Profile updated successfully!
          </div>
        )}

        <Formik
          initialValues={prefilledData || initialValues}
          enableReinitialize={true}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="profile-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  innerRef={fullNameRef}
                  className="form-input"
                  placeholder="Enter your full name"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mobile">Mobile Number *</label>
                <Field
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="form-input"
                  placeholder="Enter 10-digit mobile number"
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="age">Age *</label>
                <Field
                  type="number"
                  id="age"
                  name="age"
                  className="form-input"
                  placeholder="Enter your age"
                  min="18"
                />
                <ErrorMessage
                  name="age"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password *</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <Field
                  as="textarea"
                  id="address"
                  name="address"
                  className="form-input textarea"
                  placeholder="Enter your address (optional)"
                  rows="3"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="error-message"
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${
                  isLoading || !isValid ? "disabled" : ""
                }`}
                disabled={isLoading || !isValid}
              >
                {isLoading ? "Submitting..." : "Update Profile"}
              </button>
            </Form>
          )}
        </Formik>

        {userData && (
          <div className="submitted-data">
            <h3>📊 Last Submitted Data:</h3>
            <div className="data-display">
              <p>
                <strong>Full Name:</strong> {userData.fullName}
              </p>
              <p>
                <strong>Email:</strong> {userData.email}
              </p>
              <p>
                <strong>Mobile:</strong> {userData.mobile}
              </p>
              <p>
                <strong>Age:</strong> {userData.age}
              </p>
              {userData.address && (
                <p>
                  <strong>Address:</strong> {userData.address}
                </p>
              )}
              <p>
                <strong>Password:</strong>{" "}
                {"*".repeat(userData.password.length)}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
