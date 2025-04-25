'use client'
import { useRouter } from 'next/navigation'
function CreateButton() {
  const router = useRouter()
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        router.push('/new')
      }}
    >
      Agregar Nueva Tarea
    </button>
  )
}

export default CreateButton
