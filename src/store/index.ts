import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'
import favoritoReducer from './reducers/favorito'

const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favorito: favoritoReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
