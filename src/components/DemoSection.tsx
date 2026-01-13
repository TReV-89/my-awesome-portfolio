import { ExternalLink } from "lucide-react";
import { useState } from "react";

const DemoSection = () => {
  // Replace this with your actual Streamlit app URL
  const streamlitUrl = "http://68.183.77.105/";
  const [isLoading, setIsLoading] = useState(true);


  return (
    <section id="demo" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="mb-8">
          <p className="font-mono text-sm text-muted-foreground mb-4">Interactive</p>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-light mb-2">Ask about my experience</h2>
              <p className="text-muted-foreground text-sm max-w-md">
                Chat with an AI-powered assistant that knows my CV. Ask about my skills, 
                projects, or experience.
              </p>
            </div>
            <a
              href={streamlitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Open in new tab
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
  
        {/* Streamlit Embed */}
        <div className="border border-border bg-card">
          <iframe
            src={streamlitUrl}
            title="CV Chat Assistant"
            className="w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-500"
            style={{ border: "none" }}
            allow="clipboard-write"
            onLoad ={() => setIsLoading(false)}
            loading="eager"
            sandbox="allow-same-origin allow-scripts allow-forms"
          />
        </div>

        <p className="text-xs text-muted-foreground mt-4">
          Powered by RAG and Streamlit.
        </p>
      </div>
    </section>
  );
};

export default DemoSection;
