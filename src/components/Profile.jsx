function Profile({ data, isEnglish }) {
  return (
    <section className="py-12 px-4">
      <h1 className="text-5xl mb-10 font-semibold text-primary">
        {isEnglish ? "Profile" : "Profil"}
      </h1>

      <div className="grid md:grid-cols-2 gap-1">
        <div>
          <h2 className="text-3xl font-semibold text-[#4d44bd] mb-6">{data.title}</h2>
          <dl className="space-y-4 text-base">
            <div className="flex gap-4 text-secondary">
              <dt className=" font-semibold w-40">{isEnglish ? "Date of Birth" : "Doğum Tarihi"}</dt>
              <dd>{data.birthDate}</dd>
            </div>
            <div className="flex gap-4 text-secondary">
              <dt className="font-semibold w-40">{isEnglish ? "City" : "Şehir"}</dt>
              <dd>{data.city}</dd>
            </div>
            <div className="flex gap-4 text-secondary">
              <dt className="font-semibold w-40">{isEnglish ? "Education" : "Eğitim"}</dt>
              <dd>{data.education}</dd>
            </div>
            <div className="flex gap-4 text-secondary">
              <dt className="font-semibold w-40">{isEnglish ? "Role" : "Rol"}</dt>
              <dd>{data.choseRol}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mb-3 text-[#4d44bd]">{data.title2}</h1>
          <p className="text-secondary max-w-xl">{data.aboutMe}</p>
          <br />
          <p className="text-secondary max-w-xl">{data.aboutMe1}</p>
        </div>
      </div>
      <div className="mt-15 h-px w-320 bg-[#4d44bd]"></div>
    </section>
  );
}

export default Profile;
