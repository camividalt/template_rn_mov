import { configureStore } from '@reduxjs/toolkit'
import { usuarioStoreSlice } from './usuarioReduxStore.proxy';

export const store = configureStore({
  reducer: {
    usuario: usuarioStoreSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch