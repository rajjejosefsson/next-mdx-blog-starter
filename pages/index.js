import PageLayout from '../components/PageLayout'
import Intro from '../components/Intro'

import {getPosts} from '../lib/posts'
import BigHero from '../components/BigHero'

export default function Index({posts}) {
  return (
    <PageLayout hero={<BigHero />}>
      <Intro posts={posts} />
    </PageLayout>
  )
}

export function getStaticProps() {
  const posts = getPosts()
  return {props: {posts}}
}
