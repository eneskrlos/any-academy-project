import Image from 'next/image'

interface PropsImage {
    src: string,
    width: number,
    height: number,
    alt: string,
    priority: boolean
    style: React.CSSProperties
}
 
export default function ImageComponet({ src, width, height, alt, priority = false, style }: PropsImage) {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
      style={style}
    />
  )
}