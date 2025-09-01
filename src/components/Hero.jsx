function Hero({ data }) {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-50">
      {/* Profil Resmi */}
      <img 
        src={data.profileImage} 
        alt="profile" 
        className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-6 object-cover"
      />

      {/* Selam ve tanıtım */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{data.greeting}</h1>
      <h2 className="text-xl text-gray-600 mb-6">{data.intro}</h2>

      {/* Sosyal Medya Linkleri */}
     <div className="flex space-x-4">
  {/* Hire Me Kutusu */}
  <div className="bg-white border-2 border-[#3730A3] p-4 rounded-lg shadow-md">
  <a 
    href="https://github.com"   
    target="_blank"              
    rel="noopener noreferrer"  
    className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-indigo-600 transition-colors"
  >
    Hire me
  </a>
</div>

  {/* Sosyal Medya Kutuları */}
  {data.socials.map((social, index) => (
    <div 
      key={index} 
      className="bg-white border-2 border-[#3730A3] p-4  rounded-lg shadow-md transition-transform transform hover:scale-110"
    >
      <a 
        href={social.link} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={social.logo} 
          alt={social.alt} 
          className="w-8 h-8"
        />
      </a>
    </div>
  ))}
</div>

    </section>
  );
}

export default Hero;
