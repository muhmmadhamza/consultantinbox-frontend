import React, { useEffect } from "react";
// @mui
import { Container, Stack } from "@mui/material";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  getBoard,
  persistColumn,
  persistCard,
} from "../../../../store/slices/kanban";
// routes
// components
import Page from "../../../../component/Page";
import HeaderBreadcrumbs from "../../../../component/HeaderBreadcrumbs";
// sections
import { KanbanColumn, KanbanColumnAdd } from "../../dashboard/kanban";

import show_Toast from "../../../../helpers/toast.helper";
import { UpdateColumnOrder, UpdateTaskOrder } from "../../../../services";
import { useParams } from "react-router-dom";

// ----------------------------------------------------------------------

export default function Kanban() {
  const { id, type } = useParams();

  const dispatch = useDispatch();

  const { board } = useSelector((state) => state.kanban);

  useEffect(() => {
    dispatch(getBoard({ projectId: id, formId: type }));
  }, [dispatch]);

  const fetchOrderData = async (newColumnOrder) => {
    try {
      const response = await UpdateColumnOrder(newColumnOrder);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const updateCardOrder = async (newColumnOrder) => {
    try {
      const response = UpdateTaskOrder(newColumnOrder);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      // Store the previous columnOrder
      const previousColumnOrder = board.columnOrder;
      const newColumnOrder = Array.from(previousColumnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      // Create an array of objects with column_id and their new order_id
      const columnIdOrderMap = newColumnOrder.map((columnId, newIndex) => {
        const column = board.columns[columnId];
        const order_id = newIndex + 1; // Assuming order_id starts from 1

        return {
          column_id: columnId,
          order_id: order_id,
          project_id: id,
        };
      });

      // Dispatch with both current and previous values
      dispatch(persistColumn(newColumnOrder));

      fetchOrderData(columnIdOrderMap);

      return;
    }
    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    if (start.id === finish.id) {
      const updatedCardIds = [...start.cardIds];
      updatedCardIds.splice(source.index, 1);
      updatedCardIds.splice(destination.index, 0, draggableId);

      const updatedColumn = {
        ...start,
        cardIds: updatedCardIds,
      };

      dispatch(
        persistCard({
          ...board.columns,
          [updatedColumn.id]: updatedColumn,
        })
      );

      // Create an array of objects with card_id, order_id, column_id, and project_id
      const cardIdOrderMap = updatedCardIds.map((cardId, newIndex) => {
        const card = board.cards[cardId];
        const order_id = newIndex + 1; // Assuming order_id starts from 1

        return {
          task_id: cardId,
          order_id: order_id,
          column_id: updatedColumn.id,
          project_id: id,
        };
      });

      // Dispatch with card update payload
      updateCardOrder(cardIdOrderMap);

      return;
    }

    // When a card is moved from one column to another
    const startCardIds = [...start.cardIds];
    startCardIds.splice(source.index, 1);
    const updatedStart = {
      ...start,
      cardIds: startCardIds,
    };

    const finishCardIds = [...finish.cardIds];
    finishCardIds.splice(destination.index, 0, draggableId);
    const updatedFinish = {
      ...finish,
      cardIds: finishCardIds,
    };

    dispatch(
      persistCard({
        ...board.columns,
        [updatedStart.id]: updatedStart,
        [updatedFinish.id]: updatedFinish,
      })
    );

    // Create an array of objects with card_id, order_id, column_id, and project_id for both columns
    const cardIdOrderMapStart = startCardIds.map((cardId, newIndex) => {
      const card = board.cards[cardId];
      const order_id = newIndex + 1; // Assuming order_id starts from 1

      return {
        task_id: cardId,
        order_id: order_id,
        column_id: updatedStart.id,
        project_id: id,
      };
    });

    const cardIdOrderMapFinish = finishCardIds.map((cardId, newIndex) => {
      const card = board.cards[cardId];
      const order_id = newIndex + 1; // Assuming order_id starts from 1

      return {
        task_id: cardId,
        order_id: order_id,
        column_id: updatedFinish.id,
        project_id: id,
      };
    });

    // Dispatch with card update payload for both columns
    updateCardOrder([...cardIdOrderMapStart, ...cardIdOrderMapFinish]);
  };

  return (
    <>
      <Page title="Kanban" sx={{ height: 1 }}>
        <Container maxWidth={false} sx={{ height: 1 }}>
          <HeaderBreadcrumbs
            heading="Kanban"
            links={[
              {
                name: "Dashboard",
                href: "/",
              },
              { name: "Kanban" },
            ]}
          />
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable
              droppableId="all-columns"
              direction="horizontal"
              type="column"
            >
              {(provided) => (
                <Stack
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  direction="row"
                  alignItems="flex-start"
                  spacing={1.5}
                  sx={{
                    height: "calc(100% - 32px)",
                    overflowY: "scroll",
                    '::-webkit-scrollbar': {
                      width: 1,
                      height: 6,
                      borderRadius: '4px'

                    },
                    '::-webkit-scrollbar-thumb': {

                      borderRadius: '5px !important',

                    },
                    '::-webkit-scrollbar-track': {
                      backgroundColor: 'lightgray',
                    },
                  }}    >
                  {board.columnOrder.map((columnId, index) => (
                    <KanbanColumn
                      index={index}
                      key={columnId}
                      column={board.columns[columnId]}
                      project_id={id}
                    />
                  ))}

                  {provided.placeholder}
                  <KanbanColumnAdd id={id} type={type} />
                </Stack>
              )}
            </Droppable>
          </DragDropContext>
        </Container>
      </Page>
    </>
  );
}
