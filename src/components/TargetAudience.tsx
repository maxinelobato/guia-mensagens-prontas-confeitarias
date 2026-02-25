import { Reveal } from './Reveal';

export function TargetAudience() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif text-[#A1664F] mb-4">Este ebook é para você?</h2>
            <div className="w-24 h-1 bg-[#E5D5C8] mx-auto"></div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* PARA QUEM É */}
          <Reveal direction="left" delay={200}>
            <div className="p-10 rounded-[40px] bg-[#FDFBF9] border-2 border-[#E5D5C8] h-full">
              <h3 className="text-2xl font-serif text-[#A1664F] mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#A1664F] text-white flex items-center justify-center text-sm">✓</span>
                Sim, é para você que:
              </h3>
              <ul className="space-y-5">
                {[
                  "Faz doces e atende clientes pelo WhatsApp",
                  "Se sente insegura na hora de responder",
                  "Quer se posicionar melhor sem ser grossa",
                  "Quer facilitar o dia a dia e evitar desgaste emocional"
                ].map((item, i) => (
                  <li key={i} className="text-[#A1664F]">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* PARA QUEM NÃO É */}
          <Reveal direction="right" delay={400}>
            <div className="p-10 rounded-[40px] bg-gray-50 border-2 border-transparent opacity-70 h-full">
              <h3 className="text-2xl font-serif text-gray-400 mb-8 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-gray-700 text-white flex items-center justify-center text-sm">✕</span>
                <div className="text-gray-700">Não é para quem:</div>
              </h3>
              <ul className="space-y-5">
                {[
                  "Não atende clientes",
                  "Não quer se profissionalizar",
                  "Acha que atendimento não influencia vendas"
                ].map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
