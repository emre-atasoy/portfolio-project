function Hero({ data }) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-x-50 px-12 py-16">
      <div className="max-w-lg text-left">
        <div className="flex items-center mb-4 gap-3 w-60">
          <div className="flex-1 h-px bg-[#4d44bd]"></div>
          <span className="text-xl text-[#a6a4d1] font-medium">{data.name}</span>
        </div>

        <h1 className="text-5xl font-bold text-Secondary leading-tight mb-4">{data.intro}</h1>
        <p className="text-secondary mb-9">{data.greeting}</p>

        <div className="flex gap-4">
          <button style={{backgroundColor:"var(--color-textBack)",color:"var(--color-textColor)"}} className="px-6 py-2 text-primary font-medium rounded-md shadow hover:bg-opacity-80">
            Hire me
          </button>

          {data.socials.map((social, index) => (
            <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" style={{backgroundColor:"var(--color-github-bg)"}} className="flex items-center gap-2 px-5 py-2 border border-[#7562c0] rounded-md text-gray hover:bg-opacity-10">
              <img src={social.logo} alt={social.alt} className="w-6 h-6 -ml-2" />
              {social.alt}
            </a>
          ))}
        </div>
      </div>

      <div>
        <img src={data.profileImage} alt="profile" className="w-130 h-auto rounded-2xl shadow-lg object-cover" />
      </div>
    </section>
  );
}

export default Hero;
