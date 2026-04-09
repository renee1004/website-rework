import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", tel: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", tel: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-between py-24 px-8 md:px-16 lg:px-24 border-t border-white/10">
      <div>
        <p className="text-xs tracking-[0.3em] text-foreground/40 uppercase">05 — Contact</p>
      </div>

      <div className="flex-1 flex items-center py-16">
        <div className="grid md:grid-cols-2 gap-16 w-full">

          {/* 왼쪽 */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-none mb-8">
              {"Let's"}<br />
              <span className="text-foreground/30">work</span><br />
              together.
            </h2>
            <p className="text-xs text-foreground/40 tracking-widest mt-6">posi@posi.co.kr</p>
          </div>

          {/* 오른쪽 — 폼 */}
          <div className="flex flex-col justify-center">
            {sent ? (
              <p className="text-sm tracking-[0.2em] text-foreground/60 py-8">문의가 접수되었습니다. 감사합니다.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                {[
                  { key: "name", label: "NAME", type: "text", placeholder: "" },
                  { key: "tel", label: "TEL", type: "tel", placeholder: "" },
                  { key: "email", label: "E-MAIL", type: "email", placeholder: "" },
                  { key: "subject", label: "SUBJECT", type: "text", placeholder: "" },
                ].map(({ key, label, type }) => (
                  <input
                    key={key}
                    type={type}
                    required={key !== "tel"}
                    placeholder={label}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="bg-white/5 border border-white/10 px-4 py-3 text-xs text-foreground placeho
