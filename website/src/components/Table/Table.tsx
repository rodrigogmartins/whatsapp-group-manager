import React from 'react'
import { Container, Th, Button } from './styles'

interface ITable {
  data: any
  rowClickHandler(event: any): void
  showButtonHandler(id: any): void
  removeButtonHandler(id: any): void
}

const Table: React.FC<ITable> = ({
  data,
  rowClickHandler,
  showButtonHandler,
  removeButtonHandler
}) => {
  if (!data) {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <Th>Descrição</Th>
              <Th>Slug</Th>
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
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: any, index: any) => (
            <tr
              key={item.id || new Date().getTime()}
              id={item.id}
              onClick={(e) => {
                const target = e.target as HTMLTextAreaElement

                if (target.tagName !== 'BUTTON') {
                  rowClickHandler(item.id)
                }
              }}
            >
              <Th>{item.name}</Th>
              <Th>{item.urlSlug}</Th>
              <Th>
                <Button
                  className="showLink"
                  onClick={() => showButtonHandler(item.id)}
                >
                  Ver
                </Button>
                <Button onClick={() => removeButtonHandler(item.id)}>
                  Excluir
                </Button>
              </Th>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default Table
