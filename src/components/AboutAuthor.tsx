import { Reveal } from './Reveal';

export function AboutAuthor() {
  return (
    <section className="py-24 px-6 bg-[#FDFBF9]">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-2/5">
          <Reveal direction="left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="./aboutbea.webp"
                  alt="Bea Requena"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white rounded-full p-4 shadow-lg border border-[#E5D5C8] flex items-center justify-center text-center">
                <div className="text-[#A1664F]">
                  <span className="block text-2xl font-serif font-bold">10+</span>
                  <span className="block text-[8px] uppercase tracking-widest font-bold">Anos de Ateliê</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-3/5">
          <Reveal direction="right" delay={300}>
            <span className="text-[#A1664F] font-bold uppercase tracking-widest text-sm mb-4 block">Experiência Real</span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#A1664F] mb-6">Prazer, Bea Requena</h2>
          </Reveal>

          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <Reveal delay={500}>
              <p>
                Sou a Bea Requena. <strong>Confeiteira há mais de 10 anos</strong>, com ateliê próprio e experiência real no atendimento a clientes.
              </p>
            </Reveal>
            <Reveal delay={700}>
              <p>
                Tudo o que está neste guia foi testado na prática, no dia a dia da confeitaria — <strong>não é teoria, é vivência.</strong>
              </p>
            </Reveal>
            <Reveal delay={900}>
              <p className="font-semibold text-[#A1664F]">
                Criei este guia para que você pare de travar e comece a ser vista como a profissional que você já é.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
