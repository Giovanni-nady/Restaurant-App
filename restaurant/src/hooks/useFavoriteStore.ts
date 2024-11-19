import { create } from 'zustand'
import { FavoriteStore } from '../constant/types'

export const useFavoriteStore = create<FavoriteStore>((set, get): any => ({
  favorites: [],
  addToFavorite: (id: number) =>
    set((state): any => ({
      favorites: [...state.favorites, id]
    })),
  removeFromFavorite: (id: number) =>
    set((state): any => ({
      favorites: state.favorites.filter((favId: number) => favId !== id)
    })),
  toggleFavorite: (id: number) => {
    const { favorites } = get()
    if (favorites.includes(id)) get().removeFromFavorite(id)
    else get().addToFavorite(id)
  }
}))
