import { configureStore } from '@reduxjs/toolkit'
import { usuarioStoreSlice } from './UsuarioRedux.store.proxy';

export const store = configureStore({
  reducer: {
    usuario: usuarioStoreSlice.reducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch