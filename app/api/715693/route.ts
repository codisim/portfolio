import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: Request) {
  const body = await request.json()
  const { title, content } = body

  // Create a filename from the title
  const fileName = `${title.toLowerCase().replace(/ /g, '-')}.json`
  const filePath = path.join(process.cwd(), 'content', fileName)

  // Ensure the 'content' directory exists
  if (!fs.existsSync(path.join(process.cwd(), 'content'))) {
    fs.mkdirSync(path.join(process.cwd(), 'content'))
  }

  // Save the file
  fs.writeFileSync(filePath, JSON.stringify(body, null, 2))

  return NextResponse.json({ message: "Saved successfully" })
}