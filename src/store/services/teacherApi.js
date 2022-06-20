import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: "teacherApi",
    baseUrl: "http://154.12.229.20:4000/api",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    timeout: 30000,
    setTimeout: (timeout) => {
      return timeout;
    },
  }),
  endpoints: (builder) => ({
    getAllBranch: builder.query({
      query: () => {
        return {
          url: `/getAllBranch?page=1&limit=25&search=`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getBranchWiseSession: builder.query({
      query: (data) => {
        const { branchId } = data;
        return {
          url: `/branchWiseSession/${branchId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),

    getSessionWiseClass: builder.query({
      query: (data) => {
        const { sessionId } = data;
        console.log({ data });
        return {
          url: `/sessionWiseClass/${sessionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getClassWiseSection: builder.query({
      query: (data) => {
        const { classId } = data;
        console.log({ data });
        return {
          url: `/classWiseSection/${classId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getTeacherScheduleList: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionId,
          classId,
          sectionId,
          teacherId,
          sessionName,
        } = data;
        return {
          url:`/getTeacherScheduleList?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&teacherId=${teacherId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAllStudent: builder.query({
      query: (data) => {
        const { branchId,  classId, sectionId, teacherId } = data;
        return {
          url: `/getAllStudent?page=1&limit=25&search=&branchName${branchName}&sessionName${sessionName}&branchId${branchId}&classId${classId}&sectionId${sectionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getOneStudent: builder.query({
      query: (data) => {
        const { studentId } = data;
        return {
          url: `/getOneStudent/${studentId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentAsFilter: builder.query({
      query: (data) => {
        const { branchId, sessionId, classId, sectionId, teacherId } = data;
        return {
          url: `/getStudentAsFilter?branchName${branchName}&sessionName${sessionName}&branchId${branchId}&sessionId=${sessionId}&classId${classId}&sectionId${sectionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    addStudentAttendance: builder.mutation({
      query: (data) => {
        return {
          url: `/addStudentAttendance`,
          method: "POST",
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    manageEmployeeInOut: builder.mutation({
      query: (data) => {
        return {
          url: `/manageEmployeeInOut`,
          method: "POST",
          body: data,
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAllHall: builder.query({
      query: (data) => {
        const { branchId, sessionId, classId, sectionId, teacherId } = data;
        return {
          url: `/getAllHall?page=1&limit=25&search=&branchId${branchId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getExamScheduleList: builder.query({
      query: (data) => {
        const { branchName, branchId, sessionId, classId, sectionId } = data;
        return {
          url: `/getExamScheduleList?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getFilterWiseExamMarks: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionId,
          classId,
          sectionId,
          examId,
          subjectId,
        } = data;
        return {
          url: `/getFilterWiseExamMarks?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&examId=${examId}&subjectId=${subjectId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),

    getAllBook: builder.query({
      query: (data) => {
        const { branchId } = data;
        return {
          url: `/getAllBook?branchId=${branchId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getHomeWorks: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
          subjectId,
        } = data;
        return {
          url: `/getHomeWorks?page=1&limit=25&search=&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&subjectId=${subjectId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getEmployeeEvent: builder.query({
      query: (data) => {
        const { branchId, role } = data;
        return {
          url: `/getEmployeeEvent?page=1&limit=25&search=&branchId=${branchId}&role=${role}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
  }),
});
export const {
  useGetAllBranchQuery,
  useGetBranchWiseSessionQuery,
  useGetSessionWiseClassQuery,
  useGetClassWiseSectionQuery,
  useGetTeacherScheduleListQuery,
  useGetAllStudentQuery,
  useGetOneStudentQuery,
  useGetStudentAsFilterQuery,
  useAddStudentAttendanceMutation,
  useManageEmployeeInOutMutation,
  useGetAllHallQuery,
  useGetExamScheduleListQuery,
  useGetFilterWiseExamMarksQuery,
  useGetAllBookQuery,
  useGetHomeWorksQuery,
  useGetEmployeeEventQuery,
} = teacherApi;
