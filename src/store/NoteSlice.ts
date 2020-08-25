import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../app/store'
import graphService from '../lib/GraphService'
import { Notebook, OnenotePage } from 'microsoft-graph'

interface NoteState {
  notebooks: Notebook[]
  pages: OnenotePage[]
}

const initialState: NoteState = {
  notebooks: [],
  pages: []
}

export const noteSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {
    setNotebookData: (state, action: PayloadAction<Notebook[]>) => {
      state.notebooks = action.payload
    },
    setPageData: (state, action: PayloadAction<OnenotePage[]>) => {
      state.pages = action.payload
    }
  }
})

export const { setNotebookData, setPageData } = noteSlice.actions

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

export const selectNotebooks = (state: RootState) => state.note.notebooks

export const selectPages = (state: RootState) => state.note.pages

export default noteSlice.reducer
