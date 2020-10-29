import Link from 'next/link'

export default function PostList({posts}) {
  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.filePath}>
            <Link
              as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
              href="/posts/[slug]"
            >
              <a>
                <h2>{post.data.title}</h2>
                <p>{post.data.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        li {
          border: 0.1rem solid var(--border-color);
          border-radius: 0.4rem;
          padding: 1rem;
          margin: 0.8rem 0;
        }

        a {
          color: var(--primary-color);
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      `}</style>
    </>
  )
}
