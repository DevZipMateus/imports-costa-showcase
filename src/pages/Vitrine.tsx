import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=importscosta"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 80px)' }}
          title="Vitrine Imports Costa"
        />
      </div>
    </div>
  );
};

export default Vitrine;
