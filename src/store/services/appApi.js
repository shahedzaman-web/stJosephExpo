// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// initialize an empty api service that we'll inject endpoints into later as needed
export const appApi = createApi({
    baseQuery: fetchBaseQuery({
        reducerPath: 'appApi',
        baseUrl: 'http://154.12.229.20:4000/api',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 30000,
        setTimeout: timeout => {
          return timeout;
        },
      }),
  endpoints: () => ({}),
})