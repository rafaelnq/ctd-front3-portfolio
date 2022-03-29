import styled from 'styled-components'
import { atSmall } from '../styles/breakpoints'

const Wrapper = styled.li`
  a {
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    gap: 36px;
    cursor: pointer;
    transition: opacity 0.2s;
    color: #ffffff;
    text-decoration: none;
    
    &:hover {
      opacity: 0.8;
    }

    ${atSmall} {
      flex-direction: column;
      gap: 8px;
    }
  }
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  max-width: 553px;
  max-height: 342px;
  object-fit: cover;
`

const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
  margin-top: 12px;
  margin-bottom: 24px;
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  max-width: 540px;
`

function Project({imageUrl, title, description, url, reverse}) {
  return (
    <Wrapper reverse={reverse}>
      <a href={url} target="_blank" rel="noreferrer">
        <Image src={imageUrl} alt={title} />
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
      </a>
    </Wrapper>
  )
}

export {Project}
