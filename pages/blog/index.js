import PageLayout from '../../components/PageLayout'
import {getPosts} from '../../lib/posts'
import SEO from '../../components/Seo'
import Blog from '../../components/Blog'

export default function BlogPage({posts}) {
  return (
    <PageLayout>
      <SEO />
      <Blog posts={posts} />
    </PageLayout>
  )
}

export function getStaticProps() {
  const posts = getPosts()
  return {props: {posts}}
}
