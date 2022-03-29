import styled from 'styled-components'
import avatarImage from '../assets/images/avatar.gif'
import { Button } from './button'

const Wrapper = styled.section`
  padding-top: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-top: 32px;
  }
`

const Title = styled.p`
  font-size: 26px;
  font-weight: 700;
  max-width: 640px;
  margin-bottom: 16px;
`

const Paragraph = styled.p`
  font-size: 18px;
  max-width: 780px;
  & + & {
    margin-top: 16px;
  }
`

const Avatar = styled.img`
  display: block;
  width: 264px;
  height: 264px;
  object-fit: cover;
  border-radius: 50%;
`

function Banner() {
  function scrollToContact() {
    const contactSection = document.getElementById('contact');
    window.scroll({
      top: contactSection.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Wrapper>
      <div>
        <Title>
          Olá ✋ Sou o Rafael
        </Title>
        <Paragraph>
          Seu próximo desenvolvedor web
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
          atque, amet corporis recusandae soluta sunt odio obcaecati hic ex
          facere?
        </Paragraph>
        <Button onClick={scrollToContact}>Entrar em contato</Button>
      </div>
      <div>
        <Avatar src={avatarImage} alt="Avatar" />
      </div>
    </Wrapper>
  )
}

export {Banner}
