import type { MouseEventHandler } from 'react'

type Props = {
  id?: string
  icon?: { src: string; width?: number; height?: number }
  name?: string
  width?: number | string
  height?: number | string
  alt?: string
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

export const Icon = ({
  id, icon, width, height, className, alt, onClick
}: Props) => {
  return (
    <img
      id={id}
      src={icon?.src}
      alt={alt}
      width={width ?? icon?.width ?? 24}
      height={height ?? icon?.height ?? 24}
      className={className}
      onClick={onClick}
    />
  )
}
