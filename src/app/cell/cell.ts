export class Cell {
  id: number;
  isMine: boolean;
  isFlag: boolean;
  coordinates: {
    x: number;
    y: number;
  };
}
