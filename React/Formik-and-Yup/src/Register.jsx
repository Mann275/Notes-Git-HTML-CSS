import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { validate } from "./schemas";

const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
  age: "",
  confirm_age: "",
};

function Register() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validate,
    onSubmit: async (values, { action, isSubmitting }) => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("The Values88 :", values);
      // action.resetForm();
    },
  });
  // console.log("The Values :", values);

  // console.log(errors);

  return (
    <>
      <Formstyler>
        {" "}
        <div className="container">
          <div className="modal">
            <div className="modal-container">
              <div className="modal-left">
                <h1 className="modal-title">Welcome!</h1>
                <p className="modal-desc">Profile Management Form</p>

                <form onSubmit={handleSubmit}>
                  <div className="input-block">
                    <label htmlFor="fullName" className="input-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="fullName"
                      id="fullName"
                      placeholder="Full Name"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.fullName && touched.fullName ? (
                      <p className="form-error">{errors.fullName}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="email" className="input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      autoComplete="off"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="mobile" className="input-label">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      autoComplete="off"
                      name="mobile"
                      id="mobile"
                      placeholder="Mobile Number"
                      value={values.mobile}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.mobile && touched.mobile ? (
                      <p className="form-error">{errors.mobile}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="age" className="input-label">
                      Age
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="age"
                      id="age"
                      placeholder="Age"
                      value={values.age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.age && touched.age ? (
                      <p className="form-error">{errors.age}</p>
                    ) : null}
                  </div>

                  <div className="input-block">
                    <label htmlFor="age" className="input-label">
                      Confirm Age
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      name="confirm_age"
                      id="age"
                      placeholder="ConfirmAge"
                      value={values.confirm_age}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      disabled={isSubmitting}
                    />
                    {errors.confirm_age && touched.confirm_age ? (
                      <p className="form-error">{errors.confirm_age}</p>
                    ) : null}
                  </div>
                  {/* {console.log(isSubmitting)} */}
                  <div className="modal-buttons">
                    <button
                      className="input-button"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Formstyler>
    </>
  );
}

const Formstyler = styled.section`
  .container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .modal {
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 2rem 0;
  }

  .modal-container {
    width: 100%;
    border-radius: 15px;
    overflow: visible;
    background: rgba(44, 44, 84, 0.95);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 1rem 0;
  }

  .modal-left {
    padding: 2rem 1.5rem;
    width: 100%;
    max-height: none;
  }

  .modal-title {
    color: #ffffff;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .modal-desc {
    color: #b8b8d1;
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1rem;
  }

  .input-block {
    margin-bottom: 1.2rem;
  }

  .input-label {
    display: block;
    font-size: 14px;
    color: #ffffff;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s ease;
    box-sizing: border-box;
    background: rgba(255, 255, 255, 0.05);
    color: #ffffff;

    &:focus {
      outline: none;
      border-color: #64b5f6;
      box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);
      background: rgba(255, 255, 255, 0.1);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  .form-error {
    color: #ff6b6b;
    font-size: 11px;
    margin-top: 0.3rem;
    font-weight: 500;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: rgba(255, 255, 255, 0.02);
  }
  .input-button {
    width: 100%;
    padding: 0.8rem;
    background: linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-top: 0.5rem;

    &:hover {
      background: linear-gradient(135deg, #42a5f5 0%, #2196f3 100%);
      transform: translateY(-1px);
      box-shadow: 0 8px 16px rgba(100, 181, 246, 0.3);
    }

    &:active {
      transform: translateY(0);
    }
    &:hover:not(:disabled) {
      background: linear-gradient(135deg, #42a5f5 0%, #2196f3 100%);
      transform: translateY(-1px);
      box-shadow: 0 8px 16px rgba(100, 181, 246, 0.3);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .container {
      padding: 0.5rem;
    }

    .modal {
      max-width: 100%;
      padding: 1rem 0;
    }

    .modal-left {
      padding: 1.5rem 1rem;
    }

    .modal-title {
      font-size: 1.5rem;
    }

    input {
      padding: 0.7rem;
      font-size: 14px;
    }

    .input-button {
      padding: 0.7rem;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0.25rem;
    }

    .modal-left {
      padding: 1rem 0.75rem;
    }

    .modal-title {
      font-size: 1.3rem;
    }

    .modal-desc {
      font-size: 0.9rem;
    }
  }

  @media (max-height: 600px) {
    .modal {
      align-items: flex-start;
      padding: 1rem 0;
    }
  }
`;

export default Register;
