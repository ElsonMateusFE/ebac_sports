import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoJaEstaNosFavoritos = state.itens.find(
        (p) => p.id === action.payload.id
      )

      if (produtoJaEstaNosFavoritos) {
        if (state.itens.filter((p) => p.id !== action.payload.id)) {
          state.itens.includes(produtoJaEstaNosFavoritos)
        }
      } else {
        const novoProduto = {
          ...action.payload
        }
        state.itens.push(novoProduto)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
