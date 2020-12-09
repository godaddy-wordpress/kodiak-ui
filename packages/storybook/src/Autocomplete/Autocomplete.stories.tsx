import * as React from 'react'
import {
  Autocomplete,
  AutocompleteInputButtonProps,
  AutocompleteInputProps,
  useAutocompleteStyles,
} from '@kodiak-ui/autocomplete'
import {
  Button,
  Flex,
  Grid,
  Input,
  InputGroup,
  SvgIcon,
  VisuallyHidden,
} from '@kodiak-ui/primitives'
import { SharedSx } from 'kodiak-ui'

export default { title: 'Autocomplete' }

const options = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antigua &amp; Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia &amp; Herzegovina',
  'Botswana',
  'Brazil',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Cape Verde',
  'Cayman Islands',
  'Chad',
  'Chile',
  'China',
  'Colombia',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Cote D Ivoire',
  'Croatia',
  'Cruise Ship',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Polynesia',
  'French West Indies',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kuwait',
  'Kyrgyz Republic',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Pierre &amp; Miquelon',
  'Samoa',
  'San Marino',
  'Satellite',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'South Africa',
  'South Korea',
  'Spain',
  'Sri Lanka',
  'St Kitts &amp; Nevis',
  'St Lucia',
  'St Vincent',
  'St. Lucia',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  "Timor L'Este",
  'Togo',
  'Tonga',
  'Trinidad &amp; Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks &amp; Caicos',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'Uruguay',
  'Uzbekistan',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (US)',
  'Yemen',
  'Zambia',
  'Zimbabwe',
]
const styles = useAutocompleteStyles({
  root: {
    width: '300px',
  },
  label: {
    fontWeight: 'normal',
  },
  listbox: {
    boxShadow: 'default',
    border: '1px solid',
    borderColor: 'gray.2',
    borderRadius: 'default',
  },
  listboxItem: {
    px: 4,
    py: 2,
  },
  tagButton: {
    borderLeft: '1px solid',
    borderColor: 'gray.3',
    height: '16px',
    width: '16px',
    ml: 1,
    pl: 1,
  },
})

export function SingleValue() {
  return (
    <Autocomplete
      label="Single value"
      placeholder="Start typing..."
      options={options}
      styles={styles}
    />
  )
}

export function MultiValue() {
  return (
    <Autocomplete
      isMulti
      label="Multiple values"
      placeholder="Start typing..."
      options={options}
      styles={styles}
    />
  )
}

export function Disabled() {
  return (
    <Autocomplete
      isDisabled={true}
      label="Disabled"
      placeholder="Start typing..."
      options={options}
      styles={styles}
    />
  )
}

export function Clearable() {
  return (
    <Grid
      sx={{
        gridTemplateColumns: 1,
        gap: 4,
      }}
    >
      <Autocomplete
        label="Clearable"
        placeholder="Start typing..."
        options={options}
        styles={styles}
      />
      <Autocomplete
        isClearable={false}
        label="Not clearable"
        placeholder="Start typing..."
        options={options}
        styles={styles}
        renderInput={(
          inputProps: AutocompleteInputProps,
          clearButtonProps: AutocompleteInputButtonProps,
          popoverButtonProps: AutocompleteInputButtonProps,
        ) => (
          <InputGroup
            sx={{
              alignItems: 'center',
              flexWrap: 'wrap',
              position: 'relative',
              pl: '2px',
              pr: '56px',
              ...styles?.inputGroup,
            }}
          >
            <Input
              type="text"
              variant="shadow"
              placeholder="Start typing..."
              {...inputProps}
              sx={{
                px: 1,
                py: '2px',
                width: 0,
                minWidth: '30px',
                flexGrow: 1,
                textOverflow: 'ellipsis',
                ...styles?.input,
              }}
            />
            <Flex
              sx={{
                alignItems: 'center',
                position: 'absolute',
                right: 0,
                pr: 1,
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <SharedSx
                sx={{
                  p: 1,
                }}
              >
                <Button
                  variants="shadow"
                  {...popoverButtonProps}
                  sx={{
                    height: '20px',
                    p: 0,
                    ...styles?.button,
                  }}
                >
                  <SvgIcon height="20" viewBox="0 0 24 24" width="20">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10l5 5 5-5z" fill="currentColor" />
                  </SvgIcon>
                  <VisuallyHidden>Toggle the list of options</VisuallyHidden>
                </Button>
              </SharedSx>
            </Flex>
          </InputGroup>
        )}
      />
    </Grid>
  )
}
