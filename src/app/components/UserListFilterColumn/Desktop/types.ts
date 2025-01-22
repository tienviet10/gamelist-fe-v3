import type { DropDownOption } from '@app/constants/global/types';

import type { StatusContentType } from '../types';

export type Filter = {
  name: string;
  options: DropDownOption[];
};

export type StatusItemType = {
  status: StatusContentType;
  index: number;
};
