import CreateButton from '@/components/CreateButton'
import TaskCard from '@/components/TaskCard'

async function loadTasks() {
  const res = await fetch('http://localhost:3000/api/tasks')
  const data = res.json()

  return data
}

async function Home() {
  const tasks = await loadTasks()
  console.log(tasks)
  return (
    <section className="container mx-auto space-y-3">
      <div className="grid grid-cols-3 gap-3 mt-6">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
      <CreateButton />
    </section>
  )
}

export default Home
