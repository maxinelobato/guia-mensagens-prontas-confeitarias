
import { Reveal } from './Reveal';

export function Transformation() {
  return (
    <section className="py-24 bg-[#FDFBF9] px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif text-[#A1664F] mb-4">A sua nova realidade</h2>
            <p className="text-gray-700">Veja como sua comunicação vai mudar com o método</p>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="grid md:grid-cols-2 gap-0 rounded-[40px] overflow-hidden shadow-2xl border border-[#E5D5C8]">
            {/* ANTES */}
            <div className="bg-white p-10 md:p-16 border-b md:border-b-0 md:border-r border-[#E5D5C8]">
              <h3 className="text-2xl font-serif text-gray-700 mb-8 uppercase tracking-widest">Antes do Guia</h3>
              <ul className="space-y-6">
                {[
                  "Medo de responder clientes",
                  "Insegurança ao falar de preço",
                  "Sensação de estar sempre “pisando em ovos”",
                  "Vendas perdidas por falta de posicionamento"
                ].map((item, i) => (
                  <Reveal key={i} delay={300 + (i * 100)} direction="left">
                    <li className="flex items-center gap-4 text-gray-700">
                      <span className="text-xl">✕</span>
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* DEPOIS */}
            <div className="bg-[#A1664F] p-10 md:p-16 text-white relative">
              <div className="absolute top-6 right-8 opacity-10">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
              </div>
              <h3 className="text-2xl font-serif mb-8 uppercase tracking-widest text-[#E5D5C8]">Depois do Guia</h3>
              <ul className="space-y-6">
                {[
                  "Clareza no atendimento",
                  "Segurança para cobrar",
                  "Comunicação profissional",
                  "Mais respeito, menos desgaste e mais vendas"
                ].map((item, i) => (
                  <Reveal key={i} delay={400 + (i * 100)} direction="right">
                    <li className="flex items-center gap-4">
                      <span className="text-xl text-[#E5D5C8]">✓</span>
                      {item}
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
