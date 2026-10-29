import { useState } from "react";
import { assets } from "../assets/assets";

const inputClass =
  "mt-1 h-9 w-full border border-neutral-400 bg-white px-2 font-['Montserrat'] text-sm outline-none transition-colors focus:border-[#fa2119]";

const Required = () => (
  <span className="ml-1 text-[13px] text-neutral-500">(required)</span>
);

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: اربطه بالـ backend أو EmailJS / Formspree
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } });
      await new Promise((r) => setTimeout(r, 800));
      setForm({ firstName: "", lastName: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white px-8 py-16 font-['Montserrat'] md:py-24 lg:px-[78px]"
    >
      <div className="mx-auto grid items-center gap-12 md:grid-cols-2 md:gap-4">
        {/* image */}
        <div className="flex justify-center">
          <img
            src={assets.eboo}
            alt="Ahmed Adel holding a cat"
            className="w-full max-w-[300px] object-contain md:max-w-[420px]"
          />
        </div>

        {/* الفورم */}
        <div>
          <h2 className="relative inline-block font-londrina uppercase font-medium text-5xl leading-none tracking-wide text-[#fa2119]">
            Get in touch
            <svg
              viewBox="0 0 150 20"
              className="absolute -bottom-5 -right-5 w-[150px]"
              fill="none"
              stroke="#fa2119"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M2 14 L16 9 L30 12 L46 6 L62 11 L78 5 L92 10 L108 4 L122 11 L148 7" />
            </svg>
          </h2>

          <form onSubmit={onSubmit} className="mt-14 space-y-6">
            <fieldset>
              <legend className="text-[15px]">Name</legend>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                <label className="block text-[13px]">
                  First Name
                  <Required />
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    required
                    autoComplete="given-name"
                    className={inputClass}
                  />
                </label>
                <label className="block text-[13px]">
                  Last Name
                  <Required />
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                    required
                    autoComplete="family-name"
                    className={inputClass}
                  />
                </label>
              </div>
            </fieldset>

            <label className="block text-[15px]">
              Email
              <Required />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                autoComplete="email"
                className={inputClass}
              />
            </label>

            <label className="block text-[15px]">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={4}
                className="mt-1 w-full resize-y border border-neutral-400 bg-white p-2 text-sm outline-none transition-colors focus:border-[#fa2119]"
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#fa2119] px-5 py-[18px] text-[15px] uppercase leading-none text-white transition-opacity hover:opacity-85 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>

              <p role="status" className="text-sm">
                {status === "sent" && "Thank you! Your message has been sent."}
                {status === "error" &&
                  "Something went wrong. Please try again."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
