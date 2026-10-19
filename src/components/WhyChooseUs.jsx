import { Leaf, UtensilsCrossed, Clock3, HeartHandshake } from "lucide-react";

const features = [
  {
    title: "Pure Vegetarian",
    description: "Fresh vegetarian dishes prepared with care and respect for traditional dietary practices.",
    icon: Leaf,
  },
  {
    title: "Traditional Taste",
    description: "Classic South Indian and Udupi-inspired flavours that remind you of home.",
    icon: UtensilsCrossed,
  },
  {
    title: "Fresh Everyday",
    description: "Serving hot breakfast, tiffin specials, hearty lunches, and evening favourites.",
    icon: Clock3,
  },
  {
    title: "Homely Hospitality",
    description: "Simple, delicious food served with genuine warmth and a welcoming smile.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-cream relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-green mb-4">
            Why Dine With Us
          </h2>
          <p className="text-brand-text/70 max-w-2xl mx-auto">
            We believe in keeping things simple: good food, clean environment, and traditional recipes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-brand-bg rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow border border-brand-gold/10 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/5 text-brand-green mb-6 group-hover:bg-brand-green group-hover:text-brand-gold transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-text/70 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
