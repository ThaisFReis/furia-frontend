import { useState, KeyboardEvent } from 'react';

interface TextInputProps {
  onSend: (message: string) => void;
  className?: string;
  placeholder?: string;
}

export const TextInput = ({ onSend, className = "", placeholder = "DIGITE AQUI..." }: TextInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={`flex items-center bg-[#111] rounded border border-gray-700 px-3 py-2 w-full ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
      />
      <button
        onClick={handleSend}
        className="ml-2 text-yellow-400 text-lg font-bold hover:text-yellow-300"
      >
        &gt;
      </button>
    </div>
  );
};