export function Footer() {
  return (
    <footer className="py-12 bg-[#E5D5C8] px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center mb-8">
          <span className="text-2xl font-serif tracking-widest uppercase text-[#A1664F]">Bea Requena</span>
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-80">Ateliê de Confeitaria</span>
        </div>

        <p className="text-gray-500 text-sm mb-6 text-center">
          © 2024 Bea Requena. Todos os direitos reservados. <br />
          Guia de Mensagens Prontas para Confeiteiras.
        </p>

        {/* <div className="flex gap-6 text-gray-400 hover:text-[#A1664F] transition-colors">
            <a href="#" className="text-sm">Políticas de Privacidade</a>
            <a href="#" className="text-sm">Termos de Uso</a>
        </div> */}
      </div>
    </footer>
  );
};
