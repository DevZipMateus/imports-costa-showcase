import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden relative">
      <Header />
      <div>
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=importscosta"
          className="w-full border-0"
          style={{ height: 'calc(100vh - 128px - 63px)' }}
          title="Vitrine Imports Costa"
        />
      </div>
      
      {/* Badge MonteSite */}
      <div 
        id="montesite-footer-badge"
        className="fixed bottom-0 left-0 right-0 h-[63px] bg-white border-t border-gray-200 flex items-center justify-center z-40"
      >
        <a 
          href="https://montesite.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
        >
          Desenvolvido por <span className="font-semibold text-gray-900">MonteSite</span>
        </a>
      </div>
    </div>
  );
};

export default Vitrine;
