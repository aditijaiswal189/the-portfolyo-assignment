function Hero() {
  return (
    <div className="w-[80%] m-auto flex h-screen justify-between items-center  p-10 pb-[80px]">
      <div>
        <div className=" py-6 w-[80%] relative ">
          <video
            className="object-cover w-[100%] py-5 pb-10"
            src="videos/video1.mp4"
            loop=""
            autoPlay=""
            playsInline
            controls
          >
            <source type="video1.mp4" />
          </video>
          <h1 className="text-[90px] font-extrabold py-10 leading-tight absolute top-12 bg-slate-50 mix-blend-screen z-10">
            Software Developer & Designer
          </h1>
        </div>
      </div>
      <div className="rounded-2xl w-[30%] h-auto">
        <div className="blob"></div>
      </div>
    </div>
  );
}

export default Hero;
