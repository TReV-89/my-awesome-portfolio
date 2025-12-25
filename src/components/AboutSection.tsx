const AboutSection = () => {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-sm text-muted-foreground mb-4">About</p>
          
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm an MLOps engineer focused on bridging the gap between machine 
              learning research and production systems. I build infrastructure 
              that makes ML workflows reproducible, scalable, and maintainable.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With experience across cloud platforms and ML frameworks, I specialize 
              in designing CI/CD pipelines for ML, implementing model monitoring 
              solutions, and optimizing inference at scale. I believe in automation, 
              observability, and treating ML systems with the same rigor as 
              traditional software.
            </p>

            <div className="pt-8 border-t border-border">
              <p className="font-mono text-sm text-muted-foreground mb-4">Stack</p>
              <p className="text-sm text-muted-foreground">
                Python · Kubernetes · Docker · MLflow · Kubeflow · Airflow · 
                TensorFlow · PyTorch · AWS · GCP · Terraform · Prometheus · Grafana
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
