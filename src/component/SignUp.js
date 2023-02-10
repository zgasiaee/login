import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from './notify'

//component
import Accept from './Accept'
import Button from './Button'
import Item from './Item'

//style
import styles from '../styles/style.module.css'

//function
import { validate } from './validate'

const SignUp = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    accept: false,
  })

  const [errors, setErrors] = useState({})
  const [touch, setTouch] = useState({})

  useEffect(() => {
    setErrors(validate(data, 'signUp'))
  }, [data, touch])

  const change = (event) => {
    if (event.target.name === 'accept') {
      setData({ ...data, [event.target.name]: event.target.checked })
    } else {
      setData({ ...data, [event.target.name]: event.target.value })
    }
  }

  const focus = (event) => {
    setTouch({ ...data, [event.target.name]: true })
  }

  const submit = (event) => {
    event.preventDefault()
    if (!Object.keys(errors).length) {
      notify('success', 'you signed up successfully')
    } else {
      setTouch({
        ...data,
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        accept: true,
      })
      notify('error', 'invalid data')
    }
  }

  const items = ['name', 'email', 'password', 'confirmPassword']

  return (
    <>
      <form onSubmit={submit} className={styles.container}>
        <h2 className={styles.title}>Sign Up</h2>
        {items.map((item) => (
          <Item
            key={item}
            val={data[item]}
            name={item}
            change={change}
            focus={focus}
            error={errors[item]}
            touch={touch[item]}
          />
        ))}
        <Accept
          accept={data.accept}
          change={change}
          focus={focus}
          error={errors.accept}
          touch={touch.accept}
        />
        <Button link="login" button="signup" />
      </form>
      <ToastContainer />
    </>
  )
}

export default SignUp
