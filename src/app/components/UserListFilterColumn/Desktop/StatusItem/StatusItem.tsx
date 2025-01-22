import { Draggable } from 'react-beautiful-dnd';

import { StatusItemType } from '../types';

import styles from './StatusItemStyle.module.scss';

function StatusItem({ status, index }: StatusItemType) {
  return (
    <Draggable draggableId={status.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={styles.statusItem}
          data-testid="status-item"
        >
          <p>{status.content}</p>
          {/* <DragOutlined /> */}Icon
        </div>
      )}
    </Draggable>
  );
}

export default StatusItem;
