"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Cronômetro regressivo. Quando `segundosIniciais` é 0, o timer fica desativado.
 * Chama `onExpirar` uma única vez ao chegar em 0.
 */
export function useTimer(segundosIniciais: number, ativo: boolean, onExpirar: () => void) {
  const [restante, setRestante] = useState(segundosIniciais)
  const expirouRef = useRef(false)
  const onExpirarRef = useRef(onExpirar)
  onExpirarRef.current = onExpirar

  useEffect(() => {
    setRestante(segundosIniciais)
    expirouRef.current = false
  }, [segundosIniciais])

  useEffect(() => {
    if (!ativo || segundosIniciais <= 0) return
    const intervalo = setInterval(() => {
      setRestante((s) => {
        if (s <= 1) {
          clearInterval(intervalo)
          if (!expirouRef.current) {
            expirouRef.current = true
            onExpirarRef.current()
          }
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalo)
  }, [ativo, segundosIniciais])

  return restante
}
