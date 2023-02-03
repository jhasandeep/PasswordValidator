// Write your code here

import {useState} from 'react'

import {
  Heading,
  Paragraph,
  Background,
  BackgroundContainer,
  ParagraphTwo,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  function onChange(e) {
    setPassword(e.target.value)
  }

  return (
    <Background>
      <BackgroundContainer>
        <Heading>Password Validator</Heading>
        <ParagraphTwo>
          check how strong and secure is your password
        </ParagraphTwo>

        <input type="password" onChange={onChange} />
        {password.length < 8 && (
          <Paragraph>Your password must be at least 8 characters</Paragraph>
        )}
      </BackgroundContainer>
    </Background>
  )
}

export default PasswordValidator
