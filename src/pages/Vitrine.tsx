import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div>
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=importscosta"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 96px)' }}
          title="Vitrine Imports Costa"
        />
      </div>
    </div>
  );
};

export default Vitrine;
