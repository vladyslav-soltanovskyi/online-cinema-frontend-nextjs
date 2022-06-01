import { Layout } from '@/components/layout/Layout'
import React, { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
})

export const MainProvider: FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        {children}
      </Layout>
    </QueryClientProvider>
  )
}
