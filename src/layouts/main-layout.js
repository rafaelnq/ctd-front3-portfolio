import styled from 'styled-components'
import {Header} from '../components/header'
import {Footer} from '../components/footer'

const Wrapper = styled.div`
  max-width: 1183px;
  margin-inline: auto;
  padding-inline: 24px;
`

function MainLayout({children}) {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  )
}

export {MainLayout}
