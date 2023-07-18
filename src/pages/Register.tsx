import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from "yup"
import { createUser } from '../utils/authAPI'
import styled from 'styled-components'

const Register = () => {
  const navigate = useNavigate()
  const schema = yup.object({
    userName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
    avatar: yup.string().required(),
  })

  const {
    register, formState: {errors}, handleSubmit, reset
  }= useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit(async (res: any)=>{
    const {userName, email, password, avatar} = res

    createUser({userName, email, password, avatar}).then(()=>{
      navigate("/sign-in")
    })
  })
  return (
    <div>
        <Container>
          <Main>
            <Card onSubmit={onSubmit}>
              <Title>Sign Up</Title>

              <InputHolder>
              <InputText>User Name</InputText>
              <Input placeholder="User Name" {...register("userName")}/>
              {errors.userName && <Error>username error</Error>}
              </InputHolder>

              <InputHolder>
              <InputText>Email</InputText>
              <Input placeholder="Email" {...register("email")}/>
              {errors.email && <Error>email error</Error>}
              </InputHolder>

              <InputHolder>
              <InputText>Password</InputText>
              <Input placeholder="Password" {...register("password")}/>
              {errors.password && <Error>password error</Error>}
              </InputHolder>

              <InputHolder>
              <InputText>Confirm</InputText>
              <Input placeholder="Confirm" {...register("confirm")}/>
              {errors.confirm && <Error>confirm error</Error>}
              </InputHolder>

              <InputHolder>
              <InputText>Avatar</InputText>
              <Input placeholder="Avatar" {...register("avatar")}/>
              {errors.avatar && <Error>avatar error</Error>}
              </InputHolder>

            <Button type="submit" bg="p">Sign Up</Button>

            <TextHolder>
              <Line/>
              <MyText>Or</MyText>
              <Line/>

            </TextHolder>

            <Link to="/sign-in" style={{textDecoration: "none", color: "#220122"}}>
            <Button>Sign In</Button>
            </Link>

            </Card>
          </Main>
        </Container>
    </div>
  )
}

export default Register;

const Title = styled.div`
text-align: center;
font-weight: 700;
color: #220122;
margin-bottom: 10px;
`
const InputText = styled.div`
font-size: 13px;
`
const Input = styled.input`
outline: none;
border: 1px solid silver;
border-radius: 3px;
height: 30px;
width: 97%;
padding-left: 5px;
`
const Error = styled.div`
font-size: 12px;
color: #c9016c;
text-align: right;
`
const InputHolder = styled.div``
const MyText = styled.div`
margin: 0 5px;
`
const Line = styled.div`
height: 1px;
width: 100%;
background-color: #837583;
`
const TextHolder = styled.div`
display: flex;
width: 99%;
align-items: center;
`
const Button = styled.button<{bg?: string}>`
width: 99%;
height: 40px;
justify-content: center;
align-items: center;
display: flex;
background-color: ${({bg})=> bg ? "#5900959" : "dogerblue"};
color: white;
border-radius: 3px;
cursor: pointer;
border: 0;
outline: none;
font-family: Poppins;
font-size: 15px;
margin-top: 20px;
`
const Card = styled.div`
width: 280px;
min-height: fit-content;
border: 1px solid silver;
border-radius: 5px;
padding: 20px 10px;
`
const Main = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
`
const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
color: #220122;
`