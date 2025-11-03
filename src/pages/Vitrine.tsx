import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=importscosta"
          className="w-full h-full border-0"
          title="Vitrine Imports Costa"
        />
      </main>
    </div>
  );
};

export default Vitrine;
