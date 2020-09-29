import React, { useCallback, useState } from 'react'
import { Button } from 'src/components/Button/Button'
import GroupsForm from 'src/components/Forms/GroupsForm/GroupForm'
import Modal from 'src/components/Modal/Modal'
import Table from 'src/components/Table/Table'
import { useFetch } from 'src/hooks/useFetch'
import { useModal } from 'src/hooks/useModal'
import api from '../../services/api'
import { Container, ContainerLinks, TableHeader } from './styles'

const Groups: React.FC = () => {
  const entityUrl = '/api/groups'
  const { data, mutate } = useFetch<any>(entityUrl)
  const { isShown, toggle } = useModal()
  const [groupId, setGroupId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const rowClickHandler = (id: string) => {
    !groupId ? setGroupId(id) : setGroupId('')
  }

  const addGroup = useCallback(
    (description: string, slug: string) => {
      const newGroup = {
        description,
        slug
      }

      api
        .post('/api/groups/', newGroup)
        .then(() => {
          setIsSubmitting(false)
        })
        .catch(() => {
          setIsSubmitting(false)
        })

      console.log(data)

      const updatedGroups = data.assign({ description, slug })

      mutate(updatedGroups, false)
    },
    [data, mutate, setIsSubmitting]
  )

  const updateGroup = useCallback(
    (id: string, description: string, slug: string) => {
      const newGroup = {
        description,
        slug
      }

      api
        .put(`/api/groups/${id}`, newGroup)
        .then(() => {
          setIsSubmitting(false)
        })
        .catch(() => {
          setIsSubmitting(false)
        })

      const updatedGroups = data?.map((group: any) =>
        group.id === id ? newGroup : group
      )

      mutate(updatedGroups, false)
    },
    [data, mutate, setIsSubmitting]
  )

  const removeButtonHandler = useCallback(
    (id: string) => {
      api.delete(`${entityUrl}/${id}`).catch(() => {})

      const updatedGroups = data?.filter((group: any) => group.id !== id)

      mutate(updatedGroups, false)
      setGroupId('')
    },
    [data, mutate, setGroupId]
  )

  return (
    <Container>
      <h1>Bem-vindo ao Whatsapp Group Mananger!</h1>
      <Modal
        headerText={groupId ? 'Alterar Grupo' : 'Adicionar Grupo'}
        isShown={isShown}
        hide={toggle}
      >
        <GroupsForm
          groupId={groupId}
          addGroup={addGroup}
          updateGroup={updateGroup}
        />
      </Modal>
      <ContainerLinks>
        <TableHeader>
          <h2>Seus grupos de Whatsapp</h2>
          <Button type="submit" onClick={toggle} isPrimaryColor>
            {groupId ? 'Alterar Grupo' : 'Adicionar Grupo'}
          </Button>
        </TableHeader>
        <Table
          data={data}
          rowClickHandler={rowClickHandler}
          removeButtonHandler={removeButtonHandler}
        />
      </ContainerLinks>
    </Container>
  )
}

export default Groups
