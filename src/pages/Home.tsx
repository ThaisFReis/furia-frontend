import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TextInput } from "@/components/ui/TextInput";
import { botResponses, dynamicResponses } from "@/data/botResponses";

type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate(); // necessário para limpar o state
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: botResponses["/help"],
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  // Efeito para comandos automáticos vindos da página de comandos
  // Processa comando automático apenas uma vez
  useEffect(() => {
    const autoCommand = location.state?.autoCommand;
    if (autoCommand) {
      const userMessage: Message = {
        id: crypto.randomUUID(),
        text: autoCommand,
        sender: "user",
        timestamp: new Date(),
      };

      const botMessage: Message = {
        id: crypto.randomUUID(),
        text: botResponses[autoCommand] || "Desculpe, não entendi o comando.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage, botMessage]);

      // Limpa o state para evitar múltiplas execuções
      navigate(location.pathname, { replace: true });
    }
  }, [location.state, navigate, location.pathname]);

  const processCommand = (text: string) => {
    // Adiciona mensagem do usuário
    const userMessage: Message = {
      id: `${Date.now()}-user`,
      text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Atualiza o histórico
    updateCommandHistory(text);

    // Prepara resposta do bot
    setTimeout(() => {
      let responseText = text.startsWith("/stats")
        ? dynamicResponses["/stats"](text.split(" ")[1] || "")
        : botResponses[text] || botResponses["default"];

      const botMessage: Message = {
        id: `${Date.now()}-bot`,
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 500);
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    processCommand(text);
  };

  const updateCommandHistory = (command: string) => {
    const history = JSON.parse(
      localStorage.getItem("furiaChatHistory") || "[]"
    );
    const newHistory = [
      { command, timestamp: Date.now() },
      ...history.slice(0, 9),
    ];
    localStorage.setItem("furiaChatHistory", JSON.stringify(newHistory));
  };

  const quickCommands = [
    "/news",
    "/elenco",
    "/proximojogo",
    "/vaifuria",
    "/quiz",
    "/clip",
    "/curiosidade",
  ];

  return (
    <div className="w-full min-h-screen flex flex-col p-8 text-white relative">
      <div className="w-full h-[700px] rounded-xl p-4 flex flex-col justify-between">
        <div className="flex flex-col gap-4 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`max-w-[90%] text-sm px-4 py-2 rounded-md ${
                message.sender === "user"
                  ? "self-end bg-[#0F0F0F] border border-yellow-400/20"
                  : "self-start bg-[#1C2B27] text-green-300 border border-green-400/20"
              } whitespace-pre-wrap break-words`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="w-full">
          <TextInput
            onSend={handleSendMessage}
            placeholder="Digite um comando (/help para ajuda)..."
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleSendMessage(cmd)}
              className="bg-[#222] px-3 py-1 rounded-md text-xs text-yellow-400 font-mono hover:bg-[#333] transition border border-yellow-400/20 hover:border-yellow-400/50"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
