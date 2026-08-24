import { useState, useEffect } from 'react';
import { Edit2, Save, X, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

interface PrayerSession {
  id?: string;
  name: string;
  speaker: string;
  time: string;
}

const Admin = () => {
  const [sessions, setSessions] = useState<PrayerSession[]>([
    { id: '1', name: 'Subuh', speaker: 'Ustadz Ahmad Hidayat', time: '05:30' },
    { id: '2', name: 'Zuhur', speaker: 'Ustadz Muhammad Rizki', time: '12:15' },
    { id: '3', name: 'Ashar', speaker: 'Ustadz Imam Suryanto', time: '15:45' },
    { id: '4', name: 'Magrib', speaker: 'Ustadz Faisal Rahman', time: '18:20' },
  ]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<PrayerSession>({
    name: '',
    speaker: '',
    time: '',
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('mosqueAgenda');
    if (saved) {
      setSessions(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  const saveToStorage = (data: PrayerSession[]) => {
    localStorage.setItem('mosqueAgenda', JSON.stringify(data));
    toast.success('Data tersimpan');
  };

  const handleEdit = (session: PrayerSession) => {
    setEditingId(session.id || '');
    setEditForm(session);
  };

  const handleSave = () => {
    if (!editForm.name || !editForm.speaker || !editForm.time) {
      toast.error('Semua field harus diisi');
      return;
    }

    const updated = sessions.map((s) =>
      s.id === editingId ? { ...s, ...editForm } : s
    );
    setSessions(updated);
    saveToStorage(updated);
    setEditingId(null);
  };

  const handleDelete = (id: string | undefined) => {
    if (!id) return;
    const updated = sessions.filter((s) => s.id !== id);
    setSessions(updated);
    saveToStorage(updated);
    toast.success('Data dihapus');
  };

  const handleAdd = () => {
    const newSession: PrayerSession = {
      id: Date.now().toString(),
      name: '',
      speaker: '',
      time: '',
    };
    setSessions([...sessions, newSession]);
    handleEdit(newSession);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">Admin Panel</h1>
          <p className="text-indigo-600">Kelola jadwal ceramah masjid</p>
        </div>

        {/* Add Button */}
        <div className="mb-6">
          <Button
            onClick={handleAdd}
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Tambah Ceramah
          </Button>
        </div>

        {/* Sessions Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Shalat</th>
                  <th className="px-6 py-4 text-left font-semibold">Penceramah</th>
                  <th className="px-6 py-4 text-left font-semibold">Waktu</th>
                  <th className="px-6 py-4 text-center font-semibold">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session) => (
                  <tr
                    key={session.id}
                    className="border-b border-indigo-100 hover:bg-indigo-50 transition-colors"
                  >
                    {editingId === session.id ? (
                      <>
                        <td className="px-6 py-4">
                          <Input
                            value={editForm.name}
                            onChange={(e) =>
                              setEditForm({ ...editForm, name: e.target.value })
                            }
                            className="border-indigo-300"
                            placeholder="Nama shalat"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <Input
                            value={editForm.speaker}
                            onChange={(e) =>
                              setEditForm({ ...editForm, speaker: e.target.value })
                            }
                            className="border-indigo-300"
                            placeholder="Nama penceramah"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <Input
                            value={editForm.time}
                            onChange={(e) =>
                              setEditForm({ ...editForm, time: e.target.value })
                            }
                            className="border-indigo-300"
                            placeholder="HH:MM"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-2">
                            <Button
                              onClick={handleSave}
                              size="sm"
                              className="bg-green-600 hover:bg-green-700 text-white"
                            >
                              <Save className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => setEditingId(null)}
                              size="sm"
                              className="bg-gray-600 hover:bg-gray-700 text-white"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 font-semibold text-indigo-900">
                          {session.name}
                        </td>
                        <td className="px-6 py-4 text-indigo-700">
                          {session.speaker}
                        </td>
                        <td className="px-6 py-4 font-semibold text-indigo-900">
                          {session.time}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex justify-center gap-2">
                            <Button
                              onClick={() => handleEdit(session)}
                              size="sm"
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button
                              onClick={() => handleDelete(session.id)}
                              size="sm"
                              className="bg-red-600 hover:bg-red-700 text-white"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Preview Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Preview Display TV</h2>
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border-l-4 border-emerald-600"
                >
                  <p className="text-sm text-emerald-600 font-semibold uppercase">
                    {session.name}
                  </p>
                  <p className="text-lg font-bold text-emerald-900 mt-1">
                    {session.speaker}
                  </p>
                  <p className="text-2xl font-bold text-emerald-700 mt-2">
                    {session.time}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
