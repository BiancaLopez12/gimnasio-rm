// app/formulario/page.tsx
"use client";

import { useState } from "react";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090"); // URL de tu PocketBase

export default function FormularioPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await pb.collection("formularios").create(form);
      setSuccess(true);
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      console.error("Error al enviar:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-8">
      <button
        onClick={() => setOpen("form1")}
        className="bg-blue-500 text-white px-6 py-2 rounded-xl shadow-lg"
      >
        Abrir Formulario 1
      </button>

      <button
        onClick={() => setOpen("form2")}
        className="bg-green-500 text-white px-6 py-2 rounded-xl shadow-lg"
      >
        Abrir Formulario 2
      </button>

      {open && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-lg w-96"
        >
          <h2 className="text-xl font-bold">
            {open === "form1" ? "Formulario 1" : "Formulario 2"}
          </h2>

          <input
            type="text"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="border rounded p-2"
            required
          />
          <input
            type="email"
            placeholder="Tu email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="border rounded p-2"
            required
          />
          <textarea
            placeholder="Escribe tu mensaje"
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            className="border rounded p-2"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white py-2 rounded-lg"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>

          {success && <p className="text-green-600">✅ Enviado con éxito</p>}
        </form>
      )}
    </div>
  );
}
