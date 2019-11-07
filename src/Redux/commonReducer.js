const TOGGLE_IS_PROGRESS = 'TOGGLE_IS_PROGRESS';

let initialState = {
    inProgress: []
}
const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_PROGRESS: {
            return {...state,
                inProgress: action.isProgress
                    ? [...state.inProgress, action.userId]
                    : state.inProgress.filter(userId => Number(userId) !== action.userId)
            }
        }
        default :
            return state

    }
}

export const toggleInProgress = (userId, isProgress) => ({type: TOGGLE_IS_PROGRESS, userId, isProgress})


export default commonReducer