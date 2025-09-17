// RUTA: components/ContactForm.tsx

"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  // Usamos el hook de Formspree con tu identificador único
  const [state, handleSubmit] = useForm("xjkeqopg");

  // Si el formulario se envió con éxito, podemos mostrar un mensaje
  // o incluso todo el formulario de nuevo. Para mantenerlo como lo tenías,
  // el estado "succeeded" mostrará el mensaje de éxito más abajo.
  // Si quisieras ocultar el formulario después de enviar, aquí pondrías:
  // if (state.succeeded) { return <p>¡Gracias por tu mensaje!</p>; }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          name="name" // El atributo 'name' es importante para que Formspree lo reconozca
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
          name="email" // Atributo 'name'
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
          name="message" // Atributo 'name'
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
          disabled={state.submitting} // Usamos state.submitting de Formspree
          className="inline-flex items-center rounded-lg bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800 disabled:bg-neutral-400"
        >
          {state.submitting ? "Enviando…" : "Enviar mensaje"}
        </button>

        {/* El mensaje de éxito y error ahora dependen del estado de Formspree */}
        {state.succeeded && (
          <span className="text-sm text-green-600">¡Mensaje enviado!</span>
        )}
        {/* Mostramos un error genérico si hay algún problema */}
        {state.errors.length > 0 && !state.succeeded && (
          <span className="text-sm text-rose-600">
            Error al enviar. Intenta otra vez.
          </span>
        )}
      </div>
    </form>
  );
}
