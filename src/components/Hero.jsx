function Hero({ data }) {
  return (
   <section className="flex flex-col md:flex-row items-center gap-x-50 px-12 py-16 ">
      
      {/* Sol taraf - Yazılar */}
      <div className="max-w-lg text-left">
       <div className="flex items-center mb-4 gap-3 w-60">
  <div className="flex-1 h-px bg-[#3730A3]"></div>
  <span className="text-xl text-[#3730A3] font-medium ">{data.name}</span>
</div>
        {/* Büyük Başlık */}
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
          
          {data.intro}
        </h1>

        {/* Açıklama */}
        <p className="text-gray-600 mb-9">
          {data.greeting}
        </p>

        {/* Butonlar */}
        <div className="flex gap-4">
          <button className="px-6 py-2 bg-[#3730A3] text-white font-medium rounded-md shadow hover:bg-indigo-800">
            Hire me
          </button>

          {data.socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#3730A3] rounded-md text-[#3730A3] hover:bg-purple-50"
            >
              <img src={social.logo} alt={social.alt}  className="w-6 h-6 -ml-2" />
              {social.alt}
            </a>
          ))}
        </div>
      </div>

      {/* Sağ taraf - Görsel */}
      <div >
        <img
          src={data.profileImage}
          alt="profile"
          className="w-130 h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
