import { useState, KeyboardEvent, ChangeEvent } from 'react';

interface InputProps {
  onSend?: (message: string) => void;
  className?: string;
  placeholder?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const Input = ({
  onSend,
  className = "",
  placeholder = "DIGITE AQUI...",
  type = "text",
  value = "",
  name= "",
  onChange,
  onKeyDown
}: InputProps) => {
  const handleSend = () => {
    if (onSend && value.trim()) {
      onSend(value);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSend) {
      handleSend();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div className={`flex items-center bg-[#111] rounded border border-gray-700 px-3 py-2 w-full ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-gray-500"
      />
      {onSend && (
        <button
          onClick={handleSend}
          className="ml-2 text-yellow-400 text-lg font-bold hover:text-yellow-300"
        >
          &gt;
        </button>
      )}
    </div>
  );
};
