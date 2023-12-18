import Prismic from '@prismicio/client'

export function getPrismicClient(req) {
  const prismic = Prismic.client('https://siteaca.cdn.prismic.io/api/v2',{
    req,
  })

  return prismic
}