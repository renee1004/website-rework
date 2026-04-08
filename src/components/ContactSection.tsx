const ContactSection = () => {
  return (
    <section id="contact" className="border-t border-border px-8 py-32 md:px-16 lg:px-24">
      <div className="grid gap-16 md:grid-cols-2">
        <div>
          <p className="text-subheading text-accent mb-2">CONTACT</p>
          <h2 className="text-heading">LET'S<br />WORK<br />TOGETHER.</h2>
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground mb-2">ADDRESS</p>
            <p className="text-base font-light text-foreground">
              서울특별시 성동구 성수동
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest text-muted-foreground mb-2">EMAIL</p>
            <a href="mailto:info@posi.co.kr" className="text-base font-light text-foreground transition-colors hover:text-accent">
              info@posi.co.kr
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest text-muted-foreground mb-2">SOCIAL</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/posiinc/" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-foreground transition-colors hover:text-accent">
                Instagram
              </a>
              <a href="https://www.facebook.com/POSI-114542383734724/" target="_blank" rel="noopener noreferrer" className="text-sm font-light text-foreground transition-colors hover:text-accent">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
        <p className="text-xs text-muted-foreground">
          © 2024 POSI Design Solution Group. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          SINCE 1972
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
