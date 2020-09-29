import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 700;
  width: inherit;
  outline: 0;
`

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 500;
`

export const StyledModal = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: auto;
  border-radius: 8px;
  background-color: #44475a;
  padding: 20px;
`
export const Header = styled.div`
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;
`
export const HeaderText = styled.div`
  color: #f8f8f4;
  font-size: 1.2rem;
  font-weight: bold;
  align-self: center;
  padding-left: 5px;
`

export const CloseButton = styled.button`
  color: #50fa7b;
  font-weight: bold;
  font-size: 1.2rem;
  border: none;
  border-radius: 3px;
  margin-left: 0.5rem;
  background: none;

  :hover {
    cursor: pointer;
  }
`
export const Content = styled.div`
  padding: 10px;
  max-height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 430px;

  button {
    padding: 15px 20px;
  }
`
