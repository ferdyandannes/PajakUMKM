export default function Info() {
  return (
    <section id="info" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
        Tarif & Ketentuan Pajak UMKM
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="text-emerald-600 text-2xl font-bold mb-2">0,5%</div>
          <h3 className="font-semibold text-gray-900 mb-1">PPh Final UMKM</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Tarif PPh Final dari omzet bruto sesuai PP 55/2022 (pengganti PP 23/2018)
            untuk WP dengan peredaran bruto di bawah Rp4,8 miliar per tahun.
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="text-emerald-600 text-2xl font-bold mb-2">Rp500 Juta</div>
          <h3 className="font-semibold text-gray-900 mb-1">Bebas Pajak</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Omzet sampai dengan Rp500 juta per tahun tidak dikenakan PPh Final
            sesuai UU HPP (Undang-Undang Harmonisasi Perpajakan).
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <div className="text-emerald-600 text-2xl font-bold mb-2">Rp4,8 Miliar</div>
          <h3 className="font-semibold text-gray-900 mb-1">Batas Omzet</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Batas maksimal omzet untuk menggunakan tarif PPh Final 0,5%.
            Di atas Rp4,8 miliar wajib menggunakan tarif normal Pasal 17 UU PPh.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
        <h3 className="font-semibold text-gray-900 text-lg mb-4">
          Jangka Waktu Penggunaan Tarif PPh Final 0,5%
        </h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-700 font-bold text-lg">7 Tahun</span>
            <div>
              <p className="font-medium text-gray-900">WP Orang Pribadi</p>
              <p className="text-sm text-gray-500">Pengusaha perorangan</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-purple-50 rounded-lg">
            <span className="text-purple-700 font-bold text-lg">4 Tahun</span>
            <div>
              <p className="font-medium text-gray-900">CV, Firma, Koperasi</p>
              <p className="text-sm text-gray-500">Badan usaha tidak berbadan hukum</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-lg">
            <span className="text-amber-700 font-bold text-lg">3 Tahun</span>
            <div>
              <p className="font-medium text-gray-900">Perseroan Terbatas (PT)</p>
              <p className="text-sm text-gray-500">Badan usaha berbadan hukum</p>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          *Jangka waktu dihitung sejak tahun pajak terdaftar (bagi WP baru) atau sejak PP 23/2018 berlaku.
          Setelah masa habis, gunakan tarif normal Pasal 17 UU PPh atau NPPN.
        </p>
      </div>
    </section>
  );
}
