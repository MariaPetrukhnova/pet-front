export const initialState = {
    user: {
        login: null, email: null, avatar: null, birthDate: null, height: null, physicalActivity: '', goal: '',
        startPhoto: '', currentPhoto: [], startWeight: null, goalWeight: null, currentWeight: [], 
        currentBMI: null, currentTDEE: {}, startDimensions: {}, currentDimensions: [], friends: [],
    },
    message: '',
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
    error: null,
};
