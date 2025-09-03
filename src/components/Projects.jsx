function Projects({ data }) {
  return (
    <section className="py-12 px-4 max-w-7xl">
      <h1 className="text-5xl font-bold mb-8 text-primary">{data.title}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {data.projects.map((project, index) => (
          <li key={index}  className="p-4 flex flex-col rounded-md ">
            <img src={project.image} alt={project.name} className="w-80 h-48 object-cover rounded-md mb-6" />
            <h3 className="text-3xl font-semibold mb-2 text-[#4d44bd]">{project.name}</h3>
            <p className="text-secondary mb-2">{project.description}</p>

            <div className="flex space-x-2 mt-2">
              <span style={{color:"var(--color-profile-bg)"}} className="px-4 py-2 border border-[#4d44bd] rounded-md ">{data.app}</span>
              <span style={{color:"var(--color-profile-bg)"}} className="px-4 py-2 border border-[#4d44bd] rounded-md ">{data.app1}</span>
              <span style={{color:"var(--color-profile-bg)"}} className="px-4 py-2 border border-[#4d44bd] rounded-md ">{data.app2}</span>
            </div>

            <div className="flex space-x-70 mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{color:"var(--color-profile-bg)"}} className="underline">Github</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer"  style={{color:"var(--color-profile-bg)"}} className="underline">Live</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
