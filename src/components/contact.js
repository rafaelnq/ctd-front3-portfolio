import styled from 'styled-components'
import {atSmall} from '../styles/breakpoints'
import {Button} from './button'

const Wrapper = styled.section`
  padding-block: 64px;
`

const Title = styled.h2`
  display: inline-block;
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
  padding-right: 12px;
  padding-bottom: 16px;
  margin-bottom: 90px;
  border-bottom: 3px solid #ffffff;

  ${atSmall} {
    margin-bottom: 32px;
  }
`

const ContactForm = styled.form`
  width: 100%;
  max-width: 500px;

  label {
    display: block;
    margin-bottom: 16px;

    > span {
      display: block;
      font-size: 12px;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
  }
  
  input, textarea {
    width: 100%;
    padding: 8px 16px;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: inherit;
  }

  textarea {
    resize: none;
    min-height: 100px;
  }
`

function Contact() {
  return (
    <Wrapper id="contact">
      <Title>Contato.</Title>
      <ContactForm>
        <label>
          <span>Nome</span>
          <input type="text" />
        </label>
        <label>
          <span>E-mail</span>
          <input type="email" />
        </label>
        <label>
          <span>Assunto</span>
          <input type="text" />
        </label>
        <label>
          <span>Mensagem</span>
          <textarea />
        </label>
        <Button>Enviar</Button>
      </ContactForm>
    </Wrapper>
  )
}

export {Contact}
