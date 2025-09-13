import { Overview, TechContent } from '@/types';

export const sampleOverviews: Overview[] = [
  {
    id: 2,
    title: "Spatial Computing Breakthrough in AI Navigation and Gaming Innovations",
    slug: "spatial-computing-breakthrough-ai-navigation-gaming-innovations",
    short_description: "Today's key developments focus on AI addressing spatial intelligence gaps by replicating brain-inspired cognitive maps for navigation. Concurrently, gaming news reveals Borderlands 4's chaotic fun and Nioh 3's dynamic gameplay expansions, marking significant advancements in both tech sectors.",
    image: null,
    updated_at: "2025-09-13T05:45:03.000Z",
    status: "active",
    created_at: "2025-09-12T16:33:20.000Z"
  },
  {
    id: 1,
    title: "Revolutionizing Software Development with AI: GitHub Copilot's Agentic Workflows Take the Lead",
    slug: "revolutionizing-software-development-ai-github-copilot-agentic-workflows",
    short_description: "GitHub Copilot's new coding agent significantly enhances software development processes with its agentic workflows powered by the Model Context Protocol. By seamlessly automating tasks and improving collaboration, developers can now experience a more context-aware and efficient coding journey. The integration of advanced AI capabilities signals a monumental shift in the industry's approach to coding assistance.",
    image: null,
    updated_at: "2025-09-13T05:44:55.000Z",
    status: "active",
    created_at: "2025-09-12T14:49:22.000Z"
  }
];

export const sampleTechContent: TechContent[] = [
  {
    id: 87,
    overview_id: 2,
    title: "AI's Spatial Blind Spot: Why Brain-Inspired Navigation is the Next Frontier by Arvind Sundararajan",
    summary: "Current AI excels at abstract reasoning but lacks spatial intelligence essential for human-like navigation. To bridge this gap, researchers advocate replicating brain cognitive maps in AI systems. By integrating multi-sensory inputs and spatial reasoning, AI can navigate like humans, offering benefits for robotics, VR/AR, pathfinding, user interfaces, autonomous vehicles, and context-aware AI. Challenges include translating neuroscience into computational models and gradually imbuing AI with spatial cognition skills.",
    category: "ai, neuroscience, machinelearning, spatialcomputing",
    link: "https://dev.to/arvindsundararajan/ais-spatial-blind-spot-why-brain-inspired-navigation-is-the-next-frontier-by-arvind-sundararajan-3kpo",
    source: "DEV Community",
    pub_date: "2025-09-12T16:12:26.000Z",
    status: "active",
    created_at: "2025-09-12"
  },
  {
    id: 80,
    overview_id: 2,
    title: "IGN: Borderlands 4 - Official 'Claptrap Needs Friends' Trailer",
    summary: "Gear up for chaos with the new 'Claptrap Needs Friends' trailer for Borderlands 4. The action-packed video showcases wild weapons, fish grenades, and looter-shooter fun on PS5, Xbox, PC, and soon on Nintendo Switch 2. Join the party with Claptrap and watch the trailer on YouTube.",
    category: "pcgaming, playstation, xbox, nintendoswitch",
    link: "https://dev.to/gg_news/ign-borderlands-4-official-claptrap-needs-friends-trailer-306d",
    source: "DEV Community",
    pub_date: "2025-09-12T16:00:25.000Z",
    status: "active",
    created_at: "2025-09-12"
  },
  {
    id: 79,
    overview_id: 2,
    title: "IGN: Nioh 3 Takes the Fastest Soulslike and Speeds it Up Even More",
    summary: "Nioh 3 intensifies the fast-paced action by introducing the ability to switch between Samurai and Ninja styles instantly, adding complexity to each battle. The game features expansive open fields teeming with mini-bosses, hidden treasures, and unexpected challenges, encouraging thorough exploration of its dynamic world.",
    category: "pcgaming, playstation",
    link: "https://dev.to/gg_news/ign-nioh-3-takes-the-fastest-soulslike-and-speeds-it-up-even-more-5g48",
    source: "DEV Community",
    pub_date: "2025-09-12T16:00:33.000Z",
    status: "active",
    created_at: "2025-09-12"
  },
  {
    id: 23,
    overview_id: 1,
    title: "GitHub Copilot coding agent 101: Getting started with agentic workflows on GitHub",
    summary: "GitHub introduced a coding agent for Copilot to help complete tasks like fixing bugs, refactoring code, and more, while you focus on important work. The agent automates tasks within GitHub pull request workflow, making the process collaborative and transparent. By using Model Context Protocol (MCP), Copilot's capabilities expand significantly, offering a more context-aware coding experience.",
    category: "AI & ML, GitHub Copilot, AI, coding agent",
    link: "https://github.blog/ai-and-ml/github-copilot/github-copilot-coding-agent-101-getting-started-with-agentic-workflows-on-github/",
    source: "The GitHub Blog",
    pub_date: "2025-09-11T10:00:00.000Z",
    status: "active",
    created_at: "2025-09-12"
  },
  {
    id: 29,
    overview_id: 1,
    title: "5 tips for writing better custom instructions for Copilot",
    summary: "GitHub Copilot works best when provided with the right context. To enhance Copilot's performance, it is crucial to craft detailed instruction files with project overviews, tech stacks, coding guidelines, project structures, and available resources. These instructions help Copilot understand your project better and generate more accurate code suggestions. Additionally, leveraging Copilot to create the instructions file can streamline the process and improve code quality.",
    category: "AI & ML, GitHub Copilot, agentic workflows, generative AI",
    link: "https://github.blog/ai-and-ml/github-copilot/5-tips-for-writing-better-custom-instructions-for-copilot/",
    source: "The GitHub Blog",
    pub_date: "2025-09-03T10:00:00.000Z",
    status: "active",
    created_at: "2025-09-12"
  }
];
