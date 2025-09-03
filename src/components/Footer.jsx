function Footer({ data }) {
  return (
    <footer
      style={{ backgroundColor: "var(--color-footerBack)" }}
      className="w-full py-12 text-base"
    >
      <div className="max-w-9/12 mx-auto px-5 space-y-15">
        <h1 className="text-3xl font-medium text-primary">{data.title}</h1>

        <div className="flex justify-between items-center">
          <span style={{color:"var(--color-forEmail)"}} className="underline">👉<a href={`mailto:${data.email}`}>{data.email}</a></span>

          <div className="flex space-x-8">
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                style={{
                color:  index === 0 ? "gray" :  index === 1 ? "green" : index === 2 ? "#40E0D0" : "black"
}}  
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
