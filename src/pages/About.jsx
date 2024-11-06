const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Aztro
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              nix
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Navigating the dynamic and sometimes intimidating realm of technology
        can be a challenge. Our objective is to offer a tailored experience that
        caters to the unique needs of our customers. Aztronix brings forth
        considerable expertise in IoT and embedded electronic design services,
        spanning diverse applications, industries, and technologies. Our team of
        professionals is dedicated to bringing your design specifications to
        life. Your satisfaction with our work is our unwavering guarantee.
      </p>
    </>
  );
};
export default About;
