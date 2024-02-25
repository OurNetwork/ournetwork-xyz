import Archives from "@/components/archives";
import { getContent } from "@/lib/content";

export default async function Home() {
  const { archives } = await getContent();

  return (
    <>
      <div className="lg:flex lg:overflow-x-auto lg:space-x-4 h-full lg:w-[calc(100vw-324px)]">
        <Archives archives={archives} />
      </div>
    </>
  );
}
