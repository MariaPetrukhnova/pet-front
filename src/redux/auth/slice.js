import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

import {
    logIn,
    logOut,
    refreshUser,
    register,
    updateUserCard,
    updateUserMeasurements
} from './operations';

import {
    handleLoginFulfilled,
    handleLogoutFulfilled,
    handleRefreshFulfilled,
    handleRefreshPending,
    handleRefreshReject,
    handleRegisterFulfilled,
    handleUpdateFulfilled,
    handleReject,
} from './actions';

const authSlice = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        clearErrorMessage: state => {
            state.error = null;
        },
        clearMessage: state => {
            state.message = '';
        },
    },

    extraReducers: builder => {
        builder
        .addCase(register.fulfilled, handleRegisterFulfilled)
        .addCase(register.rejected, handleReject)
        .addCase(logIn.fulfilled, handleLoginFulfilled)
        .addCase(logIn.rejected, handleReject)
        .addCase(logOut.fulfilled, handleLogoutFulfilled)
        .addCase(refreshUser.pending, handleRefreshPending)
        .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
        .addCase(refreshUser.rejected, handleRefreshReject)
        .addCase(updateUserCard.pending, handleRefreshPending)
        .addCase(updateUserCard.fulfilled, handleUpdateFulfilled)
        .addCase(updateUserCard.rejected, handleRefreshReject)
        .addCase(updateUserMeasurements.pending, handleRefreshPending)
        .addCase(updateUserMeasurements.fulfilled, handleUpdateFulfilled)
        .addCase(updateUserMeasurements.rejected, handleRefreshReject)
    }
})