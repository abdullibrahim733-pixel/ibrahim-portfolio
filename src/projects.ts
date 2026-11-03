export type Project = {
  slug: string
  name: string
  description: string
  status: string
  focus: string
  overview: string
  nextStep: string
}

export const projects: Project[] = [
  {
    slug: 'dysen',
    name: 'Dysen',
    description: 'Practical technology across software, AI and engineering.',
    status: 'In development',
    focus: 'Software · AI · Engineering',
    overview: 'Dysen is my technology venture for exploring practical solutions across software, intelligent systems and engineering. I want its work to begin with real needs, clear questions and useful experiments.',
    nextStep: 'Shape each idea around a defined problem, learn from the people closest to it and build a focused prototype that can be evaluated honestly.',
  },
  {
    slug: 'nguzo',
    name: 'Nguzo',
    description: 'A platform concept connecting builders with material suppliers.',
    status: 'Early concept',
    focus: 'Construction · Commerce · Discovery',
    overview: 'Nguzo is a digital construction commerce concept designed to help builders discover and access construction materials from suppliers. It is an early concept, not a launched marketplace.',
    nextStep: 'Understand how buyers search for materials, how suppliers keep availability current and what information helps both sides make confident decisions.',
  },
  {
    slug: 'sahl',
    name: 'Sahl',
    description: 'An AI assistant concept for the everyday needs of small retailers.',
    status: 'In development',
    focus: 'AI · Retail · Business tools',
    overview: 'Sahl is an AI business assistant concept to help small retailers record transactions, manage stock, track debts and understand business activity.',
    nextStep: 'Keep the workflow simple, make records easy to review and correct, and ensure any generated insight is grounded in information the business owner can inspect.',
  },
  {
    slug: 'siafu',
    name: 'Siafu',
    description: 'A robotics initiative exploring agricultural automation.',
    status: 'Exploration',
    focus: 'Robotics · Agriculture · Automation',
    overview: 'Siafu explores how practical robotic systems might support agricultural work. The initiative is at an exploratory stage, with room to study tasks, environments and suitable forms of automation.',
    nextStep: 'Learn from agricultural contexts and identify a small, safe task that a prototype could help investigate before defining a larger system.',
  },
]
