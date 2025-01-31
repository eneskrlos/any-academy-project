import Image from 'next/image'

interface PropsImage {
    src: string,
    width: number,
    height: number,
    alt: string,
    priority: boolean
    style?: React.CSSProperties
    quality?: number | undefined
}
 
export default function ImageComponet({ src, width, height, alt, priority = false, style, quality }: PropsImage) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
      style={style || {}}
      quality={quality || undefined}
      sizes='(max-width: 768px) 100vw, 33vw'
    />
  )
}