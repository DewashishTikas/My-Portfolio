import Earth from './Earth';

export default function HomePage() {
  return (
    <>
      <div className="relative w-full " style={{ minHeight: 'calc(100vh - 92px)' }}>
        <div className="absolute inset-0">
          <Earth />
        </div>

        <div className="intro relative z-10 top-36  text-center  h-full  text-white">
          <h1 className="md:text-5xl text-2xl font-bold ">Hi, I am Dewashish Tikas</h1>
          <p className="md:text-3xl text-lg mt-4">A Full Stack Web Developer</p>
        </div>
      </div>
      </>
  );
}
