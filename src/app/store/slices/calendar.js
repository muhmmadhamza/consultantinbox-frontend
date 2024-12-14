import { createSlice } from "@reduxjs/toolkit";
import httpRequest from "../../axios/index";

// utils
//
import { dispatch } from "../index";
import { TaskList, ComplianceTaskList } from "../../services";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  events: [],
  isOpenModal: false,
  selectedEventId: null,
  selectedEventType: "",
  selectedRange: null,
};

const slice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EVENTS
    getEventsSuccess(state, action) {
      state.isLoading = false;
      state.events = action.payload;
    },

    // SELECT EVENT
    selectEvent(state, action) {
      const { id, type } = action.payload;
      return {
        ...state,
        isOpenModal: true,
        selectedEventId: id,
        selectedEventType: type,
      };
    },

    // SELECT RANGE
    selectRange(state, action) {
      const { start, end } = action.payload;
      state.isOpenModal = true;
      state.selectedRange = { start, end };
    },

    // OPEN MODAL
    openModal(state) {
      state.isOpenModal = true;
    },

    // CLOSE MODAL
    closeModal(state) {
      state.isOpenModal = false;
      state.selectedEventId = null;
      state.selectedEventType = "";
      state.selectedRange = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { openModal, closeModal, selectEvent } = slice.actions;

// ----------------------------------------------------------------------

export function getEvents(companyId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      // Call both APIs concurrently
      const [taskListResponse, complianceTaskListResponse] = await Promise.all([
        TaskList(companyId),
        ComplianceTaskList(companyId), // Assuming this API function exists
      ]);

      // Transform the response data from TaskList API
      const transformedTaskListData = taskListResponse.data.response.map(
        (task) => ({
          type: "project_task",
          id: task.id,
          color: "#1890FF",
          textColor: "#1890FF",
          start: new Date(task.start_date).toISOString(), // Set start to start_date
          end: new Date(task.end_date).toISOString(), // Set end to end_date// Set end to end_date
          title: task.title, // Set title to
          description: task.description, // Set description to
          project_id: task.project_id, // Set project_id to
          column_id: task.column_id, // Set column_id to
          order_id: task.order_id, // Set order_id to
          status: task.status, // Set status to
          priority: task.priority, // Set priority to
          assigned_by: task.assigned_by, // Set assigned_by to
          assigned_to: task.assigned_to, // Set assigned_to to
          is_deleted: task.is_deleted, // Set is_deleted to
          createdAt: task.createdAt, // Set createdAt to
          updatedAt: task.updatedAt,
          User: task.User,
        })
      );

      // Transform the response data from ComplianceTaskList API
      const transformedComplianceTaskListData =
        complianceTaskListResponse.data.response.map((task) => ({
          type: "compliance_task",
          id: task.id.toString(),
          color: "#FF4842",
          textColor: "#FF4842",
          start: new Date(task.repeat_date).toISOString(), // Set start to start_date
          end: new Date(task.repeat_date).toISOString(), // Set end to end_date// Set end to end_date
          title: task.title, // Set title to
          description: task.description, // Set description to
          createdAt: task.createdAt, // Set createdAt to
          updatedAt: task.updatedAt,
          company_id: task.company_id, // Set company_id to
        }));

      // Dispatch success action with combined transformed data
      dispatch(
        slice.actions.getEventsSuccess([
          ...transformedTaskListData,
          ...transformedComplianceTaskListData,
        ])
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function selectRange(start, end) {
  return async () => {
    dispatch(
      slice.actions.selectRange({
        start: start.getTime(),
        end: end.getTime(),
      })
    );
  };
}
