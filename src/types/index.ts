export interface IResultItem {
  spiral: number[][],
  value: number
}

export enum SegmentType { RightDown = 1, BottomToLeft, LeftUp, TopToRight }
