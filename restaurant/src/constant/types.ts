export interface product{
    id: number
    title: string
    image: string
    description: string
    price: number
}

export type RootStackParams={
    Home: undefined
    Details: {
        id: number
        title: string
        image: string
        description: string
        price: number
    }
}

export type TapStackParams={
    Products: undefined
    Favorites: undefined
}

export interface FavoriteStore{
    favorites: number[];
    addToFavorite:(id:number) => void;
    removeFromFavorite:(id:number) => void;
    toggleFavorite:(id:number) => void;
}