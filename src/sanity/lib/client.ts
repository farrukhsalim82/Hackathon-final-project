import { createClient } from 'next-sanity'


export const client = createClient({
  projectId:"mpiamauz",
  dataset:"production",
  apiVersion:"2025-02-06",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
