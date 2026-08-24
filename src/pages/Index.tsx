import { Clock, Mic2 } from 'lucide-react';

interface PrayerSession {
  name: string;
  speaker: string;
  time: string;
}

const Index = () => {
  const sessions: PrayerSession[] = [
    { name: 'Subuh', speaker: 'Ustadz Ahmad Hidayat', time: '05:30' },
    { name: 'Zuhur', speaker: 'Ustadz Muhammad Rizki', time: '12:15' },
    { name: 'Ashar', speaker: 'Ustadz Imam Suryanto', time: '15:45' },
    { name: 'Magrib', speaker: 'Ustadz Faisal Rahman', time: '18:20' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full mb-6 mx-auto">
            <Mic2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-emerald-900 mb-2">Jadwal Ceramah</h1>
          <p className="text-emerald-600 text-lg">Masjid Al-Ikhlas</p>
        </div>

        {/* Sessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600" />

              <div className="p-8">
                {/* Prayer Name */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
                    Shalat
                  </p>
                  <h2 className="text-3xl font-bold text-emerald-900 mt-1">
                    {session.name}
                  </h2>
                </div>

                {/* Speaker Info */}
                <div className="mb-6 pb-6 border-b border-emerald-100">
                  <div className="flex items-start gap-3">
                    <Mic2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-emerald-600 font-medium uppercase tracking-wider mb-1">
                        Penceramah
                      </p>
                      <p className="text-lg font-semibold text-emerald-900">
                        {session.speaker}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Time */}
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-600 font-medium uppercase tracking-wider">
                      Waktu
                    </p>
                    <p className="text-2xl font-bold text-emerald-900">
                      {session.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-emerald-600 text-sm">
            📍 Jl. Masjid No. 123, Kota Anda
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
