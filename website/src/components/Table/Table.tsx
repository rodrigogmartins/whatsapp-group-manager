import React from 'react'
import { Container, Th, Button } from './styles'

interface ITable {
  data: any
  rowClickHandler(event: any): void
  removeButtonHandler(id: any): void
}

const Table: React.FC<ITable> = ({
  data,
  rowClickHandler,
  removeButtonHandler
}) => {
  if (!data) {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <Th>Grupo</Th>
              <Th>Url</Th>
              <Th>Ações</Th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </Container>
    )
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <Th>Descrição</Th>
            <Th>Slug</Th>
            <Th>Excluir</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any) => (
            <tr
              key={item.id}
              onClick={(e) => {
                rowClickHandler(item.id)
              }}
            >
              <Th>{item.description}</Th>
              <Th>{item.slug}</Th>
              <Th>
                <Button onClick={() => removeButtonHandler(item.id)}>X</Button>
              </Th>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
