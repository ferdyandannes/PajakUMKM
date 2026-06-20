export default function Hero() {
  return (
    <header className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500 text-white">
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🧾</span>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            PajakUMKM
          </h1>
        </div>
        <p className="text-lg md:text-xl text-emerald-50 max-w-2xl mb-8">
          Hitung, bayar, dan laporkan pajak UMKM Anda dengan mudah.
          Kalkulator PPh Final 0,5% berdasarkan PP 55/2022 & UU HPP.
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
            PP 55/2022
          </span>
          <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
            PPh Final 0,5%
          </span>
          <span className="bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full">
            Omzet Rp500 Juta Bebas Pajak
          </span>
        </div>
      </div>
    </header>
  );
}
