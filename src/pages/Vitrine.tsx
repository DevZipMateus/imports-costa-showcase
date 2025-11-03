import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Header />
      <div className="pt-32 pb-[50px]">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=importscosta"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 178px)' }}
          title="Vitrine Imports Costa"
        />
      </div>
    </div>
  );
};

export default Vitrine;
