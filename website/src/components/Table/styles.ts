import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > table {
    margin-top: 50px;
    width: 100%;
    background-color: #44475a;
    color: #f8f8f2;
  }

  > table > thead {
    border: solid;
    border-color: white;
    border-width: 3px;
  }

  > table tr {
    transition-duration: 500ms;
  }

  > table > tbody tr:hover {
    background-color: #50fa7b;
    color: #282a36;
    transform: scale(1.1);

    button {
      background-color: #44475a;
      color: #f8f8f2;
    }
  }
`

export const Th = styled.th`
  padding: 20px 10px;
  border: none;
`

export const Button = styled.button`
  margin: 0 5px;
  position: relative;
  overflow: hidden;
  transition-duration: 500ms;
  transform: translate3d(0, 0, 0);

  background-color: #bd93f9;

  color: #343434;
  font-weight: bold;
  text-align: center;

  border: none;
  border-radius: 5px;

  &:hover {
    background-color: #44475a;
  }

  &:focus {
    outline: none;
  }

  &:after {
    content: '';
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
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`
