import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { notify } from './notify'

//component
import Button from './Button'
import Item from './Item'

//style
import styles from '../styles/style.module.css'

//function
import { validate } from './validate'

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState({})
  const [touch, setTouch] = useState({})

  useEffect(() => {
    setErrors(validate(data, 'login'))
  }, [data, touch])

  const change = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
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

  const items = ['email', 'password']

  return (
    <>
      <form onSubmit={submit} className={styles.container}>
        <h2 className={styles.title}>Login</h2>
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
        <Button button="login" link="signup" />
      </form>
      <ToastContainer />
    </>
  )
}

export default Login
