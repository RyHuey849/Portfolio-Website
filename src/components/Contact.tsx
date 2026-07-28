"use client";

import { useActionState } from "react";

type ContactValues = {
  name: string;
  email: string;
  message: string;
};

type ContactState = {
  status: "idle" | "error" | "success";
  message: string;
  /** Echoed back so a failed submit does not wipe what was typed. */
  values: ContactValues;
};

const emptyValues: ContactValues = { name: "", email: "", message: "" };

const initialState: ContactState = {
  status: "idle",
  message: "",
  values: emptyValues,
};

const fieldClassName =
  "w-full rounded-lg border border-black/[.08] bg-transparent px-3 py-2 text-sm text-black outline-none transition-colors placeholder:text-zinc-400 focus:border-black/[.3] dark:border-white/[.145] dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-white/[.4]";

const labelClassName =
  "text-sm font-medium text-black dark:text-zinc-50";

async function submitContact(
  _previousState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values: ContactValues = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  if (!values.name || !values.email || !values.message) {
    return {
      status: "error",
      message: "Please fill out every field.",
      values,
    };
  }

  // TODO: send `values` to a real endpoint (Server Action, route handler, or
  // form service). Until then the submit only reports success locally.
  return {
    status: "success",
    message: "Thanks — your message is on its way.",
    values: emptyValues,
  };
}

export default function Contact() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState,
  );

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto flex w-full max-w-5xl scroll-mt-16 flex-col px-6 py-24"
    >
      <h2
        id="contact-heading"
        className="text-4xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-5xl"
      >
        Contact
      </h2>

      <form action={formAction} className="mt-12 flex w-full max-w-xl flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className={labelClassName}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            defaultValue={state.values.name}
            placeholder="Your name"
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={labelClassName}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={state.values.email}
            placeholder="you@example.com"
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className={labelClassName}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            defaultValue={state.values.message}
            placeholder="What would you like to talk about?"
            className={`${fieldClassName} resize-y`}
          />
        </div>

        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={pending}
            className="flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-[#383838] disabled:opacity-60 dark:hover:bg-[#ccc]"
          >
            {pending ? "Sending…" : "Send Message"}
          </button>

          <p
            aria-live="polite"
            className={
              state.status === "error"
                ? "text-sm font-medium text-red-600 dark:text-red-400"
                : "text-sm font-medium text-zinc-600 dark:text-zinc-400"
            }
          >
            {state.message}
          </p>
        </div>
      </form>
    </section>
  );
}
