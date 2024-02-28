import { readers } from "@/constants";
import { getContent } from "@/lib/content";
import Image from "next/image";

export default async function Community() {
  const { teamMembers } = await getContent();

  return (
    <div className="pb-4 lg:pb-8">
      <div className="bg-zinc-100 w-full py-8 flex flex-col justify-between font-light px-4 lg:px-16">
        {/* trusted by */}
        <div>
          <div className="w-full text-left text-xl font-sans tracking-widest">Trusted by Readers from</div>
          <div className="py-10 grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-12 lg:gap-4">
            {readers.map((sectors) => {
              const organizations = sectors.organizations;
              return (
                <div key={sectors.label} className="flex  flex-col text-center space-y-2">
                  <div className="text-lg text-blue font-sans">{sectors.label}</div>
                  {organizations.map((org) => {
                    return <img key={org.name} src={org.logo} alt={org.name} className="w-24 h-16 mx-auto object-scale-down" />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {/* team members */}
        <div className="">
          <div className="mx-auto w-full h-[1px] bg-gray mt-8 mb-4"></div>
          <div className="w-full text-left text-xl font-sans tracking-widest">Core Contributors</div>
          <div className="py-10 grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => {
              return (
                <div key={member.name} className="relative flex flex-col jusity-center text-center space-y-6">
                  <img src={member.displayPicture} alt={member.name} className="rounded-full h-24 w-24 lg:h-32 lg:w-32 mx-auto" />
                  <div className="flex flex-col">
                    <div className="text-lg lg:text-xl text-blue font-sans flex justify-center">
                      {member.name}
                      <a className="hover:cursor-pointer my-auto ml-2" target="_blank" href={`https://x.com/${member.x}`}>
                        <Image src={"/assets/socials/x.webp"} alt={"x link"} width={15} height={15} />
                      </a>
                    </div>
                    <div className="text-md">{member.position}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* get in touch */}
        <div className="pt-8 text-md lg:text-lg flex justify-center font-semibold">Get in touch: team@ournetwork.xyz</div>
      </div>
    </div>
  );
}
