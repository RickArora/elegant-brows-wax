import { createFileRoute } from '@tanstack/react-router'
import ServicePage from '../components/site/ServicePage'
import { services } from '../lib/services'

const s = services['o3-radiance-facial']

export const Route = createFileRoute('/services/o3-radiance-facial')({
  head: () => ({ meta: [{ title: `${s.name} | Elegant Brows & Wax` }, { name: 'description', content: s.metaDescription }] }),
  component: () => <ServicePage service={s} />,
})
