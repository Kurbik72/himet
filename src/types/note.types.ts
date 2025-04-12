export interface Note {
  id: string
  date: string
  title: string
  description: string
}

export type NoteDate = string

export interface INotesFilter {
  date?: string 
}
