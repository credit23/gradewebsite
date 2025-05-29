export interface Module {
  id: number;
  name: string;
  coefficient: number;
  exam: number | null;
  td: number | null;
  tp: number | null;
  average: number | null;
  hasTP?: boolean;
}