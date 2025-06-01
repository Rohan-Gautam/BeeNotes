import type { Note } from '../types/note.types'
import NoteItem from './NoteItem'
import { PlusCircle } from 'lucide-react'

interface NoteListProps {
  notes: Note[]
  onEditNote: (note: Note) => void
  onDeleteNote: (id: string) => void
}

export const NoteList: React.FC<NoteListProps> = ({ notes, onEditNote, onDeleteNote }) => {
  return (
    <div className="flex flex-col gap-4">
      {notes.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <PlusCircle className="w-12 h-12 mx-auto mb-2" />
          <p>No notes yet. Create your first note!</p>
        </div>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={() => onEditNote(note)}
            onDelete={() => onDeleteNote(note.id)}
          />
        ))
      )}
    </div>
  )
}
