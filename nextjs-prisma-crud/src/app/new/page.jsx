'use client'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

function NewPage({ params }) {
  const router = useRouter()
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (id) {
      fetch(`/api/tasks/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title)
          setDescription(data.description)
        })
    }
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    const title = event.target.title.value
    const description = event.target.description.value

    if (id) {
      const res = await fetch(`/api/tasks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
      console.log(data)
    } else {
      const res = await fetch('/api/tasks', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await res.json()
    }
    router.refresh()
    router.push('/')
  }

  const handleDelete = async () => {
    const res = await fetch(`/api/tasks/${id}`, {
      method: 'DELETE',
    })
    console.log(res)
    router.refresh()
    router.push('/')
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        className="bg-slate-800 p-10 lg:w-1/4 md:w-1/2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className="font-bold text-sm">
          Titulo de Tarea
        </label>
        <input
          id="title"
          placeholder="Titulo"
          type="text"
          className="border border-gray-400 p-2 mb-4 w-full"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label htmlFor="description" className="font-bold text-sm">
          Descripcion
        </label>
        <textarea
          id="description"
          placeholder="Escribe una descripcion"
          rows="3"
          className="border border-gray-400 p-2 mb-4 w-full"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            {!id && 'Crear'}
            {id && 'Editar'}
          </button>
          {id && (
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                handleDelete()
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default NewPage
