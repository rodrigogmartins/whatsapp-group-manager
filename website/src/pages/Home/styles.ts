import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  box-sizing: border-box;
  background-color: #282a36;
  color: #f8f8f2;
`
export const Banner = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #282a36;

  background: rgb(62, 255, 111);
  background: radial-gradient(
    circle,
    rgba(62, 255, 111, 1) 0%,
    rgba(80, 250, 123, 1) 100%
  );
`

export const ContainerTexto = styled.div`
  width: 80%;
  max-width: 650px;

  h1 {
    font-size: 30px;
    margin-bottom: 45px;
  }

  > p {
    margin: 10px 0;
    padding: 10px 0;
    font-size: 22px;
    font-weight: bold;
    color: #282a36;
  }
`

export const FormContainer = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`
