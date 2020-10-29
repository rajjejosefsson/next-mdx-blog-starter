import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import {postFilePaths, POSTS_PATH} from '../utils/mdxUtils'

export function getPosts() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const {content, data} = matter(source)

    return {
      content,
      data,
      filePath,
    }
  })

  const sortedPosts = sortPosts(posts)

  return sortedPosts
}

function sortPosts(posts) {
  return posts.sort(
    (a, b) => Number(new Date(b.data.date)) - Number(new Date(a.data.date)),
  )
}
