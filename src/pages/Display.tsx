import { useEffect, useState } from 'react';
import { Clock, Mic2 } from 'lucide-react';

interface PrayerSession {
  id?: string;
  name: string;
  speaker: string;
  time: string;
}

const Display = () => {
  const [sessions, setSessions] = useState<PrayerSession[]>([
    { id: '1', name: 'Subuh', speaker: 'Ustadz Ahmad Hidayat', time: '05:30' },
    { id: '2', name: 'Zuhur', speaker: 'Ustadz Muhammad Rizki', time: '12:15' },
    { id: '3', name: 'Ashar', speaker: 'Ustadz Imam Suryanto', time: '15:45' },
    { id: '4', name: 'Magrib', speaker: 'Ustadz Faisal Rahman', time: '18:20' },
  ]);

  const [currentTime, setCurrentTime] = useState<string>('');

  // Load data from localStorage and sync
  useEffect(() => {
    const loadData = () => {
      const saved = localStorage.getItem('mosqueAgenda');
      if (saved) {
        setSessions(JSON.parse(saved));
      }
    };

    loadData();

    // Poll for updates every 2 seconds
    const interval = setInterval(loadData, 2000);
    return () => clearInterval(interval);
  }, []);

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('id-ID', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="w-full max-w-6xl">
        {/* Header with Time */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-full mb-6 mx-auto shadow-lg">
            <Mic2 className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-emerald-900 mb-2">Jadwal Ceramah</h1>
          <p className="text-2xl text-emerald-600 mb-4">Masjid Al-Ikhlas</p>
          <div className="flex items-center justify-center gap-2 text-3xl font-bold text-emerald-700">
            <Clock className="w-8 h-8" />
            {currentTime}
          </div>
        </div>

        {/* Sessions Grid - TV Display */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105"
            >
              {/* Animated gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700" />

              <div className="p-12">
                {/* Prayer Name - Large */}
                <div className="mb-8">
                  <p className="text-lg font-bold text-emerald-600 uppercase tracking-widest">
                    Shalat
                  </p>
                  <h2 className="text-6xl font-black text-emerald-900 mt-2">
                    {session.name}
                  </h2>
                </div>

                {/* Speaker Info - Large */}
                <div className="mb-8 pb-8 border-b-4 border-emerald-100">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl">
                      <Mic2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-base text-emerald-600 font-bold uppercase tracking-wider mb-2">
                        Penceramah
                      </p>
                      <p className="text-4xl font-bold text-emerald-900 leading-tight">
                        {session.speaker}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Time - Very Large */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl">
                    <Clock className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-base text-emerald-600 font-bold uppercase tracking-wider mb-2">
                      Waktu
                    </p>
                    <p className="text-5xl font-black text-emerald-900">
                      {session.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-2xl text-emerald-600 font-semibold">
            📍 Jl. Masjid No. 123, Kota Anda
          </p>
        </div>
      </div>
    </div>
  );
};

export default Display;
