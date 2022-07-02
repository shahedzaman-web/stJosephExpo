import { appApi } from "./appApi";

const teacherApi = appApi.injectEndpoints({
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
    getBranchWiseSubject: builder.query({
      query: (data) => {
        const { branchName, branchId, sessionId, sessionName } = data;
        return {
          url: `/branchWiseSubject?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
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
        //  console.log({ data });
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
        //  console.log({ data });
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
          url: `/getTeacherScheduleList?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&teacherId=${teacherId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAllStudent: builder.query({
      query: (data) => {
        const { branchId, classId, sectionId, sessionName, branchName } = data;
        return {
          url: `/getAllStudent?page=1&limit=25&search=&branchName=${branchName}&sessionName=${sessionName}&branchId=${branchId}&classId=${classId}&sectionId=${sectionId}`,
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
        const {
          branchId,
          sessionId,
          sessionName,
          classId,
          sectionId,
          branchName,
        } = data;
        return {
          url: `/getStudentAsFilter?branchName=${branchName}&sessionName=${sessionName}&branchId=${branchId}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
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
    getStudentAttendanceForAdmin: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
          month,
        } = data;
        return {
          url: `/getStudentAttendanceForAdmin?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&month=${month}`,
          method: "GET",
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
        };
      },
    }),
    getAllHall: builder.query({
      query: (data) => {
        const { branchId } = data;
        console.log({ data });
        return {
          url: `/getAllHall?page=1&limit=25&search=&branchId=${branchId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getExamScheduleListForTeacher: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionId,
          classId,
          sectionId,
          sessionName,
        } = data;

        return {
          url: `/getExamScheduleList?page=1&limit=25&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getBranchSessionWiseExamList: builder.query({
      query: (data) => {
        const { branchName, branchId, sessionId, sessionName } = data;
        return {
          url: `/getBranchSessionWiseExamList?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getFilterWiseExamMarksForTeacher: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionId,
          classId,
          sectionId,
          examId,
          subjectId,
          sessionName,
        } = data;

        return {
          url: `/getFilterWiseExamMarks?branchName=${branchName}&sessionName=${sessionName}&branchId=${branchId}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&examId=${examId}&subjectId=${subjectId}`,
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
    getSelfEvent: builder.query({
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
    getAttendance: builder.query({
      query: (data) => {
        const {
          branchName,
          sessionName,
          sessionId,
          branchId,
          employeeId,
          month,
        } = data;
        return {
          url: `/getEmployeeAttendanceForAdmin?branchName=${branchName}&sessionName=${sessionName}&sessionId=${sessionId}&branchId=${branchId}&employeeId=${employeeId}&month=${month}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getEmployeeEvent: builder.query({
      query: (branchId) => {
        return {
          url: `/getEmployeeEvent?page=1&limit=25&search=&branchId=${branchId}&role=teacher`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    addHomeworkEvaluation: builder.mutation({
      query: (data) => {
        return {
          url: `/addHomeworkEvaluation`,
          method: "POST",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: true,
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
  useGetBranchSessionWiseExamListQuery,
  useAddStudentAttendanceMutation,
  useManageEmployeeInOutMutation,
  useGetAllHallQuery,
  useGetExamScheduleListForTeacherQuery,
  useGetFilterWiseExamMarksForTeacherQuery,
  useGetAllBookQuery,
  useGetHomeWorksQuery,
  useSelfEventQuery,
  useGetBranchWiseSubjectQuery,
  useGetStudentAttendanceForAdminQuery,
  useGetAttendanceQuery,
  useGetEmployeeEventQuery,
  useAddHomeworkEvaluationMutation,
} = teacherApi;
