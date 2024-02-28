import { projectLogos } from "@/constants";
import Link from "next/link";

export default async function Projects() {
  return (
    <>
      <div className="bg-zinc-100 min-h-full w-full py-8 flex flex-col justify-between font-light">
        <div>
          <div className="mx-auto text-center max-w-4xl text-xl lg:text-3xl font-sans tracking-wider">
            Partnering with projects to build the first community powered research platform
          </div>
          <div className="mx-auto w-4/5 max-w-2xl h-[1px] bg-gray my-8 px-4"></div>
        </div>
        <div className="max-w-5xl mx-auto space-y-8 flex-col p-8 lg:p-0">
          <div className="grid grid-cols-7 gap-4 max-w-3xl">
            {projectLogos.map((project, index) => (
              <div key={index} className="flex justify-center">
                <img src={project.logo} alt={project.label} className="h-9 md:h-16 lg:h-24" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-8 px-8 md:px-0">
            <div className="text-lg lg:text-2xl font-medium">
              <div>Get Involved.</div>
              <div>
                Reach out to be featured in an <span className="text-blue">Ecosystem Issue</span>.
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link
                className="uppercase bg-lightBlue text-blue text-center px-8 py-2 rounded-xl tracking-wider shadow-lg hover:cursor-pointer"
                target="_blank"
                href={process.env.PROJECT_FORM as string}
                passHref={true}
              >
                <div className="text-sm lg:text-lg font-semibold">Click Here</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
