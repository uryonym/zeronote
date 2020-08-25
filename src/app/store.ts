import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../store/UserSlice'
import noteReducer from '../store/NoteSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    note: noteReducer,
    counter: counterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
