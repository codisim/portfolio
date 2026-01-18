'use client'
import { useState } from 'react'

export default function AdminEditor() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const saveBlog = async () => {
    const res = await fetch('/api/wali321', {
      method: 'POST',
      body: JSON.stringify({ title, content, date: new Date().toISOString() }),
    })
    if (res.ok) alert('Blog Saved!')
  }

  return (
    <div className="p-10 max-w-2xl mx-auto flex flex-col gap-4">
      <h1 className="text-2xl font-bold">New Blog Post</h1>
      <input 
        className="border p-2 rounded text-black" 
        placeholder="Title" 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <textarea 
        className="border p-2 rounded h-64 text-black" 
        placeholder="Write your markdown/content here..." 
        onChange={(e) => setContent(e.target.value)} 
      />
      <button onClick={saveBlog} className="bg-blue-600 text-white p-2 rounded">
        Publish to Portfolio
      </button>
    </div>
  )
}