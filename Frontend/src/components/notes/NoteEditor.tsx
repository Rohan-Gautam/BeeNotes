import { useState, useEffect } from 'react'
import type { Note } from '../types/note.types'
import RichTextEditor from '../common/RichTextEditor'
import TagInput from './TagInput'
import { Save } from 'lucide-react'

interface NoteEditorProps {
  initialNote?: Note
  onSave: (note: Note) => void
  isEditing?: boolean
}

export const NoteEditor: React.FC<NoteEditorProps> = ({ 
  initialNote, 
  onSave, 
  isEditing = false 
}) => {
  const [note, setNote] = useState<Note>({
    id: '',
    title: '',
    content: '',
    tags: [],
    createdAt: new Date()
  })

  // Update note state when initialNote changes
  useEffect(() => {
    if (initialNote) {
      setNote(initialNote)
    }
  }, [initialNote])

  const handleSave = () => {
    const noteToSave = {
      ...note,
      id: note.id || Date.now().toString(),
      createdAt: note.createdAt || new Date()
    }
    onSave(noteToSave)
    
    // Reset form if not in editing mode
    if (!isEditing) {
      setNote({
        id: '',
        title: '',
        content: '',
        tags: [],
        createdAt: new Date()
      })
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="mb-4">
        <input
          type="text"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder="Note Title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        {!note.title && (
          <p className="mt-1 text-sm text-red-600">Title is required</p>
        )}
      </div>
      
      <div className="mb-4">
        <RichTextEditor
          value={note.content}
          onChange={(content) => setNote({ ...note, content })}
        />
      </div>

      <div className="mb-4">
        <TagInput
          tags={note.tags}
          onTagsChange={(tags) => setNote({ ...note, tags })}
        />
      </div>

      <button 
        onClick={handleSave}
        disabled={!note.title}
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <Save className="w-5 h-5 mr-2" />
        {isEditing ? 'Update Note' : 'Create Note'}
      </button>
    </div>
  )
}
