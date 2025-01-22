import { DropDownOption } from '@app/constants/global/types';

import { StatusContentType } from '../types';

export type Filter = {
  name: string;
  options: DropDownOption[];
};

export type StatusItemType = {
  status: StatusContentType;
  index: number;
};
