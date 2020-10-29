import PageLayout from '../../components/PageLayout'
import {getPosts} from '../../lib/posts'
import Blog from '../../components/Blog'

export default function BlogPage({posts}) {
  return (
    <PageLayout>
      <Blog posts={posts} />
    </PageLayout>
  )
}

export function getStaticProps() {
  const posts = getPosts()
  return {props: {posts}}
}
