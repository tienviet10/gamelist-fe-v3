import { useState } from 'react';

import { useAppDispatch } from '@app/store/hooks';
import { resetLocalListOrder, setListOrder } from '@app/store/userGamesListSlice';

import AvailableLists from '../../Desktop/AvailableLists';
import ReorderLists from '../../Desktop/ReorderLists';

import styles from './ListsWrapperStyle.module.scss';

function ListsWrapper() {
  const dispatch = useAppDispatch();
  // const { editNewListsOrder } = useEditListsOrder();
  // const localListOrder = useAppSelector(
  //   (state) => state.userGames.localListOrder
  // );
  const [listStyles, setListStyles] = useState<boolean>(false);

  const handleSaveListOrder = () => {
    // editNewListsOrder(localListOrder.join(','), 'lists_order');
    dispatch(setListOrder());
    setListStyles((prev) => !prev);
  };

  const handleOrderToAvailableLists = () => {
    dispatch(resetLocalListOrder());
    setListStyles((prev) => !prev);
  };

  return (
    <>
      <div className={styles.multiListStyle}>
        <p>Lists</p>
        {listStyles ? (
          <div className={styles.saveIcons}>
            {/* <UpOutlined data-testid="up-arrow" onClick={() => setListStyles((prev) => !prev)} /> */}
            <button onClick={() => setListStyles((prev) => !prev)}>Arrow</button>
            {/* <SaveOutlined data-testid="save-button" onClick={handleSaveListOrder} /> */}
            <button onClick={handleSaveListOrder}>Save</button>
          </div>
        ) : (
          // <DownOutlined data-testid="down-arrow" onClick={handleOrderToAvailableLists} />
          <button onClick={handleOrderToAvailableLists}>Down</button>
        )}
      </div>
      <div className={styles.multiLists}>{listStyles ? <ReorderLists /> : <AvailableLists />}</div>
    </>
  );
}

export default ListsWrapper;
