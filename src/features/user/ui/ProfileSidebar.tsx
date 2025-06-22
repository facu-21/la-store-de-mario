import { User, Clock } from 'lucide-react';

interface ProfileSidebarProps {
  userData: {
    curso: string;
  };
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function ProfileSidebar({
  userData,
  activeTab,
  setActiveTab
}: ProfileSidebarProps) {
  return (
    <div className="bg-[#303030] rounded-lg p-6 text-white">
      {/* Avatar y saludo */}
      <div className="text-center mb-6">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 transition-transform duration-300 hover:scale-105">
          <User className="w-10 h-10 text-gray-700" />
        </div>
        <h2 className="text-xl font-bold mb-1">Hola Bynfi</h2>
        <p className="text-gray-300">Curso: {userData.curso}</p>
      </div>

      {/* Botones de navegación */}
      <div className="space-y-3 mb-6">
        <button
          onClick={() => setActiveTab('historial')}
          className={`w-full py-3 px-4 rounded-lg transition-all duration-300 ease-in-out flex items-center transform hover:scale-105 active:scale-95 ${
            activeTab === 'historial'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 translate-x-1'
              : 'bg-gray-700 hover:bg-gray-600 text-white hover:translate-x-1'
          }`}
        >
          <Clock className={`w-5 h-5 mr-3 transition-all duration-300 ${
            activeTab === 'historial' ? 'rotate-12 text-white' : 'text-gray-300'
          }`} />
          <span className="transition-all duration-300">Historial de pedidos</span>
        </button>
        
        <button
          onClick={() => setActiveTab('datos')}
          className={`w-full py-3 px-4 rounded-lg transition-all duration-300 ease-in-out flex items-center transform hover:scale-105 active:scale-95 ${
            activeTab === 'datos'
              ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 translate-x-1'
              : 'bg-gray-700 hover:bg-gray-600 text-white hover:translate-x-1'
          }`}
        >
          <User className={`w-5 h-5 mr-3 transition-all duration-300 ${
            activeTab === 'datos' ? 'rotate-12 text-white' : 'text-gray-300'
          }`} />
          <span className="transition-all duration-300">Datos personales</span>
        </button>
      </div>

      {/* Botón cerrar sesión */}
      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-red-700/30">
        <svg
          className="w-5 h-5 mr-2 transition-transform duration-300 hover:rotate-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
          />
        </svg>
        <span className="transition-all duration-300">Cerrar sesión</span>
      </button>
    </div>
  );
}