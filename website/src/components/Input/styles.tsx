import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-width: 350px;
  margin: 20px 0;

  &:focus-within label {
    transform: translate(0, 12px) scale(0.75);
  }
`

export const Input = styled.input`
  width: 100%;
  height: 65px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: none;
  border-radius: 4px;
  background: #f8f8f2;
  font-size: 16px;
  box-sizing: border-box;
`

interface ILabel {
  isActive?: boolean
}

export const Label = styled.label<ILabel>`
  font-size: 16px;
  padding: 0 12px;
  color: #44475a;
  pointer-events: none;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  font-weight: bold;
  transform-origin: top left;
  transition: all 0.2s ease-out;

  ${({ isActive }) => isActive && `transform: translate(0, 12px) scale(0.75)`}
`
