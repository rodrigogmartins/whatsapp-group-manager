import React, { useState } from 'react'
import { Container, Input, Label } from './styles'

interface IInputWrapper {
  label?: string
  type?: string
  required?: boolean
  placeholder?: string
  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
}

const InputWrapper: React.FC<IInputWrapper> = ({
  label,
  type,
  required,
  placeholder,
  onChangeHandler
}) => {
  const [isActive, setIsActive] = useState(false)
  const [value, setValue] = useState('')

  const handleTextChange = (text: string) => {
    setValue(text)
    setIsActive(text !== '')
  }

  return (
    <Container>
      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required || false}
        onChange={(e) => {
          handleTextChange(e.target.value)
          onChangeHandler(e)
        }}
      />
      <Label isActive={isActive}>{label}</Label>
    </Container>
  )
}

export default InputWrapper
