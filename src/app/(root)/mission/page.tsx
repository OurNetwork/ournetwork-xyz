export default async function Mission() {
  return (
    <>
      <div className="bg-zinc-100 min-h-full w-full py-8 flex flex-col justify-between font-light px-4 lg:px-16">
        {/* header and ecosystem diagram */}
        <div className="flex-col justify-center space-y-8">
          <div className="mx-auto text-center max-w-4xl text-xl lg:text-3xl font-sans tracking-wider">The leading community-powered onchain analytics platform</div>
          <div className="mx-auto w-full h-[1px] bg-gray"></div>
          <div className="flex max-w-2xl text-left text-xl font-sans tracking-widest">The ON Ecosystem</div>
          <div className="flex px-4 py-4 md:px-16 md:py-12 justify-center">
            <img src={`/assets/brand/ecosystem.webp`} alt={"on ecosystem"} />
          </div>
        </div>
      </div>
    </>
  );
}
