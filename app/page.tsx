'use client'

import { NavbarProvider } from '@/states'
import { Features, Hero, Layout } from '@/components'

export default function RootPage() {
  return (
    <NavbarProvider>
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </NavbarProvider>
  )
}
