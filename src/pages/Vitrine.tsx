import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col pt-20">
      <Header />
      <iframe 
        src="https://v4.egestor.com.br/vitrine/?s=importscosta" 
        className="w-full flex-1"
        style={{ height: 'calc(100vh - 80px)' }}
        title="Demonstração de Vitrine"
      />
    </div>
  );
};

export default Vitrine;
