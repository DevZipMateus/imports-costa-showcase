import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=importscosta" 
        className="w-full"
        style={{ height: 'calc(100vh - 80px - 63px)' }}
        title="Vitrine Imports Costa"
      />
    </div>
  );
};

export default Vitrine;
