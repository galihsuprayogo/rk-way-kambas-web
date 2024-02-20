'use client'

import { NavbarProvider } from '@/states'
import { Hero, Layout } from '@/components'

export default function RootPage() {
  return (
    <NavbarProvider>
      <Layout>
        <Hero />
      </Layout>
    </NavbarProvider>
  )
}
