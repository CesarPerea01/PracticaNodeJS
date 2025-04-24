/* eslint-disable react/react-in-jsx-scope */
import PostCard from '@/components/PostCard'
import './Posts.css'

async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return data
}

async function PostPage() {
  const posts = await loadPosts()
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  )
}

export default PostPage
