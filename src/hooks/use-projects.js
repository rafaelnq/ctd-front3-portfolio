import project1Image from '../assets/images/project-1.jpeg'
import project2Image from '../assets/images/project-2.jpg'
import project3Image from '../assets/images/project-3.png'
import project4Image from '../assets/images/project-4.png'

const projects = [
  {
    id: 1,
    imageUrl: project1Image,
    title: 'Facebook',
    description: 'Maior rede social de todo o mundo, contando com 2 bilhões de usuários ativos.',
    url: '//github.com/rafaelnq'
  },
  {
    id: 2,
    imageUrl: project2Image,
    title: 'Airbnb',
    description:
      'Mercado online de hospedagem, principalmente casas de família para aluguel por temporada e atividades de turismo.',
    url: '//github.com/rafaelnq'
  },
  {
    id: 3,
    imageUrl: project3Image,
    title: 'Twitter',
    description: 'Rede social que permite aos usuários enviar e receber atualizações pessoais de outros contatos, por meio do website do serviço, por SMS e por softwares específicos de gerenciamento.',
    url: '//github.com/rafaelnq'
  },
  {
    id: 4,
    imageUrl: project4Image,
    title: 'Gmail',
    description:
      'Serviço gratuito de webmail. Por padrão, o Gmail está configurado para usar o HTTPS, um protocolo seguro que fornece comunicações autenticadas e criptografadas.',
    url: '//github.com/rafaelnq'
  }
]

function useProjects() {
  return projects
}

export {useProjects}
