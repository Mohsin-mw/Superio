import SubHeading from "./SubHeading";
import Link from "next/link";
import { GrMoney } from "react-icons/gr";
import { GrAnnounce } from "react-icons/gr";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaDev } from "react-icons/fa";
export default function JobCategory() {
  return (
    <section className="lg:py-8">
      <div className="container mx-auto px-4">
        <SubHeading>
          <h2 className="lg:text-3xl text-heading font-semibold">
            Popular Job Categories
          </h2>
          <p className="text-gray-400 mt-4">2024 jobs live - X added Today</p>
        </SubHeading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-3">
          <div className="group py-4  px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <GrMoney className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Accounting / Finance</Link>
                  </h4>
                  <p className="text-text text-sm">(2 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group py-4  px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow ">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <GrAnnounce className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Marketing</Link>
                  </h4>
                  <p className="text-text text-sm">(86 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <SiMaterialdesignicons className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Design</Link>
                  </h4>
                  <p className="text-text text-sm">(43 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <FaDev className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Development</Link>
                  </h4>
                  <p className="text-text text-sm">(12 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <FaDev className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Human Resource</Link>
                  </h4>
                  <p className="text-text text-sm">(55 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <FaDev className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Automotive Jobs </Link>
                  </h4>
                  <p className="text-text text-sm">(2 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <FaDev className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Customer Service</Link>
                  </h4>
                  <p className="text-text text-sm">(2 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <FaDev className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Health and Care</Link>
                  </h4>
                  <p className="text-text text-sm">(25 open positions)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="group  py-4 px-3 xl:mb-8 mb-8 border rounded-sm hover:shadow">
            <div className="p-5">
              <div className="flex items-start gap-4">
                <span className="bg-purple-300 text-purple-500 py-4 px-4 rounded group-hover:bg-purple-500 group-hover:text-white duration-300 ease-linear">
                  <FaDev className="text-xl" />
                </span>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-heading font-semibold text-[1.125rem]">
                    <Link href={"#"}>Project Management</Link>
                  </h4>
                  <p className="text-text text-sm">(92 open positions)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
