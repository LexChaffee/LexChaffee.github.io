import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-24">
        <section className="section-spacing container-width">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Interested in collaborating on data science projects or discussing analytics opportunities? I'd love to hear from you.
            </p>
            
            <div className="space-y-6">
              <a
                href="mailto:lexchaffee405@gmail.com"
                className="flex items-center justify-center gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Mail className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">lexchaffee405@gmail.com</p>
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/alexanderchaffee/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">LinkedIn</h3>
                  <p className="text-muted-foreground">Connect professionally</p>
                </div>
              </a>
              
              <a
                href="https://github.com/lexchaffee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-6 h-6 text-primary" />
                <div className="text-left">
                  <h3 className="font-semibold text-lg">GitHub</h3>
                  <p className="text-muted-foreground">View my code</p>
  </div>
</a>
</div> 

</section>
</main>

<Footer />
</div>
);

export default Contact;