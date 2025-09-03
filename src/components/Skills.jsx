function Skills({ data }) {
  return (
    <section className="py-12 px-5">
      <h2 className="pl-3 text-5xl font-semibold mb-8 text-primary">{data.title}</h2>

      <ul className="pl-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {data.skills.map((skill, index) => (
          <li key={index} className="p-2">
            <h3 className="text-3xl font-semibold mb-2 text-[#4d44bd]">{skill.name}</h3>
            <p className="text-secondary text-sm max-w-xs">{data.text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-15 h-px w-320 bg-[#4d44bd]"></div>
    </section>
  );
}

export default Skills;
