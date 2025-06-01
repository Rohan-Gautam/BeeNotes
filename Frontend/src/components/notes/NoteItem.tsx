import type { Note } from '../types/note.types'
import { Edit, Trash2, Tag } from 'lucide-react'

interface NoteItemProps {
  note: Note
  onEdit: () => void
  onDelete: () => void
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="p-1 text-gray-600 hover:text-blue-600 transition-colors"
            aria-label="Edit note"
          >
            <Edit className="w-5 h-5" />
          </button>
          <button
            onClick={onDelete}
            className="p-1 text-gray-600 hover:text-red-600 transition-colors"
            aria-label="Delete note"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="prose prose-sm max-w-none text-gray-600 mb-3">
        {note.content}
      </div>

      {note.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 items-center">
          <Tag className="w-4 h-4 text-gray-500" />
          {note.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default NoteItem
