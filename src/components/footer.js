import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa'

const Wrapper = styled.footer`
  padding-block: 32px;
  border-top: 2px solid #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;

  a {
    color: inherit;

    &:hover {
      svg {
        transform: scale(1.25);
      }
    }

    svg {
      width: 24px;
      height: 24px;
      transition: 0.3s;
    }
  }
`

const socialLinks = [
  {
    id: 1,
    href: '//github.com/rafaelnq',
    icon: <FaGithub />
  },
  {
    id: 2,
    href: '//www.linkedin.com/in/rafaelnq',
    icon: <FaLinkedin />
  },
  {
    id: 3,
    href: 'mailto:rafaelnobrequeiroz@gmail.com',
    icon: <FaEnvelope />
  }
]

function Footer() {
  return (
    <Wrapper>
      <p>© Rafael Nobre</p>
      <SocialLinks>
        {socialLinks.map(socialLink => (
          <a key={socialLink.id} href={socialLink.href} target="_blank" rel="noreferrer">
            {socialLink.icon}
          </a>
        ))}
      </SocialLinks>
    </Wrapper>
  )
}

export {Footer}
