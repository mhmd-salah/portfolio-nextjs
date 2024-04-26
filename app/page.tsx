import Image from "next/image";
import Link from "next/link";
export default function Home () {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={ { backgroundImage: "url(/main-bg.webp)" } }>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make Any Thing Possible With
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 block">
              Web Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea et quas accusamus.
          </p>
          <div className="hidden flex-col md:flex-row  md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px] hover:-translate-y-1 transition"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px] "
            >
              <div className={ "absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20 " }
              />
              Contact me
            </Link>
          </div>
        </div>
      </div>
      {/* 2 */ }
      <div className="absolute bottom-10 z-[20] right-5  flex-col  md:hidden">
        <Link
          href={ "/my-skills" }
          className="group rounded-[20px] bg-sky-400 hover:bg-sky-500 transition px-5 py-3 text-lg text-white max-w-[200px]"
        >Learn more</Link>
        <Link
          href={ "/my-projects" }
          className="group  rounded-[20px] bg-sky-400 hover:bg-sky-500 transition px-5 py-3 text-lg text-white max-w-[200px]"
        >
          my projects</Link>
        <Link
          href={ "/contact-me" }
          className="group rounded-[20px] bg-sky-400 hover:bg-sky-500 transition px-5 py-3 text-lg text-white max-w-[200px]"
        >
          contact me
        </Link>
      </div>
      <div className="absolute bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={ 300 }
          width={ 300 }
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={ 480 } height={ 480 } />
      </div>
      <div className="absolute bottom-0 z-[5] w-full h-auto ">
        <Image
          src={ "/trees.webp" }
          alt="trees"
          width={ 2000 }
          height={ 2000 }
          className="w-full h-full"
        />
      </div>
      <Image
        src="/stars.png"
        alt="stars"
        height={ 300 }
        width={ 300 }
        className="absolute top-10 left-0 z-[10] "
      />
    </main>
  );
}