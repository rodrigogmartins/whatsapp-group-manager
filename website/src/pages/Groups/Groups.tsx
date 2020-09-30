import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'src/components/Button/Button'
import GroupsForm from 'src/components/Forms/GroupsForm/GroupForm'
import Modal from 'src/components/Modal/Modal'
import Table from 'src/components/Table/Table'
import { useFetch } from 'src/hooks/useFetch'
import { useModal } from 'src/hooks/useModal'
import api from '../../services/api'
import { Container, ContainerLinks, TableHeader } from './styles'

const Groups: React.FC = () => {
  const history = useHistory()
  const entityUrl = '/api/groups'
  const { data, error, mutate } = useFetch<any>(entityUrl)
  const { isShown, toggle } = useModal()
  const [groupId, setGroupId] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (error && `${error}`.indexOf('code 401') !== -1) {
    history.push('/')
  }

  const rowClickHandler = (id: string) => {
    const trClicked = document.querySelector('tr.trClicked')
    trClicked?.classList.remove('trClicked')

    if (groupId === id) {
      setGroupId('')
    } else {
      const trClicked = document.getElementById(id)
      trClicked?.classList.add('trClicked')

      setGroupId(id)
    }
  }

  const addGroup = useCallback(
    (description: string, slug: string) => {
      if (isSubmitting) return

      const newGroup = {
        description,
        slug
      }

      api
        .post('/api/groups/', newGroup)
        .then(() => {
          setIsSubmitting(false)
          toggle()
        })
        .catch(() => {
          setIsSubmitting(false)
        })

      data.push(newGroup)

      mutate(data, false)
    },
    [data, mutate, setIsSubmitting, toggle]
  )

  const updateGroup = useCallback(
    (id: string, description: string, slug: string) => {
      if (isSubmitting) return

      const newGroup = {
        description,
        slug
      }

      api
        .put(`/api/groups/${id}`, newGroup)
        .then(() => {
          setIsSubmitting(false)
          toggle()
        })
        .catch(() => {
          setIsSubmitting(false)
        })

      const updatedGroups = data?.map((group: any) =>
        group.id === id ? newGroup : group
      )

      mutate(updatedGroups, false)
    },
    [data, mutate, setIsSubmitting, toggle]
  )

  const removeButtonHandler = useCallback(
    (id: string) => {
      api
        .delete(`${entityUrl}/${id}`)
        .then(() => setGroupId(''))
        .catch(() => {})

      const updatedGroups = data?.filter((group: any) => group.id !== id)

      mutate(updatedGroups, false)
    },
    [data, mutate, setGroupId]
  )

  const logout = () => {
    api
      .post('/api/auth/signout')
      .then(() => {
        history.push('/')
      })
      .catch(() => {
        history.push('/')
      })
  }

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
          <div>
            <Button type="submit" onClick={toggle} isPrimaryColor>
              {groupId ? 'Alterar Grupo' : 'Adicionar Grupo'}
            </Button>
            <Button type="button" onClick={logout} isPrimaryColor>
              Sair
            </Button>
          </div>
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
