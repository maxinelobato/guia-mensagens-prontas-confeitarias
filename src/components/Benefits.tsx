import { Reveal } from './Reveal';
import { EbookCover } from './EbookCover';

const contentItems = [
  "Responder pedidos de orçamento",
  "Informar valores sem culpa ou vergonha",
  "Lidar com clientes que pedem desconto",
  "Explicar prazos e regras com firmeza e educação",
  "Dizer “não” sem se sentir mal",
  "Encerrar conversas sem desgaste",
  "Se posicionar como profissional, mesmo trabalhando de casa"
];

export function Benefits() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal direction="left">
              <span className="text-[#A1664F] font-bold text-sm uppercase tracking-widest mb-4 block">Praticidade no seu WhatsApp</span>
              <h2 className="text-3xl md:text-5xl font-serif text-[#A1664F] mb-6">O que é o Guia de Mensagens Prontas?</h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                O Guia de Mensagens Prontas é um <strong>ebook prático</strong> com respostas prontas para você usar no WhatsApp, adaptadas para a realidade da confeitaria.
                <br /><br />
                Você não precisa inventar texto, nem improvisar. É só adaptar e enviar.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="bg-[#FDFBF9] p-8 rounded-3xl border border-[#E5D5C8]/50">
                <h3 className="text-xl font-bold text-[#A1664F] mb-6 font-serif">No Guia, você terá mensagens para:</h3>
                <ul className="grid sm:grid-cols-1 gap-4">
                  {contentItems.map((item, idx) => (
                    <Reveal key={idx} delay={500 + (idx * 100)}>
                      <li className="flex items-start gap-3 text-gray-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E5D5C8] text-[#A1664F] flex items-center justify-center text-xs">✓</span>
                        {item}
                      </li>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={800}>
              <p className="mt-8 text-[#A1664F] italic text-lg p-2 font-medium">
                Tudo com uma linguagem clara, respeitosa e alinhada com quem quer ser levada a sério.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal direction="right">
              <div className="max-w-md mx-auto">
                <EbookCover />
              </div>
            </Reveal>
            {/* Decorative element behind cover */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-[#E5D5C8]/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
