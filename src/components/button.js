import styled from 'styled-components'

const Wrapper = styled.button`
  padding: 8px 16px;
  background-color: transparent;;
  border: 1px solid #ffffff;
  outline: none;
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
`

function Button({children, ...props}) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

export {Button}
