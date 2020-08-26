import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../app/store'
import graphService from '../lib/GraphService'
import { Notebook, OnenotePage } from 'microsoft-graph'
import { IDropdownOption, INavLink } from '@fluentui/react'

interface NoteState {
  currentNoteId: string | undefined
  notebooks: Notebook[]
  pages: OnenotePage[]
}

const initialState: NoteState = {
  currentNoteId: undefined,
  notebooks: [],
  pages: []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNoteId: (state, action: PayloadAction<string | undefined>) => {
      state.currentNoteId = action.payload
    },
    setNotebookData: (state, action: PayloadAction<Notebook[]>) => {
      state.notebooks = action.payload
    },
    setPageData: (state, action: PayloadAction<OnenotePage[]>) => {
      state.pages = action.payload
    }
  }
})

export const { setNoteId, setNotebookData, setPageData } = noteSlice.actions

export const fetchNoteData = (): AppThunk => async (dispatch) => {
  try {
    const note = await graphService.getNotebooks()
    console.log(note)
    dispatch(setNotebookData(note))
  } catch (e) {
    const emptyNotebooks: Notebook[] = []
    dispatch(setNotebookData(emptyNotebooks))
  }
}

export const fetchPageData = (sectionId: string): AppThunk => async (
  dispatch
) => {
  try {
    const page = await graphService.getPages(sectionId)
    console.log(page)
    dispatch(setPageData(page))
  } catch (e) {
    const emptyPages: OnenotePage[] = []
    dispatch(setPageData(emptyPages))
  }
}

export const selectNoteList = (state: RootState) => {
  const noteList: IDropdownOption[] = []
  state.note.notebooks.forEach((note) => {
    noteList.push({ key: note.id ?? '', text: note.displayName ?? '' })
  })
  return noteList
}

export const selectSectionList = (state: RootState) => {
  const currentNote = state.note.notebooks.find(
    (note) => note.id == state.note.currentNoteId
  )
  const sectionList: INavLink[] = []
  if (currentNote && currentNote.sections) {
    currentNote.sections.forEach((section) => {
      sectionList.push({
        name: section.displayName ?? '',
        url: '',
        onClick: () => console.log('click a ' + section.id)
      })
    })
  }
  return sectionList
}

export const selectPages = (state: RootState) => state.note.pages

export default noteSlice.reducer
