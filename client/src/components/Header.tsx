import Image from "next/image";
import svgLogo from "../../public/assets/images/Logo.svg";
import Link from "next/link";
export default function Header() {
  return (
    <header className="w-full shadow">
      <nav className="container mx-auto flex items-center justify-between py-5">
        <div className="right flex items-center gap-2">
          <Link href={"/"} className="flex items-center">
            <Image
              src={svgLogo}
              width={30}
              height={30}
              alt="Seeker"
              priority={false}
            />
            <span className="font-bold text-2xl mx-2">Seeker</span>
          </Link>
          <ul className="flex items-center gap-2">
            <li className="px-4 text-heading">
              <Link href={"/"} className="text-base hover:text-primary">
                Home
              </Link>
            </li>
            <li className="px-4 text-heading">
              <Link href={"/"} className="text-base hover:text-primary">
                Find jobs
              </Link>
            </li>
            <li className="px-4 text-heading">
              <Link href={"/"} className="text-base hover:text-primary">
                Employers
              </Link>
            </li>
            <li className="px-4 text-heading">
              <Link href={"/"} className="text-base hover:text-primary">
                Candidates
              </Link>
            </li>
          </ul>
        </div>
        <div className="left">
          <ul className="flex items-center">
            <li className="px-4 text-primary">
              <Link href={""}>Upload your Cv</Link>
            </li>
            <li className="bg-purple-300  lg:text-base xl:text-base px-5 py-2 xl:px-6 xl:py-3 rounded text-primary font-medium me-2 hover:bg-primary hover:text-white duration-300 ease-out">
              <Link href={"/auto/login"} className="font-medium">
                Login / Reigster
              </Link>
            </li>
            <li className=" bg-purple-500 lg:text-base xl:text-base px-5 py-2 xl:px-6 xl:py-3 rounded text-white font-medium hover:bg-purple-800">
              <Link href={"/job-post"} className="">
                Job Post
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
