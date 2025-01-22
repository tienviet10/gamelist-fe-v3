import FilterListWrapper from '../CommonFilters/Filters';
import ListsWrapper from '../CommonFilters/ListsWrapper';
import SortListsWrapper from '../CommonFilters/SortLists';
import YearSlider from '../CommonFilters/YearSlider';

import SearchBar from './SearchBar';

import styles from './FilterDesktop.module.scss';

function FilterDesktop() {
  return (
    <div className={styles.filterDesktop}>
      <SearchBar />
      <ListsWrapper />
      <FilterListWrapper />
      <YearSlider />
      <SortListsWrapper />
    </div>
  );
}

export default FilterDesktop;
