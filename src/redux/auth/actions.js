export const handleRefreshPending = state => {
    state.isRefreshing = true;
    state.error = null;
};

export const handleRefreshReject =  (state, { payload }) => {
    state.isRefreshing = false;
    state.error = payload;
};

export const handleReject = (state, { payload }) => {
    state.error = payload;
};

export const handleRegisterFulfilled =  (state, { payload }) => {
    state.message = payload.message;
    state.error = null;
};

export const handleLoginFulfilled =  (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
    state.error = null;
};

export const handleLogoutFulfilled = state => {
    state.user = { name: null, email: null, avatar: null, goal: null};
    state.token = null;
    state.isLoggedIn = false;
    state.error = null;
};

export const handleRefreshFulfilled =  (state, { payload }) => {
    state.user = payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
    state.error = null;
};

export const handleUpdateFulfilled =  (state, { payload }) => {
    state.user.login = payload.login;
    state.user.avatar = payload.avatarURL;
    state.user.birthDate = payload.birthDate;
    state.user.height = payload.height;
    state.user.physicalActivity = payload.physicalActivity;
    state.user.goal = payload.goal;
    state.user.startPhoto = payload.startPhoto;
    state.user.currentPhoto.push(payload.currentPhoto);
    state.user.startWeight = payload.startWeight;
    state.user.goalWeight = payload.goalWeight;
    state.user.currentWeight.push(payload.currentWeight);
    state.user.currentBMI = payload.currentBMI;
    state.user.currentTDEE = payload.currentTDEE;
    state.user.startDimensions = payload.startDimensions;
    state.user.currentDimensions.push(payload.currentDimensions);
    state.isLoggedIn = true;
    state.isRefreshing = false;
    state.error = null;
}

