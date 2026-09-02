export interface Reference {
  name: string
  title: string
  company: string
  phone: string
  email?: string
  relationship: string
}

export const references: Reference[] = [
  {
    name: 'Sokneang Ty',
    title: 'Production Manager / UXUI Lead',
    company: 'Everlast & Apps Dev Co., Ltd',
    phone: '+855 12 789 710',
    email: 'sokneang0110@gmail.com',
    relationship: 'Former colleague and direct report',
  },
  {
    name: 'Meas Phimeansonita',
    title: 'Assistant Director',
    company: 'Everlast & Apps Dev Co., Ltd',
    email: 'sokneang0110@gmail.com',
    phone: '016669352',
    relationship: 'Former colleague',
  },
  {
    name: 'Pisey',
    title: 'HR Generalist',
    company: 'Everlast & Apps Dev Co., Ltd',
    email: 'sokneang0110@gmail.com',
    phone: '016669300',
    relationship: 'Former colleague',
  },
]
