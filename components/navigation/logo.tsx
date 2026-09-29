"use client"
import Image from 'next/image'
import { Link } from '@/lib/transition'

import { Settings } from '@/types/settings'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export const Logo = () => {
    const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null // avoid hydration mismatch

  const currentTheme = resolvedTheme || theme

  const logoSrc =
    currentTheme === 'dark'
      ? Settings.siteiconDark   // <-- add this
      : Settings.siteicon       // light logo
  return (
    <Link
      href="/"
      title={`${Settings.title} main logo`}
      aria-label={`${Settings.title} main logo`}
      className="items-center gap-2.5 hidden md:flex"
    >
      <Image
        src={logoSrc}
        alt={`${Settings.title} main logo`}
        title={`${Settings.title} main logo`}
        aria-label={`${Settings.title} main logo`}
        width={260}
        height={65}
        loading="lazy"
        decoding="async"
        className="h-10 w-auto"
      />
  {/*     <span className="text-md font-semibold">{Settings.title}</span> */}
    </Link>
  )
}
