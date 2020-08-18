import * as React from 'react'
import {
  useCombobox,
  Combobox,
  ComboboxLabel,
  ComboboxInput,
  ComboboxButton,
  ComboboxMenu,
  ComboboxMenuItem,
} from '@kodiak-ui/combobox'

const items = [
  'Neptunium',
  'Plutonium',
  'Americium',
  'Curium',
  'Berkelium',
  'Californium',
  'Einsteinium',
  'Fermium',
  'Mendelevium',
  'Nobelium',
  'Lawrencium',
  'Rutherfordium',
  'Dubnium',
  'Seaborgium',
  'Bohrium',
  'Hassium',
  'Meitnerium',
  'Darmstadtium',
  'Roentgenium',
  'Copernicium',
  'Nihonium',
  'Flerovium',
  'Moscovium',
  'Livermorium',
  'Tennessine',
  'Oganesson',
]

export default { title: 'Combobox', component: Combobox }

export function Initial() {
  const [inputItems, setInputItems] = React.useState(items)
  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getComboboxProps,
    getMenuProps,
    getInputProps,
    getItemProps,
    highlightedIndex,
  } = useCombobox<string>({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        items.filter(item =>
          item.toLowerCase().startsWith(`${inputValue}`.toLowerCase()),
        ),
      )
    },
  })

  return (
    <>
      <ComboboxLabel {...getLabelProps()}>Choose an element:</ComboboxLabel>
      <Combobox {...getComboboxProps()}>
        <ComboboxInput {...getInputProps()} />
        <ComboboxButton {...getToggleButtonProps()}>&#8595;</ComboboxButton>
      </Combobox>
      {isOpen && (
        <ComboboxMenu {...getMenuProps()}>
          {inputItems.map((item, index) => (
            <ComboboxMenuItem
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
              sx={{
                bg: highlightedIndex === index ? 'primary' : 'inherit',
                color: highlightedIndex === index ? 'white' : 'inherit',
              }}
            >
              {item}
            </ComboboxMenuItem>
          ))}
        </ComboboxMenu>
      )}
    </>
  )
}
