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
        <p className="text-xs tracking-[0.3em] text-foreground/40 uppercase"></p>
      </div>

      <div className="flex-1 flex items-center py-16">
        <div className="grid md:grid-cols-2 gap-16 w-full">

          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-light text-foreground leading-none mb-8">
              {"Let's"}<br />
              <span className="text-foreground/30">work</span><br />
              together.
            </h2>
            {/* ✅ 추가: 화살표 + 이메일 */}
            <div className="flex items-center gap-4 mb-4">
              <a
                href="mailto:posi@posi.co.kr"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 text-sm flex-shrink-0"
              >
                →
              </a>
              <a
                href="mailto:posi@posi.co.kr"
                className="text-xs tracking-[0.2em] text-foreground/60 hover:text-foreground transition-colors duration-300"
              >
                posi@posi.co.kr
              </a>
            </div>
            
            <div className="flex flex-col gap-1 mt-1 text-xs text-foreground/40 tracking-widest">
              <p>(04797) 서울시 성동구 아차산로 11길 10</p>
              <p>T. 02-464-4500&nbsp;&nbsp;F. 02-463-4603</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {sent ? (
              <p className="text-sm tracking-[0.2em] text-foreground/60 py-8">문의가 접수되었습니다. 감사합니다.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                {[
                  { key: "name", label: "NAME", type: "text" },
                  { key: "tel", label: "TEL", type: "tel" },
                  { key: "email", label: "E-MAIL", type: "email" },
                  { key: "subject", label: "SUBJECT", type: "text" },
                ].map(({ key, label, type }) => (
                  <input
                    key={key}
                    type={type}
                    required={key !== "tel"}
                    placeholder={label}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="bg-white/5 border border-white/10 px-4 py-3 text-xs text-foreground placeholder:text-foreground/40 placeholder:tracking-[0.2em] focus:outline-none focus:border-white/40 transition-colors tracking-widest mb-1"
                  />
                ))}
                <textarea
                  required
                  rows={8}
                  placeholder="MESSAGE"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/5 border border-white/10 px-4 py-3 text-xs text-foreground placeholder:text-foreground/40 placeholder:tracking-[0.2em] focus:outline-none focus:border-white/40 transition-colors tracking-widest resize-none mb-1"
                />
                <button
                  type="submit"
                  className="w-full border border-orange-500/70 py-4 text-xs tracking-[0.3em] text-foreground hover:bg-orange-500/10 transition-all duration-300 flex items-center justify-center gap-6 mt-1"
                >
                  SEND MESSAGE
                  <span className="w-8 h-px bg-foreground/40 inline-block"></span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex gap-6">
          <a href="https://www.instagram.com/posiinc/" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/50 hover:text-foreground transition-colors tracking-widest uppercase">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100063991992599" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/50 hover:text-foreground transition-colors tracking-widest uppercase">Facebook</a>
        </div>
        <p className="text-xs text-foreground/20 tracking-widest">© 2025 POSIINCORPORATION. ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
};

export default ContactSection;