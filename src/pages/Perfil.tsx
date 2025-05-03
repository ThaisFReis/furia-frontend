import { useState } from "react";
import { RadarChart } from "@/components/RadarChart";
import furia from "@/assets/icon/furia.svg";
import { Trophy, Medal, Star, Calendar, MessageSquare, Activity, Terminal, HelpCircle, Flame } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const profileData = {
  name: "Usuário",
  username: "furia_fan",
  level: 10,
  xp: 8750,
  nextLevelXp: 10000,
  joinDate: "15/03/2023",
  avatarUrl: furia,
  badges: [
    { id: "1", name: "Fã Leal", description: "Membro há mais de 1 ano", icon: <Trophy className="h-4 w-4" /> },
    { id: "2", name: "Quiz Master", description: "Completou o Fan DNA Quiz", icon: <Star className="h-4 w-4" /> },
    { id: "3", name: "Predictor", description: "Acertou 10 previsões de partidas", icon: <Medal className="h-4 w-4" /> },
  ],
  stats: {
    messagesCount: 1245,
    commandsUsed: 387,
    predictionsCount: 42,
    predictionsCorrect: 28,
    quizCompleted: 1,
    hypeEmotes: 156,
  },
  scores: {
    estrategia: 75,
    competitivo: 60,
    fiel: 85,
    analitico: 45,
    apaixonado: 90,
  },
  recentActivity: [
    { id: "1", type: "message", content: "Mandou uma mensagem no chat", time: "Hoje, 14:32" },
    { id: "2", type: "command", content: "Usou o comando /stats", time: "Hoje, 14:30" },
    { id: "3", type: "prediction", content: "Fez uma previsão para FURIA vs Liquid", time: "Hoje, 14:25" },
    { id: "4", type: "quiz", content: "Completou o Fan DNA Quiz", time: "Ontem, 19:45" },
    { id: "5", type: "emote", content: "Enviou 5 emotes durante a partida", time: "Ontem, 18:20" },
  ],
};

const traitDescriptions = {
  estrategia: "Você valoriza a estratégia e o planejamento. Analisa cada jogada e entende as táticas por trás das decisões.",
  competitivo: "Você torce com intensidade e quer ver seu time dominando os adversários. A vitória é o que mais importa.",
  fiel: "Você acompanha nos bons e maus momentos, mantendo a lealdade ao time independente dos resultados.",
  analitico: "Você observa estatísticas e detalhes técnicos, buscando entender o jogo em um nível mais profundo.",
  apaixonado: "Você vive cada emoção do jogo intensamente, com entrega total e paixão incondicional pelo time.",
};

const traitColors = {
  estrategia: "text-blue-400",
  competitivo: "text-red-400",
  fiel: "text-green-400",
  analitico: "text-purple-400",
  apaixonado: "text-pink-400",
};

