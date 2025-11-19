export interface MakeupSuggestion {
  title: string;
  description: string;
  steps: string[];
  productsUsed: string[];
}

export interface ExampleLook {
  id: number;
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
  matchRate: number;
}
