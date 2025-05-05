import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Info,
  Calendar,
  BarChart2,
  HelpCircle,
  MessageSquare,
  Users,
  Award,
  Clock,
  Mic,
  Film,
  Star
} from 'lucide-react';

// Tipos
type Command = {
  icon: React.ReactNode;
  command: string;
  description: string;
  usage: string;
  example: string;
  category: string;
};

type HistoryItem = {
  command: string;
  timestamp: number;
};

export const Commands = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'commands' | 'history'>('commands');
  const [commandHistory, setCommandHistory] = useState<HistoryItem[]>([]);

  // Carrega o histórico do localStorage ao iniciar
  useEffect(() => {
    const savedHistory = localStorage.getItem('furiaChatHistory');
    if (savedHistory) {
      setCommandHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Agrupa comandos por categoria
  const commandCategories: Record<string, Command[]> = {
    'Informações': [
      {
        icon: <Info className="w-5 h-5 text-blue-400" />,
        command: '/news',
        description: 'Últimas notícias sobre a FURIA',
        usage: '/news',
        example: '/news',
        category: 'Informações'
      },
      {
        icon: <Users className="w-5 h-5 text-green-400" />,
        command: '/elenco',
        description: 'Elenco atual do time de CS2',
        usage: '/elenco',
        example: '/elenco',
        category: 'Informações'
      },
      {
        icon: <Calendar className="w-5 h-5 text-yellow-400" />,
        command: '/proximojogo',
        description: 'Próximos jogos agendados',
        usage: '/proximojogo',
        example: '/proximojogo',
        category: 'Informações'
      },
    ],
    'Estatísticas': [
      {
        icon: <BarChart2 className="w-5 h-5 text-purple-400" />,
        command: '/stats',
        description: 'Estatísticas de jogadores',
        usage: '/stats [jogador]',
        example: '/stats KSCERATO',
        category: 'Estatísticas'
      },
      {
        icon: <Award className="w-5 h-5 text-red-400" />,
        command: '/resultados',
        description: 'Resultados dos últimos jogos',
        usage: '/resultados',
        example: '/resultados',
        category: 'Estatísticas'
      },
    ],
    'Interação': [
      {
        icon: <Mic className="w-5 h-5 text-pink-400" />,
        command: '/vaifuria',
        description: 'Ativa o modo hype da torcida',
        usage: '/vaifuria',
        example: '/vaifuria',
        category: 'Interação'
      },
      {
        icon: <HelpCircle className="w-5 h-5 text-orange-400" />,
        command: '/quiz',
        description: 'Quiz "Qual jogador é você?"',
        usage: '/quiz',
        example: '/quiz',
        category: 'Interação'
      },
    ],
    'Extras': [
      {
        icon: <Film className="w-5 h-5 text-cyan-400" />,
        command: '/clip',
        description: 'Clipe destacado do dia',
        usage: '/clip',
        example: '/clip',
        category: 'Extras'
      },
      {
        icon: <Star className="w-5 h-5 text-yellow-200" />,
        command: '/curiosidade',
        description: 'Curiosidades sobre a FURIA',
        usage: '/curiosidade',
        example: '/curiosidade',
        category: 'Extras'
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-gray-400" />,
        command: '/help',
        description: 'Lista todos os comandos',
        usage: '/help',
        example: '/help',
        category: 'Extras'
      },
    ]
  };

  // Formata a data do histórico
  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Navega para o chat com o comando selecionado
  const handleCommandClick = (command: string) => {
    const newHistory = [
      { command, timestamp: Date.now() },
      ...commandHistory.slice(0, 9),
    ];
  
    setCommandHistory(newHistory);
    localStorage.setItem("furiaChatHistory", JSON.stringify(newHistory));
  
    // Redireciona com o comando
    navigate("/", { state: { autoCommand: command } });
  };
  

  return (
    <div className="p-6 min-h-screen text-white font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-yellow-400">FURIA Command Center</h1>
        
        <div className="flex mb-6 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('commands')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'commands'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Lista de Comandos
            </div>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`px-6 py-3 font-medium transition-all ${
              activeTab === 'history'
                ? 'text-yellow-400 border-b-2 border-yellow-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Histórico Recente
            </div>
          </button>
        </div>

        {activeTab === 'commands' ? (
          <div className="space-y-8">
            {Object.entries(commandCategories).map(([category, commands]) => (
              <div key={category} className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {commands.map((cmd, index) => (
                    <div
                      key={index}
                      onClick={() => handleCommandClick(cmd.command)}
                      className="bg-[#161717] p-4 rounded-lg border border-gray-800 hover:border-yellow-400/50 transition cursor-pointer hover:shadow-lg hover:shadow-yellow-400/10"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        {cmd.icon}
                        <span className="font-mono text-yellow-400">{cmd.command}</span>
                      </div>
                      <p className="text-sm text-gray-300 mb-3">{cmd.description}</p>
                      <div className="text-xs space-y-1">
                        <div className="text-gray-500">
                          <span className="text-gray-400">Uso:</span> {cmd.usage}
                        </div>
                        <div className="text-gray-500">
                          <span className="text-gray-400">Exemplo:</span> {cmd.example}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {commandHistory.length > 0 ? (
              commandHistory.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleCommandClick(item.command)}
                  className="bg-[#161717] p-4 rounded-lg border border-gray-800 hover:border-yellow-400/30 transition cursor-pointer flex justify-between items-center"
                >
                  <div>
                    <p className="font-mono text-yellow-400">{item.command}</p>
                  </div>
                  <p className="text-xs text-gray-500">{formatDate(item.timestamp)}</p>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Nenhum comando usado recentemente
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};