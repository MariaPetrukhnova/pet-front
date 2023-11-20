export const selectUser = state => state.auth.user;

export const selectIsLoggedIn = state => state.auth.IsLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthError = state => state.auth.error;

export const selectUserLogin = state => state.auth.user.login;

export const selectUserAvatar = state => state.auth.user.avatar;

export const selectUserBirthDate = state => state.auth.user.birthDate;

export const selectUserHeight = state => state.auth.user.height;

export const selectUserPhysicalActivity = state => state.auth.user.physicalActivity;

export const selectUserGoal = state => state.auth.user.goal;

export const selectUserStartPhoto = state => state.auth.user.startPhoto;

export const selectUserCurrentPhoto = state => state.auth.user.currentPhoto;

export const selectUserStartWeight = state => state.auth.user.startWeight;

export const selectUserGoalWeight = state => state.auth.user.goalWeight;

export const selectUserCurrentWeight = state => state.auth.user.currentWeight;

export const selectUsercurrentBMI = state => state.auth.user.currentBMI;

export const selectUserCurrentTDEE = state => state.auth.user.currentTDEE;

export const selectUserStartDimensions = state => state.auth.user.startDimensions;

export const selectUserCurrentDimensions = state => state.auth.user.currentDimensions;

export const selectToken = state => state.auth.token;

export const selectMessage = state => state.auth.message;
