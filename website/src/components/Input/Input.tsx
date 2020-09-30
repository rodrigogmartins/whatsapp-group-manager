import React, { useState } from 'react'
import { Container, Input, Label } from './styles'

interface IInputWrapper {
  label?: string
  type?: string
  value?: any
  required?: boolean
  placeholder?: string
  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void
}

const InputWrapper: React.FC<IInputWrapper> = ({
  label,
  type,
  value,
  required,
  placeholder,
  onChangeHandler
}) => {
  const hasValue = value && value.length > 0
  const [isActive, setIsActive] = useState(hasValue)

  const handleTextChange = (text: string) => {
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
