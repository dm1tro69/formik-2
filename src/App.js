import './App.scss';
import {Formik} from "formik";
import * as yup from 'yup'

function App() {
    const validation = yup.object().shape({
         name: yup.string().typeError('must be string').required('Required'),
        secondName: yup.string().typeError('must be string').required('Required'),
        password: yup.string().typeError('must be string').required('Required'),
        confirmPassword: yup.string().oneOf([yup.ref('password')], 'passwords not match').required('Required'),
        email: yup.string().email('email').typeError('must be string').required('Required'),
        confirmEmail: yup.string().email('email').oneOf([yup.ref('email')], 'emails not match').required('Required'),
    })
  return (
    <div>
      <Formik initialValues={{
           name: '',
          secondName: '',
          password: '',
          confirmPassword: '',
          email: '',
          confirmEmail: ''
      }}
              validationSchema={validation}
              validateOnBlur
        onSubmit={(values)=> console.log(values)}
      >
          {({values,
                errors,
                touched,
                handleChange,
              handleBlur,
              isValid,
              handleSubmit,
              dirty
            })=> (
                <div className={`form`}>
                    <p>
                        <label htmlFor="name">Name</label><br/>
                        <input
                            className={'input'}
                            type="text"
                            name={'name'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </p>
                    {touched.name && errors.name && <p className={'error'}>{errors.name}</p>}
                    <p>
                        <label htmlFor="secondName">SecondName</label><br/>
                        <input
                            className={'input'}
                            type="text"
                            name={'secondName'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.secondName}
                        />
                    </p>
                    {touched.secondName && errors.secondName && <p className={'error'}>{errors.secondName}</p>}
                    <p>
                        <label htmlFor="password">Password</label><br/>
                        <input
                            className={'input'}
                            type="password"
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </p>
                    {touched.password && errors.password && <p className={'error'}>{errors.password}</p>}
                    <p>
                        <label htmlFor="confirmPassword">ConfirmPassword</label><br/>
                        <input
                            className={'input'}
                            type="password"
                            name={'confirmPassword'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                        />
                    </p>
                    {touched.confirmPassword && errors.confirmPassword && <p className={'error'}>{errors.confirmPassword}</p>}
                    <p>
                        <label htmlFor="email">Email</label><br/>
                        <input
                            className={'input'}
                            type="email"
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                    </p>
                    {touched.email && errors.email && <p className={'error'}>{errors.email}</p>}
                    <p>
                        <label htmlFor="confirmEmail">ConfirmEmail</label><br/>
                        <input
                            className={'input'}
                            type="email"
                            name={'confirmEmail'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmEmail}
                        />
                    </p>
                    {touched.confirmEmail && errors.confirmEmail && <p className={'error'}>{errors.confirmEmail}</p>}
                    <button
                        type={'submit'}
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
          )}
      </Formik>
    </div>
  );
}

export default App;
