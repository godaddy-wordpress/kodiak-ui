import * as React from 'react'
import { Box, Image, Avatar } from '@kodiak-ui/primitives'

export default { title: 'Primitives/Avatar' }

export function AvatarWithSrc() {
  return (
    <>
      <Avatar
        alt="Test face"
        src="https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        // Optionally provide srcSet
        srcSet={`https://api.adorable.io/avatars/400/abott@adorable.io.png 480w,
        https://images.unsplash.com/photo-1516908205727-40afad9449a8?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80 800w`}
        sx={{
          bg: 'blue.3',
          color: 'white',
          fontSize: 6,
          height: '64px',
          width: '64px',
        }}
      />
    </>
  )
}

export function AvatarText() {
  return (
    <Avatar
      sx={{
        bg: 'blue.3',
        color: 'white',
        fontSize: 6,
        height: '64px',
        width: '64px',
      }}
    >
      T
    </Avatar>
  )
}

export function AvatarsStacked() {
  const avatars = ['A', 'B', 'C']
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          boxShadow: '0 0 0 2px currentColor',
        },
        '& > *:not(:first-of-type)': {
          marginLeft: '-4px',
        },
      }}
    >
      {avatars.map((avatar, index) => {
        return (
          <Avatar
            sx={{
              bg: 'blue.3',
              color: 'white',
              fontSize: 6,
              height: '64px',
              width: '64px',
            }}
            key={index}
          >
            {avatar}
          </Avatar>
        )
      })}
    </Box>
  )
}

export function AvatarsStackedFirstOnTop() {
  const avatars = ['A', 'B', 'C']
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          boxShadow: '0 0 0 2px currentColor',
        },
        '& > *:not(:first-of-type)': {
          marginLeft: '-4px',
        },
      }}
    >
      {avatars.map((avatar, index) => {
        return (
          <Avatar
            sx={{
              bg: 'blue.3',
              color: 'white',
              fontSize: 6,
              height: '64px',
              width: '64px',
              zIndex: 90 - index,
            }}
            key={index}
          >
            {avatar}
          </Avatar>
        )
      })}
    </Box>
  )
}
export function AvatarWithFallBackOnError() {
  return (
    <Avatar
      alt="Fallback first letter of alt"
      src="https://thisdomaindoesnotexist.skyverge.com"
      sx={{
        bg: 'blue.3',
        color: 'white',
        fontSize: 6,
        height: '64px',
        width: '64px',
      }}
    />
  )
}

export function ImageAvatarVariant() {
  return (
    <Image
      variant="avatar"
      src={'https://api.adorable.io/avatars/400/abott@adorable.io.png'}
      sx={{ width: '64px', height: '64px' }}
    />
  )
}

export function BoxVariantWithoutImage() {
  return (
    <Box
      variant="avatar"
      sx={{
        bg: 'gray.5',
        color: 'white',
        width: '64px',
        height: '64px',
        fontSize: '24px',
      }}
    >
      G
    </Box>
  )
}
