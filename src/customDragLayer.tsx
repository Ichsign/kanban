import { useDragLayer } from "react-dnd";
import { Column } from "./Column";
import { Card } from "./Card";
import { DragPreviewWrapper } from "./styles";
import { useAppState } from "./state/appStateContext";

export const CustomDragLayer = () => {
    const { draggedItem } = useAppState();
    const { currentOffset } = useDragLayer((monitor => ({
        currentOffset: monitor.getSourceClientOffset()
    })))

    return draggedItem && currentOffset ? (
        <DragPreviewWrapper position={currentOffset}>
            {draggedItem.type === "COLUMN" ? (
                <Column
                    text={draggedItem.text}
                    id={draggedItem.id}
                    isPreview
                />
            ) : (
                <Card
                    columnId={draggedItem.columnId}
                    isPreview
                    id={draggedItem.id}
                    text={draggedItem.text}
                />
            )}

        </DragPreviewWrapper>
    ) : null;
}
