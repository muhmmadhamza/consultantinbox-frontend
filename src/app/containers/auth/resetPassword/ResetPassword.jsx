import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import CircularProgress from '@mui/material/CircularProgress'

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import Passwordimg from '../../../assets/forgot-password.png'
import { RiErrorWarningLine } from 'react-icons/ri'
import { useFormik } from 'formik'
import { ResetPasswordScehma } from '../../../validation/resetpassword'
import { useNavigate } from 'react-router-dom'
import show_Toast from '../../../helpers/toast.helper'
import { Resetpassword } from '../../../services/index'
import { Button } from '@mui/material'

const initialValues = {
  password: '',
  confirmPassword: '',
}
const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const navigate = useNavigate()

  const accessEmailToken = localStorage.getItem('accessEmailToken')
  const otpToken = localStorage.getItem('otpToken')

  useEffect(() => {
    if (!accessEmailToken && !otpToken) {
      navigate('/login')
    }
  }, [])

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
    validationSchema: ResetPasswordScehma,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const storedValuesString = localStorage.getItem('accessEmailToken')
      const storedValues = JSON.parse(storedValuesString)
      const userEmail = storedValues.email
      const data = {
        email: userEmail,
        password: values?.password,
        confirmPassword: values?.confirmPassword,
      }
      try {
        setSubmitting(true)
        const response = await Resetpassword(data)
        if (response?.data?.status === 'success') {
          localStorage.removeItem('accessEmailToken')
          localStorage.removeItem('otpToken')
          navigate('/login')
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
        <title>ComplyCore | ResetPassword</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Reset Password</h1>
          </div>
          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo">
                  <img src={Passwordimg} className="forgetimg" alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <input
                    type="hidden"
                    name="email"
                    id="email"
                    placeholder="username@gmail.com"
                  />
                  <div className="input-f">
                    <label htmlFor="password">New Password</label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      id="password"
                      placeholder="New Password"
                      className={
                        errors.password && touched.password
                          ? 'inputError'
                          : null
                      }
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <div>
                        {' '}
                        <span>
                          <RiErrorWarningLine className="warning" />
                        </span>
                        <p className="form-errors">{errors.password}</p>{' '}
                      </div>
                    ) : (
                      <span onClick={handleTogglePassword}>
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </span>
                    )}
                  </div>

                  <div className="input-f">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? 'inputError'
                          : null
                      }
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div>
                        {' '}
                        <span>
                          <RiErrorWarningLine className="warning" />
                        </span>
                        <p className="form-errors">{errors.confirmPassword}</p>{' '}
                      </div>
                    ) : (
                      <span onClick={handleToggleConfirmPassword}>
                        {showConfirmPassword ? (
                          <AiFillEye />
                        ) : (
                          <AiFillEyeInvisible />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="log-btn">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      sx={{
                        backgroundColor: '#3C4256 !important',
                        borderColor: '#3C4256 !important',
                        color: 'white !important',

                        '&:hover': {
                          backgroundColor: 'white !important',
                          borderColor: '#3C4256 !important',
                          color: 'black !important',
                        },
                      }}
                    >
                      {isSubmitting ? (
                        <CircularProgress size={30} color="primary" />
                      ) : (
                        'Submit'
                      )}
                    </Button>
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

export default ResetPassword
