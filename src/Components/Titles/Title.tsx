import { Typography } from '@mui/material'

interface Props {
  text: string
  customClass?: string
  style?: React.CSSProperties;
  variant: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2'
  component: React.ElementType
  sx?: React.CSSProperties
}

export default function Title ({ text, variant, component, customClass, style, sx }: Props) {
  return (
    <Typography
      component={component}
      variant={variant}
      className={`${customClass || ''}`}
      sx={sx || {}} 
      style={style || {}}
    >
      {text}
    </Typography>
  )
}
