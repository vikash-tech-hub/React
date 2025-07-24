import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting },
  } = useForm();

  async function onsubmit(data) {
    await new Promise((resolve)=>setTimeout(resolve,5000))
    console.log("submmitting the form", data)
  }
  return (

    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label>
          firstname
        </label>

        <input
          {...register('firstName', {
            required: true,
            minLength: { value: 3, message: 'min len atleast 3' },
            maxLength: { value: 6, message: 'max len atleast 6' }
          })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}

      </div>
      <br />
      <div>
        <label>
          Midlle name
        </label>
        <input  {...register('Midlle name')} />
      </div>
      <br />
      <div>
        <label>Last Name</label>
        <input
          {...register('lastName', {
            pattern: {
              value: /^[A-Za-z]+$/,
              message: 'Last name must contain only letters',
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <br />
      <input type="Submit" disabled={isSubmitting} value={isSubmitting?"submmitting":"submit"}/>

    </form>
  )
}

export default App
