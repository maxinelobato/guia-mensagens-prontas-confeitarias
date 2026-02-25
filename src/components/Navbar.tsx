export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center">
        {/* Placeholder for the Bea Requena Logo */}
        <div className="flex flex-col items-center">
          <img src="./logobea.svg" alt="Bea Requena Logo" className="h-30 w-auto" />
          {/* <span className="text-xl md:text-2xl font-serif tracking-widest uppercase text-[#A1664F]">Bea Requena</span>
           <span className="text-[10px] uppercase tracking-[0.3em] -mt-1 opacity-70">Ateliê de Confeitaria</span> */}
        </div>
      </div>
    </nav>
  );
};
