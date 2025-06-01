import { useState } from 'react'
import type { Note } from './components/types/note.types'
import { NoteEditor } from './components/notes/NoteEditor'
import { NoteList } from './components/notes/NoteList'
import './index.css'

function App() {
  const [notes, setNotes] = useState<Note[]>([])
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  const handleSaveNote = (note: Note) => {
    if (editingNote) {
      setNotes(notes.map(n => n.id === note.id ? note : n))
      setEditingNote(null)
    } else {
      setNotes([...notes, note])
    }
  }

  const handleEditNote = (note: Note) => {
    setEditingNote(note)
  }

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">BeeNotes</h1>
      <NoteEditor
        initialNote={editingNote || undefined}
        onSave={handleSaveNote}
        isEditing={!!editingNote}
      />
      
      <NoteList
        notes={notes}
        onEditNote={handleEditNote}
        onDeleteNote={handleDeleteNote}
      />
    </div>
  )
}

export default App
