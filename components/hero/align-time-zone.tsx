export default function AlignTime() {
  return (
    <>
      <div className="flex items-center gap-2.5">
        <div
          className=" flex items-center gap-2.5 mb-
                            px-3 py-1 rounded-full text-[10px] sm:text-xs 
                            bg-gradient-to-r from-green-500/15 to-emerald-500/15 
                            border border-green-400/30 
                            text-green-200/90 font-medium tracking-wide
                            shadow-[0_0_10px_rgba(34,197,94,0.3)]
                            hover:shadow-[0_0_14px_rgba(34,197,94,0.55)] 
                            hover:scale-105 
                            transition-all duration-300 backdrop-blur-sm"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 border border-green-300 shadow-sm"></span>
          </div>
          <span className="text-gray-600 text-sm">US/UK Time Zone Aligned</span>
        </div>
      </div>
    </>
  );
}
