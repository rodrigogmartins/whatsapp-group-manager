import styled from 'styled-components'

export const Container = styled.form`
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ErrorMessage = styled.h3`
  color: #ff5555;
`

interface IButton {
  isPrimaryColor?: boolean
}

export const Button = styled.button<IButton>`
  padding: 15px 0;
  margin: 5px 0;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  background-color: ${({ isPrimaryColor }) =>
    isPrimaryColor ? '#50fa7b' : '#44475a'}}

  color: ${({ isPrimaryColor }) => (isPrimaryColor ? '#343434' : '#f8f8f2')}}
  font-size: 20px;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
  }
`
