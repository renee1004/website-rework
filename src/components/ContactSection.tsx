const ContactSection = () => (
    <section id="contact" className="relative min-h-screen flex flex-col justify-between py-24 px-8 md:px-16 lg:px-24 border-t border-white/10">
      <div>
        <p className="text-xs tracking-[0.3em] text-foreground/40 uppercase">05 — Contact</p>
      </div>
      <div className="flex-1 flex items-center py-16">
        <div>
          <h2 className="text-display text-foreground leading-none mb-12">
            Let's<br />
            <span className="text-foreground/30">work</span><br />
            together.
          </h2>
          <a href="mailto:hello@renee.kr" className="inline-flex items-center gap-4 group">
            <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 text-lg">
              →
            </span>
            <span className="text-subheading text-foreground/60 group-hover:text-foreground transition-colors duration-300 tracking-[0.2em]">
              hello@renee.kr
            </span>
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div className="flex gap-6">
          {["Instagram", "Behance", "LinkedIn"].map((sns) => (
            <a key={sns} href="#" className="text-xs text-foreground/50 hover:text-foreground transition-colors tracking-widest uppercase">
              {sns}
            </a>
          ))}
        </div>
        <p className="text-xs text-foreground/20 tracking-widest">© 2025 RENEE. ALL RIGHTS RESERVED.</p>
      </div>
    </section>
  );
  
  export default ContactSection;