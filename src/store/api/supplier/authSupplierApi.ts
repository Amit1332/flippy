import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authSupplierApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/flippy/v1" }),
  endpoints: (builder) => ({
    signinSupplier: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/supplier/login",
          method: "post",
          body,
        };
      },
    }),
    signupSupplier: builder.mutation({
      query: (body: { phone: string; otp_mobile:string; email: string; otp_email:string; password: string }) => {
        return {
          url: "/supplier/signup",
          method: "post",
          body,
        };
      },
    }),
    
    sendMailForVerification: builder.mutation({
      query: (body: { email: string }) => {
        return {
          url: "/user/send-verification-mail",
          method: "post",
          body,
        };
      },
    }),
    verifySupplier: builder.mutation({
      query: (body: { token: string }) => {
        console.log(body.token);

        return {
          url: "/user/verfiy-user-mail",
          method: "post",
          body,
        };
      },
    }),
    sendMailForgotPassword: builder.mutation({
      query: (body: { email: string }) => {
        return {
          url: "/user/forgot-password",
          method: "post",
          body,
        };
      },
    }),
    resetPassword: builder.mutation({
      query: (body: { token: string; password: string }) => {
        return {
          url: "/user/verify-forgot-mail",
          method: "post",
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useSigninSupplierMutation,
  useSignupSupplierMutation,
  useSendMailForVerificationMutation,
  useVerifySupplierMutation,
  useSendMailForgotPasswordMutation,
  useResetPasswordMutation,
} = authSupplierApi;