function Profile({ data, isEnglish }) {
  return (
    <section className="py-12 px-4">
      <h1 className="text-5xl mb-10 font-semibold">
        {isEnglish ? "Profile" : "Profil"}
      </h1>

      <div className="grid md:grid-cols-2 gap-1 ">
        {/* Sol taraf: temel bilgiler */}
        <div>
          <h2 className="text-3xl font-semibold text-[#3730A3] mb-6">{data.title}</h2>
          <dl className="space-y-4">
            <div className="flex gap-4">
              <dt className="font-semibold w-40">
                {isEnglish ? "Date of Birth" : "Doğum Tarihi"}
              </dt>
              <dd>{data.birthDate}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-semibold w-40">
                {isEnglish ? "City of Residence" : "İkamet Şehri"}
              </dt>
              <dd>{data.city}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-semibold w-40">
                {isEnglish ? "Education" : "Eğitim Durumu"}
              </dt>
              <dd>{data.education}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="font-semibold w-40">
                {isEnglish ? "Preferred Role" : "Tercih Ettiği Rol"}
              </dt>
              <dd>{data.choseRol}</dd>
            </div>
          </dl>
        </div>

        {/* Sağ taraf: About Me */}
        <div className="">
          <h1 className="text-3xl font-semibold mb-3 text-[#3730A3] ">
            {data.title2}
          </h1>
          <p className="text-gray-600 max-w-xl">{data.aboutMe}</p>
          <br />
          <p className="text-gray-600 max-w-xl">{data.aboutMe1}</p>
        </div>
      </div>
      <div className="mt-15 h-px w-320 bg-[#3730A3]"></div>
    </section>
  );
}

export default Profile;
