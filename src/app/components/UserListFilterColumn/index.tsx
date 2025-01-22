// import { useState } from 'react';

import FilterDesktop from './Desktop';

function FilterColumn() {
  // const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <>
      <FilterDesktop />
      {/* <FilterMobile collapsed={collapsed} setCollapsed={setCollapsed} />
      {collapsed && (
        <div className={styles.mobileDropdown}>
          <ListsWrapper />
          <FilterListWrapper />
          <YearSlider />
          <SortListsWrapper />
        </div>
      )} */}
    </>
  );
}

export default FilterColumn;
