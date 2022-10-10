import axios from 'axios'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {Navigate, useNavigate} from 'react-router-dom'
import {useLocalStorage} from 'react-use'

import { Icon, Input } from './../../components'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Preencha seu nome'),
  username: Yup.string().required('Preencha seu nome de usuário'),
  email: Yup.string().email('Informe um email válido').required('Preencha seu e-mail'),
  password: Yup.string().required('Preencha uma senha')
})



export const Signup = () => {
  const navigate = useNavigate()
  const [auth, setAuth] = useLocalStorage('auth',{})
  const formik = useFormik({
    onSubmit: async (values) => {

      const res = await axios({
        method: 'post',
        baseURL: import.meta.env.VITE_API_URL,
        url: '/users',
        data: values
      })

      //console.log(res.data)
      setAuth(res.data)
      navigate('/')
    },
    initialValues: {
      name:'',
      username:'',
      email:'',
      password:''
    },
    validationSchema
  })

  //console.log(formik.errors)

  if (auth?.user?.id) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div>
      <header className=" p-4 border-b border-red-300">
        <div className="container max-w-xl flex justify-center">
          <img
            src="../public/images/logo-fundo-branco.svg"
            className="w-32 md:w-40"
          />
        </div>
      </header>
      <main className=" container max-w-xl p-4">
        <div className="p-4 flex space-x-4 items-center">
          <a href='/'>
            <Icon name="back" className="h-6"/>
          </a>
          <h2 className="text-xl font-bold">Crie sua conta</h2>
        </div>

        <form className="p-4 space-y-6" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="Seu nome"
            name="name"
            error={formik.errors.name}
            placeholder="Digite seu nome"
            value={formik.touched.name && formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type="text"
            label="Seu nome de usuário"
            name="username"
            error={formik.touched.username && formik.errors.username}
            placeholder="Digite um nome de usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type="text"
            label="Seu e-mail"
            name="email"
            error={formik.touched.email && formik.errors.email}
            placeholder="Digite seu e-mail"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            type="password"
            label="Sua senha"
            name="password"
            error={formik.touched.password && formik.errors.password}
            placeholder="Digite sua senha"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           <button 
              type='submit' 
              className=" w-full text-white bg-red-500 px-6 py-3 rounded-xl disabled:opacity-50"
              disabled={!formik.isValid || formik.isSubmitting}
              >
            {formik.isSubmitting ? 'Carregando...':'Criar minha Conta'}
          </button>
        </form>
      </main>

    </div>
  )
}