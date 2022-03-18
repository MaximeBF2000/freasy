import React, { useRef } from 'react'
import { useConverter } from './useConverter.hook'
import { runAll } from '../../utils/functions.utils'
import {
  TaxConverter as StyledTaxConverter,
  Input
} from './TaxConverter.styled'

export const TaxConverter = () => {
  const { brut, net, tjm, fromBrut, fromNet, fromTjm } = useConverter()

  return (
    <StyledTaxConverter>
      <Input placeholder="Brut value" value={brut} onChange={fromBrut} />
      <Input placeholder="Net value" value={net} onChange={fromNet} />
      <Input placeholder="Brut TJM" value={tjm} onChange={fromTjm} />
    </StyledTaxConverter>
  )
}
