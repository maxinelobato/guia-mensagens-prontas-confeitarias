
import { Reveal } from './Reveal';

export function Pricing() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Decorative Parallax Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-800 rounded-full -mr-48 -mt-48 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A1664F]/5 rounded-full -ml-48 -mb-48 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Reveal>
          <div className="bg-[#FDFBF9] rounded-[40px] shadow-2xl p-10 md:p-16 border border-[#A1664F]">
            <Reveal delay={200}>
              <h2 className="text-3xl md:text-5xl font-serif text-[#A1664F] mb-6 italic">Você não precisa mais travar no WhatsApp.</h2>
            </Reveal>

            <Reveal delay={400}>
              <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                Com o Guia de Mensagens Prontas, você ganha segurança, clareza e profissionalismo em cada conversa com o cliente.
              </p>
            </Reveal>

            <Reveal delay={600} direction="up">
              <div className="mb-10 inline-block">
                <span className="text-gray-500 line-through text-lg block mb-2">De R$ 97,00 por apenas</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl text-[#A1664F] font-bold">R$</span>
                  <span className="text-7xl md:text-8xl font-serif text-[#A1664F] font-bold tracking-tighter">47,00</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <div className="mb-8 text-lg text-gray-700">
                👉 <strong>Garanta agora o seu ebook</strong> e comece a atender com mais confiança desde hoje.
              </div>
            </Reveal>

            <Reveal delay={1000}>
              <a href="#comprar">
                <button className="w-full uppercase max-w-lg bg-[#A1664F] text-white text-md sm:text-lg font-bold py-6 rounded-full shadow-xl shadow-[#A1664F]/30 hover:bg-[#8e5a45] transition-all transform hover:scale-[1.02] active:scale-95 mb-8">
                  garantir meu guia agora
                </button>
              </a>
            </Reveal>

            <div className="flex flex-wrap justify-center itens-center gap-8 text-gray-700 text-xs">
              {["✓ Acesso imediato", "✓ Pagamento 100% Seguro", "✓ 7 Dias de Garantia"].map((text, i) => (
                <Reveal key={i} delay={300 + (i * 100)}>
                  <span className="items-center gap-2">{text}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
