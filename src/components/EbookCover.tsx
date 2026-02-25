export function EbookCover() {
  return (
    <div className="relative group perspective-midrange">
      <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl transition-transform duration-500 transform-3d group-hover:rotate-y-20">
        <img
          src="./imgcapa.png"
          alt="Capa do Ebook Guia de Mensagens Prontas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      {/* 3D Spine Effect */}
      <div className="absolute -left-2 top-4 bottom-4 w-4 bg-[#8e5a45] rounded-l-md shadow-inner hidden transition-transform duration-500 transform-3d group-hover:rotate-y-45 md:block"></div>
    </div>
  );
};
