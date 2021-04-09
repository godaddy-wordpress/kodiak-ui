import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

const DRAG_ITEM_TYPE = 'row'

export type UseDraggableRowProps = {
  index: number
  moveRow: (dragIndex: number, hoverIndex: number) => void
}

export function useDraggableRow({ index, moveRow }: UseDraggableRowProps) {
  const dragRef = useRef<any>(null)
  const dropRef = useRef<any>(null)

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: DRAG_ITEM_TYPE,
    hover(item: any, monitor) {
      if (!dropRef.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = dropRef.current.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveRow(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  }))

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: DRAG_ITEM_TYPE,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }))

  preview(drop(dropRef))
  drag(dragRef)

  return {
    dragRef,
    dropRef,
    canDrop,
    isDragging,
    isOver,
  }
}
