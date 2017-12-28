interface IResultItem {
  spiral: number[][],
  value: number
}

enum SegmentType { RightDown = 1, BottomToLeft, LeftUp, TopToRight }
