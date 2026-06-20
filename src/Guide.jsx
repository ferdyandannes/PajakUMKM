export default function Guide() {
  return (
    <section id="panduan" className="bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
          Cara Bayar & Lapor Pajak UMKM
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Hitung Pajak
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed ml-9">
              Gunakan kalkulator di atas untuk menghitung PPh Final UMKM.
              Cukup masukkan omzet bulanan Anda, dan sistem akan menghitung
              pajak yang harus dibayar.
            </p>

            <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Bayar Pajak
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed ml-9">
              Bayar menggunakan kode akun pajak <strong>411128</strong> (KJS 420)
              melalui bank, ATM, atau e-Billing (e.g. Klikpajak, Bukalapak,
              Tokopedia, atau mitra DJP lainnya). Pembayaran paling lambat
              tanggal 15 bulan berikutnya.
            </p>

            <h3 className="font-semibold text-gray-900 text-lg flex items-center gap-2">
              <span className="bg-emerald-100 text-emerald-700 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold">3</span>
              Laporkan SPT Masa
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed ml-9">
              Laporkan SPT Masa PPh Final paling lambat tanggal 20 bulan
              berikutnya melalui e-Filing DJP Online atau aplikasi pajak
              mitra DJP.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
            <h3 className="font-semibold text-gray-900 mb-3">
              Dokumen yang Perlu Disiapkan
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                Formulir SPT 1770 (WP OP) atau 1771 (WP Badan)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                Laporan keuangan / rekap omzet bulanan
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                SSP / bukti pembayaran pajak
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 mt-0.5">✓</span>
                NPWP
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                SPT Tahunan paling lambat 3 bulan setelah tahun pajak
                berakhir untuk WP OP, dan 4 bulan untuk WP Badan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
