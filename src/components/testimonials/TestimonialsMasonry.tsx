"use client";

import React from "react";
import { Star, Sparkles } from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarText: string;
  avatarBg: string;
}

const TESTIMONIALS_DATA: TestimonialItem[] = [
  // Column 1
  {
    id: "1",
    name: "Karthik Subramanian",
    role: "Parent of Kavin (LKG Montessori)",
    quote:
      "Sending Kavin to Dhivith Edu Care was our best decision. The authentic Montessori materials have given him remarkable independence. He counts with golden beads, reads with excitement, and loves school every single day.",
    rating: 5,
    avatarText: "KS",
    avatarBg: "bg-[#0750B8]",
  },
  {
    id: "2",
    name: "Bhuvaneshwari Prakash",
    role: "Parent of Nila (Pre-KG) & Surya (Grade 8)",
    quote:
      "Dhivith Edu Care is a blessing for families in Kinathukadavu. Nila blossomed in the Pre-KG room, while Surya receives outstanding CBSE math coaching in the evening. The individual teacher care is exceptional.",
    rating: 5,
    avatarText: "BP",
    avatarBg: "bg-[#159447]",
  },
  {
    id: "3",
    name: "Suresh & Anitha",
    role: "Parents of Harish (Play Group)",
    quote:
      "Our son took his first joyful steps into school life here. The caring teachers and gentle sensory rhythm made him feel confident from day one.",
    rating: 5,
    avatarText: "SA",
    avatarBg: "bg-[#F36B12]",
  },

  // Column 2
  {
    id: "4",
    name: "Dr. Venkatesh & Divya",
    role: "Parents of Diya (UKG Montessori)",
    quote:
      "The academic foundation Diya received here—especially phonics, arithmetic, and Hindi basics—made her primary school entrance effortless. Mrs. S Tharani and her team treat every child with extraordinary care.",
    rating: 5,
    avatarText: "VD",
    avatarBg: "bg-[#0750B8]",
  },
  {
    id: "5",
    name: "Manoj & Swathi",
    role: "Parents of Aadvik (Day Care Sanctuary)",
    quote:
      "As working parents in Coimbatore, finding a safe, hygienic, and loving day care was our priority. Dhivith Edu Care provides the warmest care, wholesome meals, and lovely daily progress updates.",
    rating: 5,
    avatarText: "MS",
    avatarBg: "bg-[#F5B900]",
  },
  {
    id: "6",
    name: "Saravanan & Priya",
    role: "Parents of Rithanya (Grade 10 CBSE)",
    quote:
      "The tuition classes for 10th standard science and mathematics here are phenomenal. Conceptual clarity and regular test practice improved her board exam confidence significantly.",
    rating: 5,
    avatarText: "SP",
    avatarBg: "bg-[#159447]",
  },

  // Column 3
  {
    id: "7",
    name: "Rajesh Chandrasekhar",
    role: "Parent of Mithun (Pre-KG)",
    quote:
      "From his first classroom walkthrough to everyday Montessori tasks, our son's communication and curiosity have skyrocketed. Truly grateful to the dedicated educators.",
    rating: 5,
    avatarText: "RC",
    avatarBg: "bg-[#159447]",
  },
  {
    id: "8",
    name: "Aliza Khan",
    role: "Parent of Zoya (UKG & Hindi Basics)",
    quote:
      "The language activities, Tamil alphabet puzzles, and English phonics are taught with such passion. The spacious, clean campus in Vadapudur is ideal for young children.",
    rating: 5,
    avatarText: "AK",
    avatarBg: "bg-[#F36B12]",
  },
  {
    id: "9",
    name: "Vignesh Kumar",
    role: "Engineering Mathematics Student",
    quote:
      "Mrs. S Tharani's collegiate engineering mathematics coaching simplified complex calculus and matrices effortlessly. A must-visit academy for high school & engineering students.",
    rating: 5,
    avatarText: "VK",
    avatarBg: "bg-[#0750B8]",
  },
];

import { useLanguage } from "@/context/LanguageContext";

const TestimonialCard: React.FC<{ item: any }> = ({ item }) => (
  <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group">
    <div>
      {/* Bright Yellow Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(item.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-xs"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[13.5px] sm:text-[14.5px] text-gray-700 leading-relaxed mb-6 font-normal">
        {item.quote}
      </p>
    </div>

    {/* Author Row */}
    <div className="pt-4 border-t border-gray-100 flex items-center gap-3.5">
      <div
        className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs`}
      >
        {item.avatarText}
      </div>
      <div className="min-w-0">
        <div className="font-bold text-sm text-[#0F172A] truncate">
          {item.name}
        </div>
        <div className="text-xs text-gray-500 truncate">{item.role}</div>
      </div>
    </div>
  </div>
);

export const TestimonialsMasonry: React.FC = () => {
  const { t } = useLanguage();
  const list = t.testimonials.items || [];
  const col1 = [list[0], list[1], list[2]].filter(Boolean);
  const col2 = [list[3], list[4], list[5]].filter(Boolean);
  const col3 = [list[6], list[7], list[8]].filter(Boolean);

  return (
    <section className="py-20 lg:py-28 bg-[#FAFAFA] border-t border-gray-100 relative overflow-hidden">
      {/* Background subtle ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0750B8]/5 via-[#159447]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#0750B8] text-xs font-bold border border-gray-200/90 shadow-xs mb-4">
            {t.testimonials.badge}
          </div>

          <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl text-[#0F172A] tracking-tight leading-tight">
            {t.testimonials.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-500 mt-3 font-normal">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3-Column Up-Down-Up Continuous Vertical Marquee Container */}
        <div className="relative h-[580px] sm:h-[680px] lg:h-[720px] overflow-hidden">
          {/* Top & Bottom Soft Fading Masks */}
          <div className="absolute top-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-b from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-24 sm:h-32 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/80 to-transparent z-20 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full items-start">
            {/* Column 1: Scrolls UP */}
            <div className="h-full overflow-hidden pause-on-hover">
              <div className="animate-marquee-up flex flex-col gap-6">
                {[...col1, ...col1, ...col1].map((item, idx) => (
                  <TestimonialCard key={`col1-${item.id}-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 2: Scrolls DOWN */}
            <div className="h-full overflow-hidden pause-on-hover hidden md:block">
              <div className="animate-marquee-down flex flex-col gap-6">
                {[...col2, ...col2, ...col2].map((item, idx) => (
                  <TestimonialCard key={`col2-${item.id}-${idx}`} item={item} />
                ))}
              </div>
            </div>

            {/* Column 3: Scrolls UP */}
            <div className="h-full overflow-hidden pause-on-hover hidden md:block">
              <div className="animate-marquee-up flex flex-col gap-6">
                {[...col3, ...col3, ...col3].map((item, idx) => (
                  <TestimonialCard key={`col3-${item.id}-${idx}`} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
