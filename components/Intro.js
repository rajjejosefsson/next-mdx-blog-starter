import PostList from './PostList'

export default function Intro({posts}) {
  return (
    <>
      <div className="intro">
        <h2>Recent Blog posts</h2>
        <PostList posts={posts} />
      </div>
      <style jsx>{`
        .intro {
          max-width: 70rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}
