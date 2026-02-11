
export enum DesignPatternType {
  MINIMALIST_EDITORIAL = 'MINIMALIST_EDITORIAL',
  SOFT_ORGANIC = 'SOFT_ORGANIC',
  STRUCTURED_SWISS = 'STRUCTURED_SWISS'
}

export interface DesignElement {
  title: string;
  description: string;
  impact: string;
}

export interface PatternData {
  id: DesignPatternType;
  name: string;
  tagline: string;
  concept: string;
  elements: DesignElement[];
  colors: string[];
  fonts: string[];
}
