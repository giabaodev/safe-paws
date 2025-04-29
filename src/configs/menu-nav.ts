import { PATH_NAMES } from '@/constants';
import { MenuNavItem } from '@/types/menu';

export const MenuNavList: MenuNavItem[] = [
  {
    label: 'Product',
    path: PATH_NAMES.PRODUCT,
  },
  {
    label: 'Sustainability',
    path: PATH_NAMES.SUSTAINABILITY,
  },
  {
    label: 'Community',
    path: PATH_NAMES.COMMUNITY,
  },
  {
    label: 'About us',
    path: PATH_NAMES.ABOUT,
  },
];
