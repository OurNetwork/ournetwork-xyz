import LeftSidebar from "@/components/shared/LeftSidebar";
import MobileNav from "@/components/shared/MobileNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-h-screen relative font-mono">
      <MobileNav />
      <div className="flex max-h-screen">
        <LeftSidebar />
        <section className="flex min-h-[90vh] lg:min-h-screen flex-1 flex-col px-2 py-3 lg:py-8 lg:pr-4">
          <div className="w-full h-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
