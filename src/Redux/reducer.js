const initialState = {
    myFavorites: [],
    allCharactersFav: [],
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "ADD_FAV":
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, actions.payload],
                allCharactersFav: [...state.allCharactersFav, actions.payload],
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorite: state.myFavorites.filter(
                    (fav) => fav.id !== Number(actions.payload)
                ),
            }
        case "FILTER":
            const allCharactersFiltered = state.allCharactersFav.filter((char) => char.gender === actions.payload)
            return {
                ...state,
                myFavorites: allCharactersFiltered,
            }
        case "ORDER":
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavorite:
                    actions.payload === "A"
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.sort((a, b) => a.id - b.id)
            }

        default:
            return { ...state }
    }
}

export default reducer