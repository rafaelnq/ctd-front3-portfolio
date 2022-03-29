import styled from 'styled-components'
import {atSmall} from '../styles/breakpoints'
import {useProjects} from '../hooks/use-projects'
import {Project} from './project'

const Wrapper = styled.section`
  padding-block: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${atSmall} {
    align-items: center;
  }
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

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 80px 32px;
  list-style: none;
`

function Projects() {
  const projects = useProjects()

  return (
    <Wrapper id="projects">
      <Title>Projetos.</Title>
      <ProjectList>
        {projects.map(project => (
          <Project
            key={project.id}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            url={project.url}
            reverse={project.id % 2 === 0}
          />
        ))}
      </ProjectList>
    </Wrapper>
  )
}

export {Projects}
