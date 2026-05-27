import { createFileRoute } from '@tanstack/react-router'
import ServicePage from '../components/site/ServicePage'
import { services } from '../lib/services'

const s = services['eyebrow-wax']

export const Route = createFileRoute('/services/eyebrow-wax')({
  head: () => ({ meta: [{ title: `${s.name} | Elegant Brows & Wax` }, { name: 'description', content: s.metaDescription }] }),
  component: () => <ServicePage service={s} />,
})
