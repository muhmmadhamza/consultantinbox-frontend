import React from 'react'
import { Helmet } from 'react-helmet-async'
import CircularProgress from '@mui/material/CircularProgress'

import Passwordimg from '../../../assets/forgot-password.png'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineLeft } from 'react-icons/ai'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useFormik } from 'formik'
import { ForgotPasswordScehma } from '../../../validation/forgotpassword'
import show_Toast from '../../../helpers/toast.helper'
import { ForgotPassword } from '../../../services/index'
import { Button } from '@mui/material'

const initialValues = {
  email: '',
}
const ForgetPassword = () => {
  const navigate = useNavigate()

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: ForgotPasswordScehma,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setSubmitting(true)
        const response = await ForgotPassword(values)
        if (response?.data?.status === 'success') {
          navigate('/otppage')
          const valuesString = JSON.stringify(values)
          localStorage.setItem('accessEmailToken', valuesString)
        }
        show_Toast({
          status: true,
          message: response?.data?.message || 'Success',
        })
        resetForm()
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.response?.data?.message || 'Something went wrong',
        })
      } finally {
        setSubmitting(false)
      }
    },
  })
  return (
    <>
      <Helmet>
        <title>ComplyCore | ForgetPage</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Forget Password</h1>
          </div>
          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo">
                  <img src={Passwordimg} className="forgetimg" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-f">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="username@gmail.com"
                      className={
                        errors.email && touched.email ? 'inputError' : null
                      }
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div>
                        <span>
                          {' '}
                          <RiErrorWarningLine className="warning" />{' '}
                        </span>
                        <p className="form-errors">{errors.email}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="log-btn">
                  <Button
                  type="submit"
                  sx={{
                    backgroundColor: '#3C4256 !important', 
                        color: 'white !important',
                        borderColor: '#3C4256 !important',

                    '&:hover': {
                      backgroundColor: 'transparent !important',
                      color: 'black !important', 
                      borderColor: '#3C4256 !important',

                    },
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <CircularProgress size={30} color="primary" style={{color:'white'}}/>
                  ) : (
                    'Submit'
                  )}
                </Button>
                  </div>
                  <div className="dont-account">
                    <Link to="/login">
                      <span>
                        <AiOutlineLeft /> Return to Login
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ForgetPassword
