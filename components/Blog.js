import PostList from './PostList'

export default function Blog({posts}) {
  return (
    <>
      <div className="blog">
        <h1>Blog posts</h1>
        <PostList posts={posts} />
      </div>
      <style jsx>{`
        .blog {
          max-width: 70rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
