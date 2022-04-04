import { PropertyValue } from '@stitches/react'
import type { ConfigType } from '@stitches/react/types/config'

export const utils: ConfigType.Utils = {
  w: (value: PropertyValue<'width'>) => ({
    width: value
  }),
  maxW: (value: PropertyValue<'maxWidth'>) => ({
    maxWidth: value
  }),
  minW: (value: PropertyValue<'minWidth'>) => ({
    minWidth: value
  }),
  h: (value: PropertyValue<'height'>) => ({
    height: value
  }),
  maxH: (value: PropertyValue<'maxHeight'>) => ({
    maxHeight: value
  }),
  minH: (value: PropertyValue<'minHeight'>) => ({
    minHeight: value
  }),
  p: (value: PropertyValue<'padding'>) => ({
    padding: value
  }),
  pl: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value
  }),
  pr: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value
  }),
  pt: (value: PropertyValue<'padding'>) => ({
    paddingTop: value
  }),
  pb: (value: PropertyValue<'padding'>) => ({
    paddingBottom: value
  }),
  px: (value: PropertyValue<'padding'>) => ({
    paddingLeft: value,
    paddingRight: value
  }),
  py: (value: PropertyValue<'padding'>) => ({
    paddingTop: value,
    paddingBottom: value
  }),
  m: (value: PropertyValue<'margin'>) => ({
    margin: value
  }),
  mt: (value: PropertyValue<'margin'>) => ({
    marginTop: value
  }),
  mb: (value: PropertyValue<'margin'>) => ({
    marginBottom: value
  }),
  ml: (value: PropertyValue<'margin'>) => ({
    marginLeft: value
  }),
  mr: (value: PropertyValue<'margin'>) => ({
    marginRight: value
  }),
  mx: (value: PropertyValue<'margin'>) => ({
    marginLeft: value,
    marginRight: value
  }),
  my: (value: PropertyValue<'margin'>) => ({
    marginTop: value,
    marginBottom: value
  }),
  br: (value: PropertyValue<'borderRadius'>) => ({
    borderRadius: value
  }),
  boxS: (value: PropertyValue<'boxShadow'>) => ({
    boxShadow: value
  }),
  bg: (value: PropertyValue<'background'>) => ({
    background: value
  }),
  justify: (value: PropertyValue<'justifyContent'>) => ({
    justifyContent: value
  }),
  align: (value: PropertyValue<'alignItems'>) => ({
    alignItems: value
  })
}
