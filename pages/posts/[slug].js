import fs from 'fs'
import matter from 'gray-matter'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {BlogJsonLd} from 'next-seo'
import path from 'path'
import {postFilePaths, POSTS_PATH} from '../../utils/mdxUtils'
import CustomLink from '../../components/CustomLink'
import PageLayout from '../../components/PageLayout'
import mdxPrism from 'mdx-prism'
import website from '../../config/website'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}

export default function PostPage({source, frontMatter}) {
  const content = hydrate(source, {components})

  return (
    <PageLayout>
      <BlogJsonLd
        url="https://example.com/blog"
        title={source.scope.title}
        images={source.scope.images}
        datePublished={source.scope.datePublished}
        dateModified={source.scope.dateModified}
        authorName={source.scope.authorName || website.authorName}
        description={source.scope.description}
      />
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>{content}</main>

      <style jsx>{`
        .post-header h1 {
          margin-bottom: 0;
        }

        .post-header {
          margin-bottom: 2rem;
        }
        .description {
          opacity: 0.6;
        }
      `}</style>
    </PageLayout>
  )
}

export const getStaticProps = async ({params}) => {
  const postFilePath = path.join(POSTS_PATH, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const {content, data} = matter(source)

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [mdxPrism],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export function getStaticPaths() {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map(filePath => filePath.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map(slug => ({params: {slug}}))

  return {
    paths,
    fallback: false,
  }
}
