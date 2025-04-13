import type { INotesFilter, Note } from '@/types/note.types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const toast = useToast()

const showToast = () => toast.success('Note created successfully')
const deleteToast = () => toast.error('Note deleted successfully')
export const useNotesStore = defineStore('notes', () => {
  const notes = ref<Note[]>([])
  const currentFilter = ref<INotesFilter>({})

  const loadFromLocalStorage = () => {
    const saved = localStorage.getItem('notes')
    if (saved) {
      notes.value = JSON.parse(saved)
    }
  }

  const saveToLocalStorage = () => {
    localStorage.setItem('notes', JSON.stringify(notes.value))
  }

  const addNote = (note: Omit<Note, 'id'>) => {
    const newNote = {
      ...note,
      id: Date.now().toString(),
    }
    notes.value.push(newNote)
    saveToLocalStorage()
    showToast()
  }
  //тут я храню параметры фильтрации
  const setFilter = (filter: INotesFilter) => {
    return (currentFilter.value = filter)
  }

  const getNotesByFilter = (filter: INotesFilter) => {
    return notes.value.filter((note) => note.date === filter?.date)
  }
  const getFilteredNotes = () => {
    const isFilterEmpty = currentFilter.value.date === undefined
    if (isFilterEmpty) return notes.value

    return getNotesByFilter(currentFilter.value)
  }
  const deleteNote = (id: string) => {
    notes.value = notes.value.filter((note) => note.id !== id)
    saveToLocalStorage()
    deleteToast()
  }
  return {
    notes,
    loadFromLocalStorage,
    addNote,
    currentFilter,
    setFilter,
    getFilteredNotes,
    getNotesByFilter,
    deleteNote,
  }
})
