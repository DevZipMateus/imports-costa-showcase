import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5567998391950"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="text-primary-foreground" size={28} />
    </a>
  );
};

export default WhatsAppButton;
