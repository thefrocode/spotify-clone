import { SpotifyApi } from "@spotify/web-api-ts-sdk"

export interface Store<T>{
    data: T[]
    fetchData: (sdk: SpotifyApi | null) => void
}