import PageLayout from '../../components/PageLayout'
import {getPosts} from '../../lib/posts'
import SEO from '../../components/Seo'

export default function About() {
  return (
    <PageLayout>
      <SEO />
      <h1>
        Hi! Im xxxxx{' '}
        <span role="img" aria-label="wink emoji">
          👋
        </span>
      </h1>

      <style jsx>{``}</style>
    </PageLayout>
  )
}

export function getStaticProps() {
  const posts = getPosts()
  return {props: {posts}}
}
