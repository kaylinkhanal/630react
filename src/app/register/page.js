'use client'
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux'
import {handleDec,handleInc} from '../../redux/reducerSlice/counterSlice'
const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
    age: Yup.string().test((x)=>{
      if(x>3){
        return true
      }else{
        return false
      }
    }) ,
    password: Yup.string().matches(/[A-Z]/, "password must contain at least a uppercase").required('Required'),

    passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Register = () => {
  const {count} = useSelector((state) => state.count )
  const dispatch = useDispatch()
  const increment = ()=> {
    dispatch(handleInc())
  }
  return (
  <div>
    <h1>{count}</h1>
    <button onClick={increment}>Change name</button>
    <Formik
      initialValues={{
        firstName: '',
        age: '',
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);

      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Field name="firstName" />
          {errors.firstName && touched.firstName ? (
            <div style={{color:'red'}}>{errors.firstName}</div>
          ) : null}
          <br/>
          <Field name="age" placeholder="phoneNumber/email"/>
          {errors.age && touched.age ? (
            <div style={{color:'red'}}>{errors.age}</div>
          ) : null}
          <br/>

          <Field name="password" type="password" />
          {errors.password && touched.password ? <div style={{color:'red'}}>{errors.password}</div> : null}
          <br/>
          <Field name="passwordConfirmation" type="password" />
          {errors.passwordConfirmation && touched.passwordConfirmation ? <div style={{color:'red'}}>{errors.passwordConfirmation}</div> : null}
          <br/>
          
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
)}

export default Register

