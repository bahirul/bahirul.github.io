const projectsContainer = document.getElementById('projects')

const projects = [
    {
        name: "Expanding CSS Card",
        link: "/expanded-css-card"
    },
    {
        name: "Typing Text JS",
        link: "/typing-text"
    },
    {
        name: "Section Divider",
        link: "/section-divider"
    }
]

window.onload = () => {
    projects.forEach((project) => {
        const div = document.createElement('div')

        const link = document.createElement('a')
        link.className = 'project__link'
        link.href = project.link

        const text = document.createTextNode(project.name)

        // create link
        link.appendChild(text)
        div.appendChild(link)

        projectsContainer.appendChild(div)
    })
}