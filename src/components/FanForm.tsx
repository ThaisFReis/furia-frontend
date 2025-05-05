import React, { useState } from "react";

const interestsList = [
  "CS:GO",
  "Valorant",
  "League of Legends",
  "FIFA",
  "Fortnite",
];
const eventOptions = [
  "IEM Rio Major",
  "Meet & Greet FURIA",
  "Watch Party",
  "Game XP",
  "Outro",
];
const purchaseOptions = [
  "Camiseta oficial",
  "Ingressos para eventos",
  "Produtos na loja online",
  "Assinatura FURIA+",
  "Outro",
];

export const FanForm = () => {
  const savedForm = localStorage.getItem("fanForm");
  const [form, setForm] = useState(() =>
    savedForm
      ? JSON.parse(savedForm)
      : {
          name: localStorage.getItem("name") || "",
          cpf: localStorage.getItem("storedCpf") || "",
          email: localStorage.getItem("userEmail") || "",
          address: "",
          username: "",
          interests: [],
          events: [],
          customEvent: "",
          purchases: [],
          customPurchase: "",
          socials: "",
          document: null,
        }
  );

  const handleCheckbox = (name: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [name]: prev[name as keyof typeof form].includes(value)
        ? (prev[name as keyof typeof form] as string[]).filter(
            (item) => item !== value
          )
        : [...(prev[name as keyof typeof form] as string[]), value],
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Salva os dados no localStorage
    localStorage.setItem("fanForm", JSON.stringify(form));

    console.log("Dados enviados:", form);
    alert("Dados enviados com sucesso!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-white shadow-lg mx-auto mt-10 bg-[#161717] p-6 rounded-lg mb-6 max-w-4xl"
    >
      {/* Grid para inputs simples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome completo"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          readOnly
        />
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Nome de usuário"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          required
        />
        <input
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
          placeholder="CPF"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          readOnly
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          required
          type="email"
          readOnly
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Endereço"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          required
        />
        <input
          name="socials"
          value={form.socials}
          onChange={handleChange}
          placeholder="Links de redes sociais"
          className="w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
        />
      </div>

      {/* Interesses */}
      <div className="mt-6">
        <p className="font-medium">Interesses:</p>
        <div className="flex flex-wrap gap-3 mt-2">
          {interestsList.map((interest) => (
            <label key={interest} className="flex items-center gap-1">
              <input
                type="checkbox"
                className="accent-purple-600"
                checked={form.interests.includes(interest)}
                onChange={() => handleCheckbox("interests", interest)}
              />
              {interest}
            </label>
          ))}
        </div>
      </div>

      {/* Eventos */}
      <div className="mt-6">
        <p className="font-medium">Eventos que participou:</p>
        <div className="flex flex-col gap-1 mt-2">
          {eventOptions.map((event) => (
            <label key={event} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-purple-600"
                checked={form.events.includes(event)}
                onChange={() => handleCheckbox("events", event)}
              />
              {event}
            </label>
          ))}
        </div>
        {form.events.includes("Outro") && (
          <input
            name="customEvent"
            value={form.customEvent}
            onChange={handleChange}
            placeholder="Descreva outro evento"
            className="mt-2 w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          />
        )}
      </div>

      {/* Compras */}
      <div className="mt-6">
        <p className="font-medium">Compras relacionadas:</p>
        <div className="flex flex-col gap-1 mt-2">
          {purchaseOptions.map((purchase) => (
            <label key={purchase} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-purple-600"
                checked={form.purchases.includes(purchase)}
                onChange={() => handleCheckbox("purchases", purchase)}
              />
              {purchase}
            </label>
          ))}
        </div>
        {form.purchases.includes("Outro") && (
          <input
            name="customPurchase"
            value={form.customPurchase}
            onChange={handleChange}
            placeholder="Descreva outra compra"
            className="mt-2 w-full p-2 bg-neutral-900 border border-neutral-700 rounded-md"
          />
        )}
      </div>

      <button
        type="submit"
        className="bg-purple-700 hover:bg-purple-800 px-4 py-2 rounded-md w-full mt-6"
      >
        Enviar
      </button>
    </form>
  );
};
