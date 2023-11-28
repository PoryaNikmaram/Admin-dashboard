import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { supabaseUrl } from '../../../supabase'
import {
  editUser,
  getCurrentUser,
  signinUser,
  signoutUser,
  signupUser,
} from '../../services/userServices'

export const authenticationApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({ baseUrl: supabaseUrl }),
  tagTypes: ['user'],
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      queryFn: async ({
        email,
        password,
        firstName,
        lastName,
        number,
        address,
      }) =>
        await signupUser({
          email,
          password,
          firstName,
          lastName,
          number,
          address,
        }),
      invalidatesTags: ['user'],
    }),
    signinUser: builder.mutation({
      queryFn: async ({ email, password }) =>
        await signinUser({ email, password }),
      invalidatesTags: ['user'],
    }),
    signoutUser: builder.mutation({
      queryFn: async () => await signoutUser(),
      invalidatesTags: ['user'],
    }),
    editUser: builder.mutation({
      queryFn: async ({ email, firstName, lastName, number, address }) =>
        await editUser({
          email,
          firstName,
          lastName,
          number,
          address,
        }),
      invalidatesTags: ['user'],
    }),
    getCurrentuser: builder.query({
      queryFn: async () => await getCurrentUser(),
      providesTags: ['user'],
    }),
  }),
})

export const {
  useSignupUserMutation,
  useSigninUserMutation,
  useEditUserMutation,
  useGetCurrentuserQuery,
  useSignoutUserMutation,
} = authenticationApi
