import PostPage from '../page'
import { Suspense } from 'react'
async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  //await new Promise((resolve) => setTimeout(resolve, 3000))

  return data
}

async function LoadSinglePost({ params }) {
  const { id } = await params
  const post = await loadPost(id)
  console.log(post)
  return (
    <div>
      <h2>
        {post.id}. {post.title}
      </h2>
      <p>{post.body}</p>

      <h3>Otras Publicaciones</h3>
      <hr />
      <Suspense fallback={<div>Cargando Publicaciones...</div>}>
        <PostPage />
      </Suspense>
    </div>
  )
}

export default LoadSinglePost
