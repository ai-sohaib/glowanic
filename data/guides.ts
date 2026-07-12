export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  sections: { heading: string; body: string }[];
};

export const guides: Guide[] = [
  {
    slug: "simple-acne-prone-skin-routine",
    title: "A Simple Routine for Acne-Prone Skin",
    excerpt: "Build a focused routine without stacking too many strong products at once.",
    category: "Skin Care",
    readTime: "6 min read",
    sections: [
      { heading: "Start with a gentle cleanse", body: "Choose a cleanser that removes sunscreen, makeup and excess oil without leaving skin feeling tight. Consistency is often more useful than constantly switching products." },
      { heading: "Add one targeted step", body: "Introduce one acne-focused serum or treatment at a time. Follow the product directions and reduce frequency if irritation develops." },
      { heading: "Protect the barrier", body: "Use a moisturizer that fits your skin type, and wear broad-spectrum sunscreen during the day. A comfortable routine is easier to follow long term." },
    ],
  },
  {
    slug: "how-to-choose-a-flat-iron",
    title: "How to Choose a Flat Iron for Your Hair Type",
    excerpt: "Plate size, heat settings and technique matter more than a long feature list.",
    category: "Beauty Tools",
    readTime: "5 min read",
    sections: [
      { heading: "Prioritize adjustable temperature", body: "Adjustable heat gives you more control. Fine or fragile hair generally benefits from lower settings, while thicker textures may require more heat and smaller sections." },
      { heading: "Match the plate size", body: "Narrow plates offer control around roots, bangs and short styles. Wider plates can speed up work on long or dense hair." },
      { heading: "Use protection and clean plates", body: "Apply heat protectant before styling, avoid repeated passes, and wipe cooled plates according to the manufacturer instructions." },
    ],
  },
  {
    slug: "facial-steamer-safety-guide",
    title: "Facial Steamer Basics: Use, Timing and Safety",
    excerpt: "A facial steamer can support a spa-like routine when used briefly and carefully.",
    category: "Beauty Tools",
    readTime: "4 min read",
    sections: [
      { heading: "Keep sessions short", body: "More steam is not necessarily better. Follow the device instructions, keep a comfortable distance and stop if skin feels hot or irritated." },
      { heading: "Use clean water and equipment", body: "Empty and clean the reservoir as directed. Mineral buildup and standing water can affect performance and hygiene." },
      { heading: "Follow with a simple routine", body: "After steaming, use a gentle mask or moisturizer rather than stacking several strong active ingredients." },
    ],
  },
  {
    slug: "deep-conditioning-hair-mask-guide",
    title: "How to Get More from a Deep Conditioning Hair Mask",
    excerpt: "Use the right amount, focus on the lengths and give the formula enough time to work.",
    category: "Hair Care",
    readTime: "5 min read",
    sections: [
      { heading: "Apply where hair needs it", body: "Most masks are best concentrated through the mid-lengths and ends, especially if the scalp becomes oily easily." },
      { heading: "Do not overuse", body: "A richer formula may be useful weekly or less often depending on hair type. Too much can make some hair feel heavy." },
      { heading: "Rinse thoroughly", body: "Rinse until hair feels clean and soft rather than coated. Style gently and limit unnecessary heat." },
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
