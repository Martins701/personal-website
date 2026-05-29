import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-gray-500">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [state, handleSubmit] = useForm("mwvzrjrr");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    await handleSubmit(e);

    if (!state.errors?.length) {
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      {/* ── Contact Section ── */}
      <section className="w-full bg-white py-16 sm:py-20 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* LEFT: Info */}
          <div className="flex-1 max-w-sm">
            <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Let's work together
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              I'm currently available for freelance work.
              <br />Feel free to reach out to me!
            </p>

            {/* Contact details */}
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <MailIcon />
                <span className="text-gray-700 text-sm font-medium">hello@martins.dev</span>
              </li>
              <li className="flex items-center gap-3">
                <LocationIcon />
                <span className="text-gray-700 text-sm font-medium">Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm font-medium">Available for work</span>
              </li>
            </ul>
          </div>

          {/* RIGHT: Form */}
          <div className="flex-[1.4]">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">

              {/* Name + Email row */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Submit */}
              <div>
                <button
                      type="submit"
                      disabled={state.submitting}
                      className={`flex items-center gap-2 text-white font-semibold px-7 py-3 rounded-xl transition-colors duration-200 text-sm disabled:opacity-70 ${
                        state.succeeded
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800"
                      }`}
                    >
                      {state.succeeded ? "Message Sent!" : "Send Message"}
                      <SendIcon />
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
    </>
  );
};

export default Contact;