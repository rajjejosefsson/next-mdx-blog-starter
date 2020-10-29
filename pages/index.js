import PageLayout from '../components/PageLayout'
import Intro from '../components/Intro'
import SEO from '../components/Seo'

import {getPosts} from '../lib/posts'
import BigHero from '../components/BigHero'

export default function Index({posts}) {
  return (
    <PageLayout hero={<BigHero />}>
      <SEO />
      <Intro posts={posts} />
    </PageLayout>
  )
}

export function getStaticProps() {
  const posts = getPosts()
  return {props: {posts}}
}
