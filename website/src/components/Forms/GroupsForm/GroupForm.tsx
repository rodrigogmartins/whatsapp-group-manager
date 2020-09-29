import React, { useState } from 'react'
import InputWrapper from 'src/components/Input/Input'
import { Container, ErrorMessage } from './styles'
import api from '../../../services/api'
import { Button } from 'src/components/Button/Button'

interface IGroupsForm {
  groupId?: string
  addGroup(description: string, slug: string): void
  updateGroup(id: string, description: string, slug: string): void
}

const GroupsForm: React.FC<IGroupsForm> = ({
  groupId,
  addGroup,
  updateGroup
}) => {
  const [formError, setFormError] = useState('')
  const [groupSlug, setGroupSlug] = useState('')
  const [groupDescription, setGroupDescription] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(groupId)
    /*    try {
      if (isSubmitting) return

      setFormError('')
      setIsSubmitting(true)

      if (groupId) {
        updateGroup(groupId, groupDescription, groupSlug)
      }

      addGroup(groupDescription, groupSlug)
    } catch (error) {
      setFormError(error.message)
    }*/
  }

  return (
    <Container onSubmit={(e) => submitForm(e)}>
      {formError && <ErrorMessage>Erro: {formError}</ErrorMessage>}
      <InputWrapper
        label="Descrição"
        type="text"
        required
        onChangeHandler={(e) => setGroupDescription(e.target.value)}
      />
      <InputWrapper
        label="Slug"
        type="text"
        required
        onChangeHandler={(e) => setGroupSlug(e.target.value)}
      />
      <Button type="submit" isPrimaryColor>
        {groupId ? 'Salvar Alterações' : 'Adicionar Grupo'}
      </Button>
    </Container>
  )
}

export default GroupsForm
