import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="pt-32 h-full overflow-hidden">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=importscosta"
          className="w-full border-0 overflow-hidden"
          style={{ height: 'calc(100vh - 128px)' }}
          title="Vitrine Imports Costa"
        />
      </div>
    </div>
  );
};

export default Vitrine;
