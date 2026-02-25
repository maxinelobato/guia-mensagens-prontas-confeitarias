import { Reveal } from '../components/Reveal'

export function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16 px-6 overflow-hidden bg-[#FDFBF9]">
      {/* Editorial Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Advanced Desktop Gradient Overlay */}
        <div className="absolute inset-0 z-10 hidden md:block bg-gradient-to-r from-stone-200 via-stone-200 to-transparent w-full"></div>

        {/* Mobile-Specific Gradient Overlay for Readability */}
        <div className="absolute inset-0 z-10 md:hidden bg-gradient-to-t from-stone-50 via-stone-300 to-transparent"></div>
        <div className="absolute inset-0 z-10 md:hidden bg-gradient-to-b from-stone-300/40 via-transparent to-transparent"></div>

        {/* High-Resolution "Magazine Style" Image */}
        <img
          src="https://images.unsplash.com/photo-1689799514696-b16af9b53753?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Confeitaria Profissional de Luxo"
          className="absolute right-0 top-0 h-full w-full md:w-[70%] object-cover object-center md:object-right-top opacity-90 transition-transform duration-[15s] hover:scale-110 ease-out"
        />

        {/* Subtle Grain Overlay for Texture */}
        <div className="absolute inset-0 opacity-[0.03] z-20 pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-30 pt-16 sm:pt-10">
        <div className="max-w-5xl">
          <Reveal delay={100} direction="left">
            <span className="inline-block px-4 py-1 rounded-full bg-[#E5D5C8]/80 backdrop-blur-sm text-[#A1664F] text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[#A1664F]/20">
              Guia Prático de Atendimento
            </span>
          </Reveal>

          <Reveal delay={300} direction="left">
            <h1 style={{ textShadow: '0px 0px 2px #E5D5C8' }} className="text-4xl md:text-6xl font-serif text-[#A1664F] leading-[1.05] mb-6 drop-shadow-sm">
              Nunca mais trave <br />{' '}
              <span className="italic font-bold">na hora de </span> responder <br />{' '}
              um cliente no WhatsApp
            </h1>
          </Reveal>

          <Reveal delay={500} direction="left">
            <p className="text-md md:text-lg text-gray-900 mb-10 max-w-xl leading-relaxed font-medium">
              Mensagens prontas, claras e profissionais para você atender com segurança, se posicionar melhor e parar de perder vendas por insegurança ou medo de cobrar.
            </p>
          </Reveal>

          <Reveal delay={700} direction="left">
            <div className="flex flex-col sm:flex-row gap-6 items-center md:items-start">
              <a
                href="#comprar"
                className="group animate-[bounce_1s_ease-in-out_infinite] relative bg-[#A1664F] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-[#8e5a45] transition-all transform hover:scale-105 shadow-2xl shadow-[#A1664F]/40 text-center overflow-hidden"
              >
                <span className="relative z-10 uppercase">
                  Garantir meu Guia Agora
                </span>
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>

              <div className="flex flex-col gap-1 items-center md:items-start">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm"
                      src={`https://i.pravatar.cc/100?u=conf${i}`}
                      alt={`Aluna ${i}`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-[#A1664F] font-bold uppercase tracking-widest mt-1">
                  +850 confeiteiras satisfeitas
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
