import { createFileRoute } from '@tanstack/react-router'
import ServicePage from '../components/site/ServicePage'
import { services } from '../lib/services'

const s = services['red-wine-facial']

export const Route = createFileRoute('/services/red-wine-facial')({
  head: () => ({ meta: [{ title: `${s.name} | Elegant Brows & Wax` }, { name: 'description', content: s.metaDescription }] }),
  component: () => <ServicePage service={s} />,
})
