const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-border">
      {/* CTA */}
      <div className="flex flex-col items-center justify-center px-8 py-32 text-center md:py-40">
        <a
          href="mailto:info@posi.co.kr"
          className="group inline-block"
        >
          <span className="text-heading text-foreground transition-colors group-hover:text-accent">
            CONTACT US
          </span>
        </a>
        <p className="mt-6 text-sm font-light tracking-[0.2em] text-muted-foreground">
          WORK TOGETHER
        </p>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-8 py-12 md:px-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Menu */}
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-muted-foreground">
              MENU
            </p>
            <div className="flex flex-col gap-3">
              {["WORK", "ABOUT", "SERVICES", "CONTACT"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-light text-foreground/60 transition-colors hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <p className="mb-4 text-xs tracking-[0.2em] text-muted-foreground">
              CONTACTS
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@posi.co.kr"
                className="text-sm font-light text-foreground/60 transition-colors hover:text-foreground"
              >
                INFO@POSI.CO.KR
              </a>
              <p className="text-sm font-light text-foreground/60">
                서울특별시 성동구 성수동
              </p>
            </div>
          </div>

          {/* Brand */}
          <div className="flex flex-col justify-between">
            <p className="text-sm font-light text-foreground/40">
              SINCE 1972
            </p>
            <p className="mt-4 text-xs text-foreground/30">
              © 2024 POSI Design Solution Group.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs tracking-[0.3em] text-foreground/20">
            POSI DESIGN.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
