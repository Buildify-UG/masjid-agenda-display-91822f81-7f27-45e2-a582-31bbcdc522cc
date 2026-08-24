import { useNavigate } from 'react-router-dom';
import { Settings, Monitor, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-600 to-indigo-600 rounded-full mb-6 mx-auto shadow-lg">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Sistem Jadwal Ceramah
          </h1>
          <p className="text-xl text-gray-600">Masjid Al-Ikhlas</p>
          <p className="text-gray-500 mt-2">Kelola dan tampilkan jadwal ceramah dengan mudah</p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Admin Card */}
          <div
            onClick={() => navigate('/admin')}
            className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-indigo-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600" />
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-7 h-7 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-indigo-900 mb-2">Admin Panel</h2>
              <p className="text-indigo-600 mb-4">Kelola penceramah dan waktu ceramah</p>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white">
                Masuk Admin
              </Button>
            </div>
          </div>

          {/* Display Card */}
          <div
            onClick={() => navigate('/display')}
            className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-emerald-500"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600" />
            <div className="p-8">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-7 h-7 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-2">Display TV</h2>
              <p className="text-emerald-600 mb-4">Tampilkan jadwal di layar TV masjid</p>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white">
                Lihat Display
              </Button>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-emerald-600">
          <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Panduan Penggunaan</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>✓ Gunakan <strong>Admin Panel</strong> untuk mengedit jadwal ceramah</li>
            <li>✓ Gunakan <strong>Display TV</strong> untuk menampilkan di layar masjid</li>
            <li>✓ Data disimpan secara otomatis dan real-time</li>
            <li>✓ Display TV akan otomatis update setiap ada perubahan</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
