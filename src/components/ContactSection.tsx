import { useState } from "react";
import { Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    collaboration: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Collaboration Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0ACollaboration Details:%0D%0A${formData.collaboration}`;
    
    window.location.href = `mailto:trevie89@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    toast({
      title: "Email client opened",
      description: "Please send the email from your email client to complete the submission.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on AI/ML projects? Let's connect!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+256701234567" className="font-medium hover:text-primary transition-colors">
                        +256 70 123 4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:trevie89@gmail.com" className="font-medium hover:text-primary transition-colors">
                        trevie89@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg border border-primary/20">
                <h4 className="font-semibold mb-2">Open to Opportunities</h4>
                <p className="text-sm text-muted-foreground">
                  I'm currently available for freelance projects, consulting, and full-time positions 
                  in ML/AI engineering roles.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collaboration">Possible Collaboration</Label>
                  <Textarea
                    id="collaboration"
                    name="collaboration"
                    placeholder="Describe the project or collaboration you have in mind..."
                    rows={4}
                    value={formData.collaboration}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
