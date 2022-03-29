import styled from 'styled-components'

const Wrapper = styled.header`
  padding-top: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 38px;

    a {
      color: #ffffff;
      text-decoration: none;
    }
  }
  
  nav {
    display: flex;
    gap: 32px;
    margin-left: auto;

    a {
      font-size: 22px;
      color: #ffffff;
      text-decoration: none;
      cursor: pointer;
    }
  }
`

function Header() {
  function scrollToSection(sectionId) {
    const projectsSection = document.getElementById(sectionId);
    window.scroll({
      top: projectsSection.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Wrapper>
       <h1>
        <a href="/">
          {'<RN />'}
        </a>
      </h1>
      <nav>
        <a onClick={() => scrollToSection('projects')}>Projetos</a>
        <a onClick={() => scrollToSection('contact')}>Contato</a>
      </nav>
    </Wrapper>
  )
}

export {Header}
