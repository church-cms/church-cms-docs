"use client"
import Image from 'next/image'
import Link from 'next/link'

import { Settings } from '@/types/settings'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export function Footer() {
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
    <footer className="flex h-16 w-full flex-wrap items-center justify-center gap-4 border-t px-2 py-3 text-sm text-foreground sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
      <p className="items-center">
        &copy; {new Date().getFullYear()}{' '}
        <Link
          title={Settings.name}
          aria-label={Settings.name}
          className="font-semibold"
          href={Settings.link}
        >
          {Settings.name}
        </Link>
        .
      </p>
      {Settings.branding !== false && (
        <div className="hidden items-center md:block">
          <Link
            className="font-semibold"
            href="https://churchcms.app/"
            title="ChurchCMS"
            aria-label="ChurchCMS"
            target="_blank"
          >
            <Image
              src={logoSrc}
              alt="ChurchCMS logo"
              title="ChurchCMS logo"
              aria-label="ChurchCMS logo"
              priority={false}
              width={260}
              height={65}
              className="h-10 w-auto"
            />
          </Link>
        </div>
      )}
    </footer>
  )
}
