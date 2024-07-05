interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Active Directory Mock Environments',
    description: `Design and implement a basic Active Directory (AD) configuration that simulates an enterprise environment. 
    Demonstrate, test, and train on various AD functionalities.`,
    imgSrc: '/static/images/ad.png',
    href: '',
  },
  {
    title: 'Western Digital - VICE SSD Validation',
    description: `Responsive web-application for Western Digital Corporation, facilitating firmware
    testing and validation on various operating systems using Angular, Typescript, NodeJS, and Azure.`,
    imgSrc: '/static/images/WDC.png',
    href: 'https://ceias.nau.edu/capstone/projects/CS/2022/ViceGrips/index.html',
  },
  {
    title: 'Forensics Malware Analysis',
    description: `Description Coming Soon ...`,
    imgSrc: '',
    href: '',
  },

  {
    title: 'OS Simulator',
    description: `Operating System simulator project demonstrating scheudling algorithms such as FCFS, RR, SJF, and SRTF.`,
    imgSrc: '',
    href: '/blog/OSSIM',
  },
  {
    title: 'Neve Portfolio',
    description: `Description Coming Soon ...`,
    imgSrc: '',
    href: '',
  },
  {
    title: 'Local Knowledge Base',
    description: `Description Coming Soon ...`,
    imgSrc: '',
    href: '',
  },
]

export default projectsData
