import { createClient } from '@sanity/client'

export const useSanityClient = () => {
  return createClient({
    projectId: 'zjqxu8zg',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true
  })
}