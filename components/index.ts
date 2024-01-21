
export interface Action {
  theme?: 'brand' | 'alt'
  text: string
  link: string
}

export interface Project {
  icon: string
  name: string
  tagline?: string
  desc?: string
  actions?: Action[]
  repo?: string
}