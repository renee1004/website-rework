import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative min-h-screen flex flex-col justify-between py-24 px-8 md:px-16 lg:px-24 border-t border-white/10">
      <div>
        <p className="text-xs tracking-[0.3em] text-foreground/40 uppercase">05 — Contact</p>
      </div>
      <div className="flex-1 flex items-center py-16">
        <div className="grid md:grid-cols-2 gap-16 w-full">
          <div className="flex flex-col justify-center">
            <h2 className="text-display text-foreground leading-none mb-8">
              {"Let's"}<br />
              <span className="text-foreground/30">work</span><br />
              together.
            </h2>
            <p className="text-sm text-foreground/40 tracking-widest mt-4">posi@posi.co.kr</p>
          </div>
          <div className="flex flex-col justify-center">
            {sent ? (
              <p className="text-sm tracking-[0.2em] text-foreground/60">문의가 접수되었습니다. 감사합니다.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.2em] text-foreground/40 uppercase">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-transparent border-b border-white/20 py-3 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-white/60 transition-colors tracking-widest"
                    placeholder="홍길동"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.2em] text-foreground/40 uppercase">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-transparent border-b border-white/20 py-3 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-white/60 transition-colors tracking-widest"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-[0.2em] text-foreground/40 uppercase">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent border-b border-white/20 py-3 text-sm text-foreground placeholder:text-foreground/20 focus:outline-none focus:border-white/60 transition-colors tracking-widest resize-none"
                    placeholder="문의 내용을 입력해 주세요."
                  />
                </div>
                <button type="submit" className="self-start inline-flex items-center gap-4 group mt-2">
                  <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-lg">
                    →
                  </span>
                  <span className="text-xs tracking-[0.2em] text-foreground/60 group-hover:text-foreground transition-colors uppercase">
                    Send
                  </span>
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
        <p className="text-xs text-foreground/20 tracking-widest">© 2025 RENEE. ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
};

export default ContactSection;
