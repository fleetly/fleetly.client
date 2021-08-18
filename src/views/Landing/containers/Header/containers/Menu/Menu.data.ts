// Containers
import Integrations from '../Integrations';
import Products from '../Products';

export const MENU_ID = {
  INTEGRATIONS: 'integrations',
  PRODUCTS: 'products',
  PRICING: 'pricing'
};

export const MENU: {
  id?: string;
  Dropdown?: any;
  title: string;
}[] = [
  {
    id: MENU_ID.PRODUCTS,
    Dropdown: Products,
    title: 'Products'
  },
  {
    id: MENU_ID.INTEGRATIONS,
    Dropdown: Integrations,
    title: 'Integrations'
  },
  {
    id: MENU_ID.PRICING,
    title: 'Pricing'
  }
];
