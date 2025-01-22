import { ChangeEvent, PropsWithChildren, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import useGetFilters from '@app/services/game/useGetFilters';
import { setUserGameFilters } from '@app/store/gameFiltersSlice';
import { useAppSelector } from '@app/store/hooks';

import styles from './FilterListWrapperStyle.module.scss';

type SelectFilterFieldType = {
  mode: 'multiple' | undefined;
  placeholder: string;
  value: string[] | string | undefined;
  options: string[] | number[] | null;
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
};

function SelectFilterField({
  placeholder,
  mode,
  value,
  options,
  onChange,
  ...rest
}: PropsWithChildren<SelectFilterFieldType>) {
  const optionsMemo = useMemo(() => {
    const tempOptions = [];

    if (options) {
      tempOptions.push(...options);
    }

    return tempOptions.map((s) => (
      // <Select.Option key={s} value={s}>
      //   <div className={styles.option} data-testid={`option-${s}`}>
      //     {s}
      //   </div>
      // </Select.Option>
      <option key={s as string} value={s as string}>
        {s}
      </option>
    ));
  }, [options]);

  return (
    <select
      {...rest}
      className={styles.cascaderStyle}
      multiple={mode === 'multiple'}
      onChange={onChange}
      style={{ width: 200 }}
      value={value}
    >
      {optionsMemo}
    </select>
  );
}

function FilterList() {
  const dispatch = useDispatch();
  const gameFilters = useAppSelector((state) => state.userGameFilters);
  const { genres, platforms, tags } = useGetFilters();

  return (
    <div className={styles.dropdownList}>
      <SelectFilterField
        data-testid="dropdown-genres"
        mode={undefined}
        onChange={(value) => dispatch(setUserGameFilters({ genres: value.target.value }))}
        options={genres || []}
        placeholder="Genres"
        value={gameFilters.genres}
      />

      <SelectFilterField
        data-testid="dropdown-platforms"
        mode={undefined}
        onChange={(value) => dispatch(setUserGameFilters({ platforms: value.target.value }))}
        options={platforms || []}
        placeholder="Platforms"
        value={gameFilters.platforms}
      />

      <SelectFilterField
        data-testid="dropdown-tags"
        mode={undefined}
        onChange={(value) => dispatch(setUserGameFilters({ tags: value.target.value }))}
        options={tags || []}
        placeholder="Tags"
        value={gameFilters.tags}
      />
    </div>
  );
}

export default FilterList;
