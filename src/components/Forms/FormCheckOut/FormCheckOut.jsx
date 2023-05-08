import React from 'react'
import { Form } from 'react-bootstrap'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { PatternFormat } from 'react-number-format'
import ButtonComponent from '../../ButtonComponent'

import { changeCartList } from '../../../store/actions'
import { selectCart } from '../../../store/selectors'
import './FormCheckOut.scss'
import { useDispatch, useSelector } from 'react-redux'

const FormCheckOut = () => {
  const phoneRegExp =
    /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  const validationsSchema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, '*First name must have at least 2 characters')
      .max(20, "*First name can't be longer than 20 characters")
      .required('*First name is required'),
    lastName: yup
      .string()
      .min(2, '*Last name must have at least 2 characters')
      .max(20, "*Last name can't be longer than 20 characters")
      .required('*Last name is required'),
    age: yup
      .number()
      .min(1, '*Age must have at least 2 digits')
      .max(99, "*Age can't be longer than 3 digits")
      .required('*Age is required'),
    address: yup
      .string()
      .min(5, '*Address must have at least 5 characters')
      .max(40, "*Address can't be longer than 40 characters")
      .required('*Address is required'),
    phone: yup
      .string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('*Phone is required'),
  })

  const dispatch = useDispatch()
  const cartItems = useSelector(selectCart)

  const handleCheckout = (values) => {
    console.log(values)
    console.log(cartItems)
    const newCart = []
    dispatch(changeCartList(newCart))
  }

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        age: '',
        address: '',
        phone: '',
      }}
      validateOnBlur
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)
        setTimeout(() => {
          handleCheckout(values)
          alert('Thanks for the purchase!')
          resetForm()
          setSubmitting(false)
        }, 1000)
      }}
      validationSchema={validationsSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        dirty,
        isValid,
        isSubmitting,
      }) => (
        <div onSubmit={handleSubmit}>
          <h4 className="mb-3">Shipping Address</h4>
          <Form className="form row g-3">
            <Form.Group className="col-md-5" controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                className={
                  touched.firstName && errors.firstName ? 'is-invalid' : null
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <ErrorMessage
                className="error-message"
                name="firstName"
                component={'p'}
              />
            </Form.Group>
            <Form.Group className="col-md-5" controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
              <ErrorMessage
                className="error-message"
                name="lastName"
                component={'p'}
              />
            </Form.Group>
            <Form.Group className="col-md-2" controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                name="age"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
              />
              <ErrorMessage
                className="error-message"
                name="age"
                component={'p'}
              />
            </Form.Group>
            <Form.Group className="col-12" controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              <ErrorMessage
                className="error-message"
                name="address"
                component={'p'}
              />
            </Form.Group>
            <Form.Group className="col-12" controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <PatternFormat
                className="form-control"
                format="+38(0##)-###-####"
                allowEmptyFormatting
                mask="#"
                type="text"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <ErrorMessage
                className="error-message"
                name="phone"
                component={'p'}
              />
            </Form.Group>

            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <ButtonComponent
              variant="primary"
              type="submit"
              title={`Checkout`}
              disabled={!(isValid && dirty) && isSubmitting}
            />
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default FormCheckOut
