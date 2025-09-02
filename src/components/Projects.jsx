function Projects({ data }) {
  return (
    <section className="py-12 px-4 max-w-7xl ">
      <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {data.projects.map((project, index) => (
          <li 
            key={index} 
            className="p-4 flex flex-col "
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-80 h-48 object-cover rounded-md mb-6"
            />
            <h3 className="text-3xl font-semibold mb-2 text-[#3730A3]">{project.name}</h3>
            <p className="text-gray-400 mb-2 ">{project.description}</p>

            {/* app, app1, app2 değerleri */}
            <div className="flex space-x-2 mt-2">
              <span className="px-4  py-2 border font-semibold border-[#3730A3] rounded-md text-[#3730A3] hover:bg-purple-50">{data.app}</span>
              <span className="px-4  py-2 border font-semibold border-[#3730A3] rounded-md text-[#3730A3] hover:bg-purple-50">{data.app1}</span>
              <span className="px-4  py-2 border font-semibold border-[#3730A3] rounded-md text-[#3730A3] hover:bg-purple-50">{data.app2}</span>
            </div>

            {/* Opsiyonel: Github ve Live Link */}
            <div className="flex space-x-70 mt-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600  underline">
                Github
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">
                Live
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
