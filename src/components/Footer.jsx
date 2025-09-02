function Footer({ data }) {
  return (
    <footer className="py-12 px-5">
      <div className="max-w-5xl space-y-15">
        <h1 className="text-3xl font-medium max-w-90">{data.title}</h1>

        <div className="flex justify-between items-center">
          {/* Sol tarafta email */}
          <span className="text-red-700 underline">👉{data.email}</span>

          {/* Sağ tarafta linkler */}
          <div className="flex space-x-8">
  {data.links.map((link, index) => (
    <a
      key={index}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-indigo-400 transition-colors"
    >
      {link.name}
    </a>
  ))}</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
