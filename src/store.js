import { configureStore } from '@reduxjs/toolkit'
import { authenticationApi } from './features/authentication/userApi'

const store = configureStore({
  reducer: {
    [authenticationApi.reducerPath]: authenticationApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authenticationApi.middleware),
})

export default store
