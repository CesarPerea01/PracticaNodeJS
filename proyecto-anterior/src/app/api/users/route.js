import { NextResponse } from 'next/server'

export async function GET() {
  //extracts params
  //query database
  //comunite with other services

  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return NextResponse.json({ users: data })
}

export async function POST(request) {
  const { name, username } = await request.json()
  console.log(name, username)
  return NextResponse.json({
    message: 'creando datos',
  })
}

export function PUT() {
  return NextResponse.json({
    message: 'actualizando datos',
  })
}

export function DELETE() {
  return NextResponse.json({
    message: 'eliminando datos',
  })
}
