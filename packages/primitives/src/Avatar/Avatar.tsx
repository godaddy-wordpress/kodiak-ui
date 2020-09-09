import * as React from 'react'
import { Box } from '../Box'
import { Image as KodiakImage } from '../Image'

type AvatarProps = React.PropsWithChildren<{
  src?: string
  srcSet?: React.ImgHTMLAttributes<HTMLImageElement>['srcSet']
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>
  alt?: React.ImgHTMLAttributes<HTMLImageElement>['alt']
  sizes?: React.ImgHTMLAttributes<HTMLImageElement>['sizes']
}>

enum ImageState {
  initial,
  loaded,
  error,
}

// From material-ui https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Avatar/Avatar.js
function useLoadImage({
  src,
  srcSet,
}: {
  src?: AvatarProps['src']
  srcSet?: AvatarProps['srcSet']
}) {
  const [imageState, setImageState] = React.useState(ImageState.initial)

  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined
    }

    setImageState(ImageState.initial)

    let active = true
    const image = new Image()

    if (typeof src === 'string') {
      image.src = src
    }

    if (typeof srcSet === 'string') {
      image.srcset = srcSet
    }

    image.onload = () => {
      if (!active) {
        return
      }
      setImageState(ImageState.loaded)
    }

    image.onerror = () => {
      if (!active) {
        return
      }
      setImageState(ImageState.error)
    }

    return () => {
      active = false
    }
  }, [src, srcSet])

  return { imageState }
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  function Avatar(
    {
      children: childrenProp,
      src,
      srcSet,
      alt,
      sizes,
      imgProps,
      ...props
    }: AvatarProps,
    ref,
  ) {
    const { imageState } = useLoadImage({ src, srcSet })
    const hasImg = src || srcSet
    const hasImgNotFailing = hasImg && imageState !== ImageState.error

    let children = null

    if (hasImgNotFailing) {
      children = (
        <KodiakImage
          __base={{
            width: '100%',
            height: '100%',
            textAlign: 'center',
            // Handle non-square image. The property isn't supported by IE 11.
            objectFit: 'cover',
            // Hide alt text.
            color: 'transparent',
            // Hide the image broken icon, only works on Chrome.
            textIndent: 10000,
          }}
          variantKey="avatar"
          variant="image"
          alt={alt}
          src={src}
          srcSet={srcSet}
          sizes={sizes}
          {...imgProps}
        />
      )
    } else if (childrenProp != null) {
      children = childrenProp
    } else if (hasImg && alt) {
      children = alt[0]
    } else {
      children = null
    }

    return (
      <Box
        ref={ref}
        variantKey="avatar"
        __base={{
          alignItems: 'center',
          borderRadius: 'full',
          display: 'inline-flex',
          flexShrink: 0,
          justifyContent: 'center',
          lineHeight: 1,
          overflow: 'hidden',
          position: 'relative',
          userSelect: 'none',
          width: '32px',
          height: '32px',
        }}
        {...props}
      >
        {children}
      </Box>
    )
  },
)

export default Avatar
