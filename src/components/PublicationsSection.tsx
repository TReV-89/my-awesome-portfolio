import { FileText, ExternalLink } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  year: number;
  link?: string;
  abstract?: string;
}

const publications: Publication[] = [
  {
    title: "Modelling and Implementation of An Energy Efficient Charging Scheduling Algorithm for A Fleet of Kayoola Electric Buses",
    authors: "Trevor Saaka",
    year: 2025,
    link: "https://dissertations.mak.ac.ug/handle/20.500.12281/20782",
    abstract: "This study proposes an optimized charging and scheduling model for Kayoola electric buses on the Jinja–Iganga route, integrating energy consumption prediction with MILP-based optimization. Using non-linear regression for energy estimation and Gurobi for optimization, the model minimizes fleet size and battery degradation under operational constraints. An optimal charging window of 30%–90% reduced annual battery degradation costs by 32.93% compared to current practices. Future work will explore neural network energy models and scalable optimization for multi-route, multimodal fleets.",
  },
  {
    title: "Sunflower: A New Approach To Expanding Coverage of African Languages in Large Language Models",
    authors: "Benjamin Akera, Evelyn Nafula Ouma, Gilbert Yiga, Patrick Walukagga, Phionah Natukunda, Trevor Saaka, Solomon Nsumba, Lilian Teddy Nabukeera, Joel Muhanguzi, Imran Sekalala, Nimpamya Janat Namara, Engineer Bainomugisha, Ernest Mwebaze, John Quinn",
    year: 2025,
    link: "https://arxiv.org/abs/2510.07203",
    abstract: "There are more than 2000 living languages in Africa, most of which have been bypassed by advances in language technology. Current leading LLMs exhibit strong performance on a number of the most common languages (e.g. Swahili or Yoruba), but prioritise support for the languages with the most speakers first, resulting in piecemeal ability across disparate languages. We contend that a regionally focussed approach is more efficient, and present a case study for Uganda, a country with high linguistic diversity. We describe the development of Sunflower 14B and 32B, a pair of models based on Qwen 3 with state of the art comprehension in the majority of all Ugandan languages. These models are open source and can be used to reduce language barriers in a number of important practical applications.",
  },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Publications</h2>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      {pub.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-primary/80">
                       {pub.year}
                    </p>
                    {pub.abstract && (
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {pub.abstract}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                      aria-label="View publication"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
