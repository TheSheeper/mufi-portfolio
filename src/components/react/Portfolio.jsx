import { useState } from "preact/hooks"
import { cn } from "../../lib/utils"

const categories = ["All", "Illustration", "Branding", "Editorial", "Packaging"]

const portfolioItems = [
  {
    id: 1,
    title: "Botanical Dreams",
    category: "Illustration",
    description: "A series of botanical illustrations for nature magazine",
    color: "from-emerald-100 to-teal-50",
  },
  {
    id: 2,
    title: "Café Sol Identity",
    category: "Branding",
    description: "Complete brand identity for artisan coffee roasters",
    color: "from-amber-100 to-orange-50",
  },
  {
    id: 3,
    title: "Poetry Collection",
    category: "Editorial",
    description: "Book design and illustration for poetry anthology",
    color: "from-rose-100 to-pink-50",
  },
  {
    id: 4,
    title: "Terra Ceramics",
    category: "Packaging",
    description: "Sustainable packaging design for ceramics studio",
    color: "from-stone-200 to-stone-100",
  },
  {
    id: 5,
    title: "Urban Sketches",
    category: "Illustration",
    description: "Cityscape illustrations for travel publication",
    color: "from-blue-100 to-indigo-50",
  },
  {
    id: 6,
    title: "Bloom Floristry",
    category: "Branding",
    description: "Visual identity for luxury flower shop",
    color: "from-fuchsia-100 to-purple-50",
  },
  {
    id: 7,
    title: "Art Magazine",
    category: "Editorial",
    description: "Cover design and spreads for contemporary art magazine",
    color: "from-slate-200 to-gray-100",
  },
  {
    id: 8,
    title: "Olive Oil Series",
    category: "Packaging",
    description: "Premium packaging for Mediterranean olive oil brand",
    color: "from-lime-100 to-green-50",
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl font-medium text-foreground mb-4">
            Selected Work
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8" />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 text-sm rounded-full transition-colors cursor-pointer",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
              <div
                className={cn(
                  "aspect-4/5 rounded-lg overflow-hidden bg-linear-to-br mb-4",
                  item.color
                )}
              >
                <div className="w-full h-full flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-white/50 flex items-center justify-center mb-4">
                      <span className="font-serif text-2xl text-foreground/40">
                        {item.id.toString().padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs tracking-widest uppercase text-foreground/50">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
