import FilterMenu from "@/components/(client)/FilterMenu";
import Sections from "@/components/(client)/Sections";

export default function Home() {
  return (
    <main className="bg-body min-h-screen">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 pb-24">
        <FilterMenu />
        <Sections />
      </div>
    </main>
  );
}
