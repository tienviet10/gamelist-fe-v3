import { setUserGameFilters } from '@app/store/gameFiltersSlice';
import { useAppDispatch } from '@app/store/hooks';

import styles from './SearchBarStyle.module.scss';

function SearchBar() {
  const dispatch = useAppDispatch();

  return (
    // <Search
    //   className={styles.searchBar}
    //   placeholder="Filter"
    //   onChange={(e) => dispatch(setUserGameFilters({ search: e.target.value }))}
    //   data-testid="search-bar-desktop"
    // />
    <input
      className={styles.searchBar}
      onChange={(e) => dispatch(setUserGameFilters({ search: e.target.value }))}
      placeholder="Filter"
    />
  );
}

export default SearchBar;
