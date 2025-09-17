// RUTA: components/ContactForm.tsx

"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkeqopg");

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          className="mt-1 text-sm text-rose-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Correo
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="mt-1 text-sm text-rose-600"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 focus:border-fuchsia-500 focus:ring-fuchsia-500"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="mt-1 text-sm text-rose-600"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 disabled:bg-neutral-400"
        >
          {state.submitting ? "Enviando…" : "Enviar mensaje"}
        </button>

        {state.succeeded && (
          <span className="text-sm text-green-600">¡Mensaje enviado!</span>
        )}
        
        {/* LÍNEA CORREGIDA FINAL */}
        {state.errors && !state.succeeded && (
          <span className="text-sm text-rose-600">
            Error al enviar. Intenta otra vez.
          </span>
        )}
      </div>
    </form>
  );
}
