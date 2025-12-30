import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/TReV-89", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/tsaaka/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:trevie89@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <p className="font-mono text-sm">applied.ml.engineer</p>
            <p className="text-sm text-muted-foreground">
              Available for opportunities to work on exciting projects!
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
