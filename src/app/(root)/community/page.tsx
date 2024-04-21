import { XSocial } from "@/components/shared/XSocial";
import { readers, testimonials } from "@/constants";
import { getContent } from "@/lib/content";

export default async function Community() {
  const { teamMembers } = await getContent();

  const Testimonial = ({ name, company, comment, image, link }) => {
    return (
      <div key={name} className="flex flex-col justify-center space-y-2 text-lg py-6 mt-2">
        <p className="font-medium font-sans tracking-widest md:pr-24">{`“${comment}“`}</p>
        <div className="flex space-x-6 items-center">
          <div className="flex">
            <a className="hover:cursor-pointer" target="_blank" href={link}>
              <div className="text-lg text-blue dark:text-lightBlue font-sans hover:underline">{name}</div>
            </a>
            <div className="text-md">{`, ${company}`}</div>
          </div>
          <img src={image} alt={name} className="rounded-full h-12 w-12 lg:h-14 lg:w-14 mx-auto" />
        </div>
      </div>
    );
  };

  return (
    <div className="pb-4 lg:pb-8">
      <div className="bg-zinc-100 dark:bg-direWolf w-full py-8 flex flex-col justify-between font-light px-4 lg:px-16">
        {/* trusted by */}
        <div>
          <div className="w-full text-left text-xl font-sans tracking-widest">Trusted by Readers from</div>
          <div className="my-5 py-5 grid w-full grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-y-12 lg:gap-4 bg-slate-100">
            {readers.map((sectors) => {
              const organizations = sectors.organizations;
              return (
                <div key={sectors.label} className="flex flex-col text-center space-y-2">
                  <div className="text-lg text-blue font-sans">{sectors.label}</div>
                  {organizations.map((org) => {
                    return <img key={org.name} src={org.logo} alt={org.name} className="w-24 h-16 mx-auto object-scale-down" />;
                  })}
                </div>
              );
            })}
          </div>
        </div>
        {/* testimonials */}
        <div>
          <div className="mx-auto w-full h-[1px] bg-gray mt-8 mb-4"></div>
          <div className="w-full text-left text-xl font-sans tracking-widest">Testimonials</div>
          <div className=" gap-x-16 flex flex-col md:flex-row w-full">
            <div className="flex-1 flex flex-col md:divide-y divide-slate-400">
              {testimonials.slice(0, 3).map((testimonial, idx) => (
                <Testimonial {...testimonial} key={idx} />
              ))}
            </div>
            <div className="flex-1 flex flex-col md:ml-4 md:divide-y divide-slate-400">
              {testimonials.slice(3).map((testimonial, idx) => (
                <Testimonial {...testimonial} key={idx} />
              ))}
            </div>
          </div>
        </div>
        {/* team members */}
        <div>
          <div className="mx-auto w-full h-[1px] bg-gray mt-8 mb-4"></div>
          <div className="w-full text-left text-xl font-sans tracking-widest">Core Contributors</div>
          <div className="py-10 grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {teamMembers.map((member) => {
              return (
                <div key={member.name} className="relative flex flex-col jusity-center text-center space-y-6">
                  <img src={member.displayPicture} alt={member.name} className="rounded-full h-24 w-24 lg:h-32 lg:w-32 mx-auto" />
                  <div className="flex flex-col">
                    <div className="text-lg lg:text-xl text-blue dark:text-lightBlue font-sans flex justify-center">
                      {member.name}
                      <div className="ml-2 pt-1">
                        <XSocial href={`https://x.com/${member.x}`} size={3} />
                      </div>
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
