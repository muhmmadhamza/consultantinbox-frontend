import { createSlice } from "@reduxjs/toolkit";
import omit from "lodash/omit";
// utils
import httpRequest from "../../axios/index";
//
import { dispatch } from "../index";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  board: {
    cards: {},
    columns: {},
    columnOrder: [],
  },
  assignUser: [],
  comments: [],
};

const slice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    resetKanbanState(state) {
      Object.assign(state, initialState);
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET BOARD

    getBoardSuccess(state, action) {
      state.isLoading = false;
      state.board = action.payload;
    },

    // CREATE NEW COLUMN
    createColumnSuccess(state, action) {
      const newColumn = action.payload;
      state.isLoading = false;
      state.board.columns = {
        ...state.board.columns,
        [newColumn.id]: newColumn,
      };
      state.board.columnOrder.push(newColumn.id);
    },

    persistCard(state, action) {
      const columns = action.payload;
      state.board.columns = columns;
    },

    persistColumn(state, action) {
      state.board.columnOrder = action.payload;
    },

    addTaskSuccess(state, action) {
      const columnIds = action.payload;
      state.isLoading = false;
      state.board.cards = {
        ...state.board.cards,
        [columnIds.id]: columnIds,
      };
      state.board.columns[columnIds.column_id].cardIds.push(columnIds.id);
    },

    // UPDATE Task
    updateTaskSuccess(state, action) {
      const card = action.payload;
      state.isLoading = false;
      state.board.cards[card.id] = card;
    },

    deleteTaskSuccess(state, action) {
      const { cardId, columnId } = action.payload;

      state.board.columns[columnId].cardIds = state.board.columns[
        columnId
      ].cardIds.filter((id) => id !== cardId);
      state.board.cards = omit(state.board.cards, [cardId]);
    },

    // UPDATE COLUMN
    updateColumnSuccess(state, action) {
      const column = action.payload;

      state.isLoading = false;
      state.board.columns[column.id] = column;
    },

    // DELETE COLUMN
    deleteColumnSuccess(state, action) {
      const { columnId } = action.payload;
      const deletedColumn = state.board.columns[columnId];

      state.isLoading = false;
      state.board.columns = omit(state.board.columns, [columnId]);
      state.board.cards = omit(state.board.cards, [...deletedColumn.cardIds]);
      state.board.columnOrder = state.board.columnOrder.filter(
        (c) => c !== columnId
      );
    },
    setAssignUser: (state, action) => {
      state.assignUser = action.payload;
    },

    addCommentSuccess: (state, action) => {
      state.comments = action.payload;
    },

    updateCommentSuccess: (state, action) => {
      state.comments = action.payload;
    },

    CommentListSuccess: (state, action) => {
      state.comments = action.payload;
    },

    deleteCommentSuccess: (state, action) => {
      const commentIdToDelete = action.payload;
      state.comments = state.comments.filter(
        (comment) => comment.id !== commentIdToDelete
      );
    },
  },
});

// Reducer
export default slice.reducer;

export const { actions } = slice;

// ----------------------------------------------------------------------

export function getBoard({ projectId, formId }) {
  return async (dispatch) => {
    // Pass dispatch as an argument
    dispatch(slice.actions.startLoading());
    try {
      const response = await httpRequest.get(
        `/api/columns/list/${projectId}/${formId}`
      );
      const boardData = response.data.response.board;

      // Process the boardData here as needed
      const { columns, cards } = boardData; // Destructure columns and cards

      const columnOrder = columns.map((column) => column.id); // Extract column IDs

      const processedColumns = {};
      const processedCards = {};

      columns.forEach((column) => {
        // Initialize cardIds for each column and add card IDs
        column.cardIds = cards
          .filter((card) => card.column_id === column.id)
          .map((card) => card.id);

        // Add the processed column to the columns object
        processedColumns[column.id] = column;
      });

      cards.forEach((card) => {
        // Process and add cards to the cards object
        processedCards[card.id] = card;
      });
      // Update the state with the processed data
      dispatch(
        slice.actions.getBoardSuccess({
          columns: processedColumns,
          cards: processedCards,
          columnOrder,
        })
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createColumn(newColumn) {
  return () => {
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.createColumnSuccess(newColumn));
  };
}

// ----------------------------------------------------------------------

export function addTask(task) {
  return () => {
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.addTaskSuccess(task));
  };
}

// ----------------------------------------------------------------------

export function updateColumn(updateColumn) {
  return () => {
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.updateColumnSuccess(updateColumn));
  };
}

// ----------------------------------------------------------------------

export function updateTask(updateTask) {
  return () => {
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.updateTaskSuccess(updateTask));
  };
}

// ----------------------------------------------------------------------

export function deleteColumn(columnId) {
  return () => {
    dispatch(slice.actions.startLoading());
    dispatch(slice.actions.deleteColumnSuccess({ columnId }));
  };
}

// ----------------------------------------------------------------------

export function persistColumn(newColumnOrder) {
  return () => {
    dispatch(slice.actions.persistColumn(newColumnOrder));
  };
}

// ----------------------------------------------------------------------

export function persistCard(columns) {
  return () => {
    dispatch(slice.actions.persistCard(columns));
  };
}

// ----------------------------------------------------------------------

export function deleteTask({ cardId, columnId }) {
  return (dispatch) => {
    dispatch(slice.actions.deleteTaskSuccess({ cardId, columnId }));
  };
}

// ----------------------------------------------------------------------

export function assignUserList(user) {
  return (dispatch) => {
    dispatch(slice.actions.setAssignUser(user));
  };
}

export function addComment(comment) {
  return (dispatch) => {
    dispatch(slice.actions.addCommentSuccess(comment));
  };
}
export function updateComment(comment) {
  return (dispatch) => {
    dispatch(slice.actions.updateCommentSuccess(comment));
  };
}

export function commentList(comment) {
  return (dispatch) => {
    dispatch(slice.actions.CommentListSuccess(comment));
  };
}

export function deleteComment(commentId) {
  return (dispatch) => {
    dispatch(slice.actions.deleteCommentSuccess(commentId));
  };
}
