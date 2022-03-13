export type Point = {
  readonly x: number;
  readonly y: number;
};

export type BoundingRect = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

export type Mode = 'pen' | 'eraser';

export type ControlBase = {
  type: Mode;
  id: string;
};

export type Stroke = ControlBase & {
  type: 'pen';
  points: Point[];
};

export type Erase = ControlBase & {
  type: 'eraser';
  id: string;
  erasedStrokeIds: string[];
};

export type Control = Stroke | Erase;
