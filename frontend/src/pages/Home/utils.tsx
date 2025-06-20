import type { ProductListFilterType, ProductListItem } from "./type";

export const sectionTitles: Record<ProductListFilterType, string> = {
  today: "Top Products Launching Today",
  lastWeek: "Top Products Launched Last Week",
  nextWeek: "Top Products Launching Next Week",
  lastMonth: "Top Products Launched Last Month",
  nextMonth: "Top Products Launching Next Month",
};
export const productListDummyData: Record<
  ProductListFilterType,
  ProductListItem[]
> = {
  today: [
    {
      index: 1,
      icon: "https://img.icons8.com/color/48/brain.png",
      title: "brainrot",
      description: "the more you brainrot, the more your brain rots",
      tags: ["iOS", "Productivity"],
      comments: 41,
      upvotes: 472,
    },
    {
      index: 2,
      icon: "https://img.icons8.com/color/48/000000/galaxy.png",
      title: "Wireframer AI",
      description: "Smart website layout generation for fast starts",
      tags: ["Design Tools", "No-Code", "Web Design"],
      comments: 20,
      upvotes: 408,
    },
    {
      index: 3,
      icon: "https://img.icons8.com/color/48/000000/source-code.png",
      title: "AI Search Visibility Monitor",
      description: "Your AI search ranking tool—for ChatGPT, Gemini, & Claude.",
      tags: ["Marketing", "SEO", "Artificial Intelligence"],
      comments: 45,
      upvotes: 339,
    },
  ],
  lastWeek: [
    {
      index: 1,
      icon: "https://img.icons8.com/color/48/000000/idea.png",
      title: "InspireMe",
      description: "Get daily inspiration and motivational quotes.",
      tags: ["Lifestyle", "Motivation"],
      comments: 12,
      upvotes: 120,
    },
    {
      index: 2,
      icon: "https://img.icons8.com/color/48/000000/robot-2.png",
      title: "Botify",
      description: "Automate your workflow with smart bots.",
      tags: ["Automation", "Bots"],
      comments: 8,
      upvotes: 98,
    },
    {
      index: 3,
      icon: "https://img.icons8.com/color/48/000000/rocket--v2.png",
      title: "LaunchPad",
      description: "All-in-one launch toolkit for startups.",
      tags: ["Startup", "Productivity"],
      comments: 15,
      upvotes: 150,
    },
  ],
  nextWeek: [
    {
      index: 1,
      icon: "https://img.icons8.com/color/48/000000/rocket--v2.png",
      title: "FutureApp",
      description: "The app of tomorrow, today.",
      tags: ["Futuristic", "Tech"],
      comments: 5,
      upvotes: 50,
    },
    {
      index: 2,
      icon: "https://img.icons8.com/color/48/000000/brainstorm-skill.png",
      title: "BrainBoost",
      description: "Boost your brain with daily challenges.",
      tags: ["Education", "Brain Training"],
      comments: 7,
      upvotes: 70,
    },
    {
      index: 3,
      icon: "https://img.icons8.com/color/48/000000/ai.png",
      title: "NextGen AI",
      description: "Next generation AI for everyone.",
      tags: ["AI", "Productivity"],
      comments: 9,
      upvotes: 90,
    },
  ],
  lastMonth: [
    {
      index: 1,
      icon: "https://img.icons8.com/color/48/000000/calendar--v2.png",
      title: "RetroCal",
      description: "A calendar app with a retro twist.",
      tags: ["Calendar", "Retro"],
      comments: 3,
      upvotes: 30,
    },
    {
      index: 2,
      icon: "https://img.icons8.com/color/48/000000/notes.png",
      title: "NoteStack",
      description: "Stack your notes, stack your knowledge.",
      tags: ["Notes", "Productivity"],
      comments: 6,
      upvotes: 60,
    },
    {
      index: 3,
      icon: "https://img.icons8.com/color/48/000000/analytics.png",
      title: "DataDive",
      description: "Dive deep into your data.",
      tags: ["Analytics", "Data"],
      comments: 4,
      upvotes: 40,
    },
  ],
  nextMonth: [
    {
      index: 1,
      icon: "https://img.icons8.com/color/48/000000/rocket--v2.png",
      title: "Moonshot",
      description: "Shoot for the moon with your next project.",
      tags: ["Space", "Projects"],
      comments: 2,
      upvotes: 20,
    },
    {
      index: 2,
      icon: "https://img.icons8.com/color/48/000000/virtual-reality.png",
      title: "VR World",
      description: "Step into a new reality.",
      tags: ["VR", "Entertainment"],
      comments: 3,
      upvotes: 30,
    },
    {
      index: 3,
      icon: "https://img.icons8.com/color/48/000000/robot-2.png",
      title: "AutoBot",
      description: "Automate everything, effortlessly.",
      tags: ["Automation", "Robotics"],
      comments: 4,
      upvotes: 40,
    },
  ],
};

export const getProductListPageSize = (filter: ProductListFilterType) => {
  switch (filter) {
    case "today":
      return 1;
    case "lastWeek":
      return 2;
    case "nextWeek":
      return 3;
    case "lastMonth":
      return 4;
    case "nextMonth":
      return 5;
    default:
      return 1;
  }
};
