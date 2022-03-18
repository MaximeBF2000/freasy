import { useState } from 'react'

const TAXE_INFOS = {
  COTISATION: 0.22,
  FORMATION: 0.015,
  get TOTAL() {
    return 1 - (this.COTISATION + this.FORMATION)
  },
  NUMBER_OF_WORK_DAYS_PER_MONTH: 20
}

export const useConverter = () => {
  const [brut, setBrut] = useState(0)
  const [net, setNet] = useState(brut * TAXE_INFOS.TOTAL)
  const [tjm, setTjm] = useState(
    brut / TAXE_INFOS.NUMBER_OF_WORK_DAYS_PER_MONTH
  )

  const fromBrut = e => {
    const newBrut = e.target.value
    setBrut(newBrut)
    setNet(parseFloat(newBrut) * TAXE_INFOS.TOTAL)
    setTjm(newBrut / TAXE_INFOS.NUMBER_OF_WORK_DAYS_PER_MONTH)
  }

  const fromNet = e => {
    const newNet = e.target.value
    const newBrut = parseFloat(newNet) / TAXE_INFOS.TOTAL
    setNet(newNet)
    setBrut(newBrut)
    setTjm(newBrut / TAXE_INFOS.NUMBER_OF_WORK_DAYS_PER_MONTH)
  }

  const fromTjm = e => {
    const newTjm = e.target.value
    const newBrut =
      parseFloat(newTjm) * TAXE_INFOS.NUMBER_OF_WORK_DAYS_PER_MONTH
    setTjm(newTjm)
    setBrut(newBrut)
    setNet(newBrut * TAXE_INFOS.TOTAL)
  }

  return {
    brut,
    net,
    tjm,
    fromBrut,
    fromNet,
    fromTjm
  }
}
