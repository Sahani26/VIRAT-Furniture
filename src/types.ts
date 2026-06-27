export type CategoryType = 'living' | 'bedroom' | 'dining' | 'office' | 'all';

export interface WoodMaterial {
  id: string;
  name: string;
  description: string;
  colorHex: string;
  pricePerSqFt: number;
  origin: string;
  grain: string;
}

export interface FinishType {
  id: string;
  name: string;
  description: string;
  priceMultiplier: number;
}

export interface UpholsteryType {
  id: string;
  name: string;
  colorName: string;
  colorHex: string;
  material: string;
  extraCost: number;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: Exclude<CategoryType, 'all'>;
  description: string;
  basePrice: number;
  features: string[];
  dimensions: {
    w: number; // inches
    d: number;
    h: number;
  };
  imageType: 'sofa' | 'table' | 'bed' | 'cabinet' | 'desk';
}

export interface ConfigState {
  furnitureType: 'sofa' | 'table' | 'bed' | 'cabinet' | 'desk';
  width: number;
  depth: number;
  height: number;
  materialId: string;
  finishId: string;
  upholsteryId: string;
  includePremiumPolish: boolean;
  extraDrawers: number;
}

export interface EstimateResult {
  baseCost: number;
  materialCost: number;
  finishCost: number;
  upholsteryCost: number;
  customizationCost: number;
  totalCost: number;
  craftingDays: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  text: string;
  location: string;
  avatarLetter: string;
  date: string;
}
