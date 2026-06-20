export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧾</span>
            <span className="font-semibold text-white">PajakUMKM</span>
          </div>
          <p className="text-sm text-center">
            Kalkulator ini bersifat informatif. Untuk kepastian perpajakan,
            konsultasikan dengan konsultan pajak atau KPP terdaftar Anda.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-xs">
          <p>
            Berdasarkan PP 55/2022 & UU No. 7 Tahun 2021 (UU HPP) tentang
            Harmonisasi Perpajakan.
          </p>
        </div>
      </div>
    </footer>
  );
}
