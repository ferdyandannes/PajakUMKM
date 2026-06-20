import { useState } from "react";

const TAX_RATE = 0.005;
const FREE_THRESHOLD = 500_000_000;
const MAX_OMZET = 4_800_000_000;

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

function formatRp(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function parseRp(value) {
  return Number(value.replace(/[^0-9]/g, "")) || 0;
}

export default function Calculator() {
  const [omzet, setOmzet] = useState(Array(12).fill(""));
  const [result, setResult] = useState(null);

  const monthlyValues = omzet.map((v) => parseRp(v));
  const annual = monthlyValues.reduce((a, b) => a + b, 0);
  const hasAny = monthlyValues.some((v) => v > 0);

  const handleChange = (idx, raw) => {
    const next = [...omzet];
    const clean = raw.replace(/[^0-9]/g, "");
    if (clean === "") {
      next[idx] = "";
    } else {
      next[idx] = new Intl.NumberFormat("id-ID").format(Number(clean));
    }
    setOmzet(next);
  };

  const fillAll = (val) => {
    const formatted = new Intl.NumberFormat("id-ID").format(val);
    setOmzet(Array(12).fill(formatted));
  };

  const handleCalculate = () => {
    if (!hasAny) return;

    let taxYearly = 0;
    let perMonth = Array(12).fill(0);
    let status = "";

    if (annual <= FREE_THRESHOLD) {
      status = "bebas";
    } else if (annual <= MAX_OMZET) {
      status = "final";
      taxYearly = Math.round(annual * TAX_RATE);
      perMonth = monthlyValues.map((m) => Math.round(m * TAX_RATE));
    } else {
      status = "over";
      taxYearly = Math.round(annual * TAX_RATE);
      perMonth = monthlyValues.map((m) => Math.round(m * TAX_RATE));
    }

    setResult({ monthlyValues, annual, taxYearly, perMonth, status });
  };

  return (
    <section id="kalkulator" className="max-w-4xl mx-auto px-4 -mt-8 relative z-10">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          Kalkulator Pajak UMKM
        </h2>
        <p className="text-gray-500 text-sm mb-4">
          Masukkan omzet untuk setiap bulan
        </p>

        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-500">Isi semua:</span>
          {[0, 10_000_000, 25_000_000, 50_000_000, 100_000_000].map((v) => (
            <button
              key={v}
              onClick={() => fillAll(v)}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-lg transition"
            >
              {v === 0 ? "Kosongkan" : formatRp(v)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-6">
          {MONTHS.map((month, i) => (
            <div key={month}>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                {month}
              </label>
              <div className="relative">
                <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs">Rp</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={omzet[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder="0"
                  className="w-full pl-8 pr-2 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 mb-4">
          <span className="text-sm font-medium text-gray-700">
            Total Omzet Tahunan
          </span>
          <span className="text-lg font-bold text-gray-900">
            {formatRp(annual)}
          </span>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!hasAny}
          className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition text-lg"
        >
          Hitung Pajak
        </button>

        {result && (
          <div className="mt-6 pt-6 border-t border-gray-100 space-y-4">
            {result.status === "bebas" && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-5 text-center">
                <p className="text-3xl mb-1">🎉</p>
                <p className="text-green-800 font-semibold text-lg">
                  Bebas Pajak!
                </p>
                <p className="text-green-700 text-sm mt-1">
                  Total omzet tahunan {formatRp(result.annual)} di bawah Rp500 juta.
                  Sesuai UU HPP, Anda tidak perlu membayar PPh Final.
                </p>
              </div>
            )}

            {result.status === "final" && (
              <div className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <p className="text-xs text-emerald-600 uppercase tracking-wide font-medium mb-3">
                    Ringkasan Pajak
                  </p>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-800">Tarif PPh Final</span>
                      <span className="font-semibold text-emerald-800">0,5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-800">Omzet Tahunan</span>
                      <span className="font-semibold text-emerald-800">{formatRp(result.annual)}</span>
                    </div>
                    <div className="border-t border-emerald-200 pt-2 flex justify-between items-center">
                      <span className="text-emerald-800 font-medium">
                        Pajak per Tahun
                      </span>
                      <span className="font-bold text-xl text-emerald-700">
                        {formatRp(result.taxYearly)}
                      </span>
                    </div>
                  </div>

                  <details className="group">
                    <summary className="text-sm text-emerald-700 cursor-pointer font-medium hover:text-emerald-800 transition">
                      Lihat rincian per bulan
                    </summary>
                    <div className="mt-3 space-y-1">
                      <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-1.5 text-sm font-medium text-emerald-700 border-b border-emerald-200 pb-1.5 mb-1.5">
                        <span>Bulan</span>
                        <span className="text-right">Omzet</span>
                        <span className="text-right">Pajak (0,5%)</span>
                      </div>
                      {result.monthlyValues.map((val, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[auto_1fr_auto] gap-x-3 text-sm text-emerald-800"
                        >
                          <span className="font-medium w-8">{MONTHS[i]}</span>
                          <span className="text-right">{formatRp(val)}</span>
                          <span className="text-right font-medium w-28">
                            {formatRp(result.perMonth[i])}
                          </span>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                  <p className="font-medium mb-1">Kode Pembayaran</p>
                  <p>
                    KAP: <code className="bg-amber-100 px-2 py-0.5 rounded font-mono">411128</code>{" "}
                    | KJS: <code className="bg-amber-100 px-2 py-0.5 rounded font-mono">420</code>
                  </p>
                  <p className="mt-2 text-amber-700">
                    Bayar paling lambat tanggal 15 bulan berikutnya.
                  </p>
                </div>
              </div>
            )}

            {result.status === "over" && (
              <div className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
                  <p className="text-xs text-emerald-600 uppercase tracking-wide font-medium mb-3">
                    Ringkasan Pajak (PPh Final 0,5%)
                  </p>
                  <div className="space-y-2 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-800">Tarif</span>
                      <span className="font-semibold text-emerald-800">0,5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-emerald-800">Omzet Tahunan</span>
                      <span className="font-semibold text-emerald-800">{formatRp(result.annual)}</span>
                    </div>
                    <div className="border-t border-emerald-200 pt-2 flex justify-between items-center">
                      <span className="text-emerald-800 font-medium">
                        Pajak per Tahun
                      </span>
                      <span className="font-bold text-xl text-emerald-700">
                        {formatRp(result.taxYearly)}
                      </span>
                    </div>
                  </div>

                  <details className="group">
                    <summary className="text-sm text-emerald-700 cursor-pointer font-medium hover:text-emerald-800 transition">
                      Lihat rincian per bulan
                    </summary>
                    <div className="mt-3 space-y-1">
                      <div className="grid grid-cols-[auto_1fr_auto] gap-x-3 gap-y-1.5 text-sm font-medium text-emerald-700 border-b border-emerald-200 pb-1.5 mb-1.5">
                        <span>Bulan</span>
                        <span className="text-right">Omzet</span>
                        <span className="text-right">Pajak (0,5%)</span>
                      </div>
                      {result.monthlyValues.map((val, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[auto_1fr_auto] gap-x-3 text-sm text-emerald-800"
                        >
                          <span className="font-medium w-8">{MONTHS[i]}</span>
                          <span className="text-right">{formatRp(val)}</span>
                          <span className="text-right font-medium w-28">
                            {formatRp(result.perMonth[i])}
                          </span>
                        </div>
                      ))}
                    </div>
                  </details>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-800">
                  <p className="font-semibold mb-1">⚠️ Omzet di atas Rp4,8 Miliar</p>
                  <p>
                    Omzet tahunan Anda melebihi Rp4,8 miliar. Anda sudah tidak
                    memenuhi syarat sebagai WP dengan peredaran bruto tertentu.
                    Konsultasikan dengan konsultan pajak untuk tarif normal
                    (Pasal 17 UU PPh).
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
