import type { DefaultProps, Icons } from "@/types/kit";

export interface IconProps extends DefaultProps {
  name: Icons,
  width?: number,
  height?: number,
  viewBox?: string
}

export const Icon = ({
  name,
  width = 24,
  height = 24,
  viewBox = "0 0 24 24",
  ...props
}: IconProps) => {

  return (
    <svg width={width} height={height} viewBox={viewBox}>
      <use href={`/sprite.svg#${name}`}></use>
    </svg>
  );
}