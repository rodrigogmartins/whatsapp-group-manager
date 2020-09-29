import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background-color: #282a36;
  color: #f8f8f2;

  button {
    padding: 15px 20px;
  }
`

export const ContainerLinks = styled.div`
  margin-top: 120px;
  width: 80%;
  max-width: 1050px;
`
export const TableHeader = styled.div`
  display: flex;
  max-width: 1050px;
  justify-content: space-between;
  align-items: center;
`