export const Perfil = () => {
  const [activeTab, setActiveTab] = useState("info");
  const dominantTrait = Object.entries(profileData.scores).sort((a, b) => b[1] - a[1])[0][0];

  // Prepara os dados para o RadarChart
  const radarData = [
    { trait: "Estratégia", value: profileData.scores.estrategia },
    { trait: "Competitivo", value: profileData.scores.competitivo },
    { trait: "Fiel", value: profileData.scores.fiel },
    { trait: "Analítico", value: profileData.scores.analitico },
    { trait: "Apaixonado", value: profileData.scores.apaixonado },
  ];

  return (
    <div className="w-full text-white p-4">
      {/* Seção de perfil */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="flex flex-col items-center">
          <img 
            src={profileData.avatarUrl} 
            alt="Avatar" 
            className="w-24 h-24 rounded-full border-2 border-yellow-400 object-cover mb-4" 
          />
          <Button variant="outline" className="w-full border-gray-700">
            Alterar Avatar
          </Button>
        </div>

        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{profileData.name}</h1>
          <div className="text-yellow-400 font-medium mb-4">Nível {profileData.level}</div>

          {/* Barra de XP */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>
                XP: {profileData.xp}/{profileData.nextLevelXp}
              </span>
              <span>{Math.round((profileData.xp / profileData.nextLevelXp) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-yellow-500 h-2.5 rounded-full"
                style={{ width: `${(profileData.xp / profileData.nextLevelXp) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-4">
            {profileData.badges.map((badge) => (
              <Badge key={badge.id} variant="outline" className="flex items-center gap-1 py-1 border-yellow-500/50">
                {badge.icon}
                {badge.name}
              </Badge>
            ))}
          </div>

          <div className="text-sm text-gray-400">
            <Calendar className="inline-block mr-1 h-4 w-4" />
            Membro desde {profileData.joinDate}
          </div>
        </div>
      </div>

      <Tabs defaultValue="info" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="info">
            Informações
          </TabsTrigger>
          <TabsTrigger value="stats">
            Estatísticas
          </TabsTrigger>
          <TabsTrigger value="activity">
            Atividade
          </TabsTrigger>
        </TabsList>

        <TabsContent value="info">
          <div className="bg-[#161717] p-6 rounded-lg mb-6">
            <h2 className={`text-xl font-bold mb-4 ${traitColors[dominantTrait as keyof typeof traitColors]} capitalize`}>
              Seu perfil dominante: {dominantTrait}
            </h2>
            <div className="h-64 flex items-center justify-center">
              <RadarChart 
                data={radarData} 
                width={400} 
                height={300} 
              />
            </div>
          </div>

          {/* Seção de traços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {Object.entries(traitDescriptions).map(([trait, desc]) => (
              <div 
                key={trait} 
                className="bg-[#161717] p-4 rounded-lg hover:bg-[#1e1f1f] transition"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-3 h-3 rounded-full ${traitColors[trait as keyof typeof traitColors].replace('text', 'bg')}`} />
                  <h3 className={`font-bold capitalize ${traitColors[trait as keyof typeof traitColors]}`}>
                    {trait} ({profileData.scores[trait as keyof typeof profileData.scores]}%)
                  </h3>
                </div>
                <p className="text-sm text-gray-300">{desc}</p>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stats">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card Interações */}
            <div className="bg-[#161717] p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="h-5 w-5 text-yellow-400" />
                <h3 className="text-lg font-bold">Interações</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mensagens</span>
                  <span>{profileData.stats.messagesCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Comandos</span>
                  <span>{profileData.stats.commandsUsed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emotes</span>
                  <span>{profileData.stats.hypeEmotes}</span>
                </div>
              </div>
            </div>

            {/* Card Previsões */}
            <div className="bg-[#161717] p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-5 w-5 text-yellow-400" />
                <h3 className="text-lg font-bold">Previsões</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total</span>
                  <span>{profileData.stats.predictionsCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Corretas</span>
                  <span>{profileData.stats.predictionsCorrect}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Taxa de Acerto</span>
                  <span>
                    {Math.round((profileData.stats.predictionsCorrect / profileData.stats.predictionsCount) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Card Participação */}
            <div className="bg-[#161717] p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-yellow-400" />
                <h3 className="text-lg font-bold">Participação</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Quiz Completado</span>
                  <span>{profileData.stats.quizCompleted}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Badges</span>
                  <span>{profileData.badges.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nível</span>
                  <span>{profileData.level}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <div className="bg-[#161717] p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Atividade Recente</h2>
            <div className="space-y-4">
              {profileData.recentActivity.map((activity) => (
                <div key={activity.id} className="flex justify-between items-center p-3 rounded-md hover:bg-[#1e1f1f]">
                  <div className="flex items-center gap-3">
                    {activity.type === "message" && <MessageSquare className="h-5 w-5 text-blue-400" />}
                    {activity.type === "command" && <Terminal className="h-5 w-5 text-green-400" />}
                    {activity.type === "prediction" && <Trophy className="h-5 w-5 text-yellow-400" />}
                    {activity.type === "quiz" && <HelpCircle className="h-5 w-5 text-purple-400" />}
                    {activity.type === "emote" && <Flame className="h-5 w-5 text-red-400" />}
                    <div>{activity.content}</div>
                  </div>
                  <div className="text-xs text-gray-400">{activity.time}</div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4 border-gray-700">
              Ver Mais Atividades
            </Button>
          </div>
        </TabsContent>
      </Tabs>

      {/* Ações */}
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" className="border-gray-700">
          Editar Perfil
        </Button>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
          Refazer Quiz
        </Button>
      </div>
    </div>
  );
};