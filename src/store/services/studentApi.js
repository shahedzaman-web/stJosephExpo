import { appApi } from "./appApi";

const studentApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSubject: builder.query({
      query: (data) => {
        const { branchName, branchId, sessionName, sessionId } = data;
        //console.log({data});
        return {
          url: `/getAllSubject?page=1&limit=25&search=&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAcademicAttachmentLists: builder.query({
      query: (data) => {
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
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getClassSchedule: builder.query({
      query: (data) => {
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
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getExamList: builder.query({
      query: (data) => {
        const { branchName, branchId, sessionName, sessionId } = data;
        return {
          url: `/getBranchSessionWiseExamList?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
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
          sessionName,
          sessionId,
          classId,
          sectionId,
          examId,
          subjectId,
        } = data;
        return {
          url: `/getFilterWiseExamMarks?branchName=${branchName}&sessionName=${sessionName}&branchId=${branchId}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&examId=${examId}&subjectId=${subjectId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getExamScheduleList: builder.query({
      query: (data) => {
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
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getOneExamSchedule: builder.query({
      query: (data) => {
        const { id, branchName, sessionName } = data;
        return {
          url: `/getOneExamSchedule/${id}?branchName=${branchName}&sessionName=${sessionName}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getSubject: builder.query({
      query: (data) => {
        const { branchName, branchId, sessionName, sessionId } = data;

        return {
          url: `/branchWiseSubject?branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAllHomeworkEvaluationForStudent: builder.query({
      query: (data) => {
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
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentEvent: builder.query({
      query: (data) => {
        const { classId, branchId } = data;
        return {
          url: `/getStudentEvent?page=1&limit=25&search=&branchId=${branchId}&classId=${classId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentsAttendanceMonthWist: builder.query({
      query: (data) => {
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
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getAllBranchForStudent: builder.query({
      query: () => {
        return {
          url: `/getAllBranch?page=1&limit=50&search=`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentFeesSummary: builder.query({
      query: (data) => {
        const {
          branchName,
          branchId,
          sessionName,
          sessionId,
          classId,
          sectionId,
          studentId,
          payingMonth,
        } = data;
        const url = `/getStudentFeesSummary?page=1&limit=25&branchName=${branchName}&branchId=${branchId}&sessionName=${sessionName}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}&payingMonth=${payingMonth}&studentId=${studentId}`;
        console.log({ url });
        return {
          url: url,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getStudentPaymentStatus: builder.query({
      query: (data) => {
        const { studentId, branchName, sessionName } = data;
        return {
          url: `/getStudentPaymentStatus?studentId=${studentId}&branchName=${branchName}&sessionName=${sessionName}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    getFeesSetupForCollection: builder.query({
      query: (data) => {
        const { branchId, sessionId, sectionId, classId } = data;
        return {
          url: `/getFeesSetupForCollection?branchId=${branchId}&sessionId=${sessionId}&classId=${classId}&sectionId=${sectionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
        };
      },
    }),
    sslRequest: builder.query({
      query: (data) => {
        const {
          amount,
          refId,
          studentName,
          studentPhone,
          studentId,
          billingMonth,
          branchId,
          sessionId,
          regNo,
          monthlyFees,
          fine,
          roll,
          classId,
          sectionId,
        } = data;
        return {
          url: `/ssl-request?amount=${amount}&refId=${refId}&studentName=${studentName}&studentPhone=${studentPhone}&studentId=${studentId}&billingMonth=${billingMonth}&branchId=${branchId}&sessionId=${sessionId}&regNo=${regNo}&monthlyFees=${monthlyFees}&fine=${fine}&roll=${roll}&classId=${classId}&sectionId=${sectionId}`,
          method: "GET",
          validateStatus: (response, result) =>
            response.status === 200 && !result.isError, // Our tricky API always returns a 200, but sets an `isError` property when there is an error.
            transformResponse: (rawResult, meta) => {
              console.log({ rawResult, meta });
              if (meta.status === 200) {
                return rawResult
              }
              return {
                isError: true,
                error: rawResult,
              };
            }
        };

      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAllSubjectQuery,
  useGetClassScheduleQuery,
  useGetExamScheduleListQuery,
  useGetAcademicAttachmentListsQuery,
  useSubjectQuery,
  useGetAllClassQuery,
  useGetAllSectionQuery,
  useGetAllBranchForStudentQuery,
  useGetAllSessionQuery,
  useGetAllTeacherQuery,
  useGetAllExamQuery,
  useGetAllExamScheduleQuery,
  useGetAllClassScheduleQuery,
  useGetAllStudentEventQuery,
  useGetAllHomeworkEvaluationForStudentQuery,
  useGetExamListQuery,
  useGetFilterWiseExamMarksQuery,
  useGetOneExamScheduleQuery,
  useGetStudentsAttendanceMonthWistQuery,
  useGetStudentEventQuery,
  useGetStudentFeesSummaryQuery,
  useGetStudentPaymentStatusQuery,
  useGetFeesSetupForCollectionQuery,
  useSslRequestQuery,
} = studentApi;
