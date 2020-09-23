import * as React from 'react'
import {
  //   Select,
  //   SelectLabel,
  //   SelectButton,
  //   SelectMenu,
  //   SelectMenuItem,
  useSelect,
} from '@kodiak-ui/select'
// import {
//   VisuallyHidden,
//   Box,
//   Flex,
//   Text,
//   DotLoadingIndicator,
// } from '@kodiak-ui/primitives'

const items = ['Layouts', 'Pre-built', 'All']
// const initialSelectedItem = 'All'

// export default { title: 'Select', component: Select }
export default { title: 'Select' }

export function Initial() {
  const {
    isOpen,
    getLabelProps,
    getTriggerProps,
    getMenuProps,
    getOptionProps,
  } = useSelect({ items })

  return (
    <div>
      <span {...getLabelProps()}>Choose an element:</span>
      <div>
        <button {...getTriggerProps()}>Choose an element:</button>
        {isOpen ? (
          <ul {...getMenuProps()}>
            {items?.map((item, index) => (
              <li key={index} {...getOptionProps({ index })}>
                {item}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

// export function Initial() {
//   const {
//     isOpen,
//     selectedItem,
//     getToggleButtonProps,
//     getLabelProps,
//     getMenuProps,
//     highlightedIndex,
//     getItemProps,
//   } = useSelect<string>({ items, initialSelectedItem })

//   return (
//     <Select>
//       <VisuallyHidden>
//         <SelectLabel {...getLabelProps()}>Choose a filter:</SelectLabel>
//       </VisuallyHidden>
//       <SelectButton isOpen={isOpen} {...getToggleButtonProps()}>
//         {selectedItem || 'Filter'}
//       </SelectButton>
//       {isOpen && (
//         <SelectMenu variant="selectMenu" {...getMenuProps()}>
//           {items.map((item, index) => (
//             <SelectMenuItem
//               key={`${item}${index}`}
//               {...getItemProps({ item, index })}
//               sx={{
//                 bg: highlightedIndex === index ? 'primary' : 'inherit',
//                 color: highlightedIndex === index ? 'white' : 'inherit',
//               }}
//             >
//               {item}
//             </SelectMenuItem>
//           ))}
//         </SelectMenu>
//       )}
//     </Select>
//   )
// }

// export function Loading() {
//   const { getToggleButtonProps } = useSelect<string>({ items })

//   return (
//     <SelectButton isOpen={false} {...getToggleButtonProps()}>
//       <Flex sx={{ width: '100%' }}>
//         <Box sx={{ flex: 1 }}>
//           <Text sx={{ color: 'gray.3' }}>Loading</Text>
//         </Box>
//         <DotLoadingIndicator sx={{ mr: 1 }} />
//       </Flex>
//     </SelectButton>
//   )
// }
