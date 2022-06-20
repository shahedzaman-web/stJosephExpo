import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const studentApi = createApi({
  baseQuery: fetchBaseQuery({
    reducerPath: 'studentApi',
    baseUrl: 'http://154.12.229.20:4000/api',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 30000,
    setTimeout: timeout => {
      return timeout;
    },
  }),
  endpoints: builder => ({
    getAllSubject: builder.query({
      query: data => {
        const {branchName, branchId, sessionName, sessionId} = data;
        //console.log({data});
        return {
          url: `/getAllSubject?page=1&limit=25&search=&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAcademicAttachmentLists: builder.query({
      query: data => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
        } = data;
        return {
          url: `/getAcademicAttachmentLists?page=1&limit=25&search=&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getClassSchedule: builder.query({
      query: data => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
        } = data;
        return {
          url: `/getClassScheduleList?page=1&limit=1&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getBranchSessionWiseExamList: builder.query({
      query: data => {
        const {branchName, branchId, sessionName, sessionId} = data;
        return {
          url: `/getBranchSessionWiseExamList?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getFilterWiseExamMarks: builder.query({
      query: data => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
          examId,
          subjectId,
        } = data;
        return {
          url: `/getFilterWiseExamMarks?branchName=${branchName}&sessionName=${sessionName}&branchId=${branchId}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&examId=${examId}&subjectId=${subjectId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getExamScheduleList: builder.query({
      query: data => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
        } = data;
        return {
          url: `/getExamScheduleList?page=1&limit=100&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getOneExamSchedule: builder.query({
      query: data => {
        const {id, branchName, sessionName} = data;
        return {
          url: `/getOneExamSchedule/${id}?branchName=${branchName}&sessionName=${sessionName}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getBranchWiseSubject: builder.query({
      query: data => {
        const {branchName, branchId, sessionName, sessionId} = data;

        return {
          url: `/branchWiseSubject?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),

    getAllHomeworkEvaluationForStudent: builder.query({
      query: data => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
          subjectId,
          studentId,
        } = data;
        return {
          url: `/getAllHomeworkEvaluationForStudent?page=1&limit=1&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&subjectId=${subjectId}&studentId=${studentId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentEvent: builder.query({
      query: data => {
        const {classId, branchId} = data;
        return {
          url: `/getStudentEvent?page=1&limit=25&search=&branchId=${branchId}&classId=${classId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentsAttendanceMonthWist: builder.query({
      query: data => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
          studentId,
          month,
        } = data;
        return {
          url: `/getStudentAttendance?branchName=${branchName}&sessionName=${sessionName}&branchId=${branchId}&classId=${classId}&sectionId=${sectionId}&sessionId=${sessionId}&month=${month}&studentId=${studentId}`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAllBranch: builder.query({
      query: () => {
        return {
          url: `/getAllBranch?page=1&limit=50&search=`,
          method: 'GET',
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
  }),
});

export const {
  useGetAllSubjectQuery,
  useGetClassScheduleQuery,
  useGetExamScheduleListQuery,
  useGetAcademicAttachmentListsQuery,
  useGetBranchWiseSubjectQuery,
  useGetAllClassQuery,
  useGetAllSectionQuery,
  useGetAllBranchQuery,
  useGetAllSessionQuery,
  useGetAllStudentQuery,
  useGetAllTeacherQuery,
  useGetAllExamQuery,
  useGetAllExamScheduleQuery,
  useGetAllClassScheduleQuery,
  useGetAllStudentEventQuery,
  useGetAllHomeworkEvaluationForStudentQuery,
  useGetBranchSessionWiseExamListQuery,
  useGetFilterWiseExamMarksQuery,
  useGetOneExamScheduleQuery,
  useGetStudentsAttendanceMonthWistQuery,
  useGetStudentEventQuery,
} = studentApi;
