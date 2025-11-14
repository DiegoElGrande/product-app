export const Header = () => {
    return (
        <header className="w-full text-white">
            {/* Main Header */}
            <section className="flex items-center justify-center gap-4 px-4 py-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold transition-all duration-300 hover:scale-110 hover:bg-white/30 cursor-pointer">
                    A
                </div>
                <span className="text-white font-medium transition-all duration-200 hover:opacity-80">
                    Anahyakard
                </span>
            </section>
        </header>
    );
};
