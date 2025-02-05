"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "API Endpoints",
    href: "/api-endpoints",
    items: [
      {
        title: "Create Pickup",
        href: "/api-endpoints/create-pickup",
      },
      {
        title: "Create Parcel",
        href: "/api-endpoints/create-parcel",
      },
      {
        title: "Generate Label",
        href: "/api-endpoints/generate-label",
      },
    ],
  },
  {
    title: "Status Codes",
    href: "/status-codes",
  },
  {
    title: "Failed Reasons",
    href: "/failed-reasons",
  },
  {
    title: "Cities List",
    href: "/cities-list",
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 w-64 bg-gray-100", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logofr.png" alt="Chrono Diali Logo" width={200} height={40} className="mr-2" />
          </Link>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Documentation</h2>
          <div className="space-y-1">
            {sidebarNavItems.map((item) => (
              <React.Fragment key={item.href}>
                <Button
                  asChild
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className={`w-full justify-start ${
                    pathname === item.href ? "font-bold" : "font-normal"
                  }`}
                >
                  <Link href={item.href}>{item.title}</Link>
                </Button>
                {item.items && (
                  <div className="ml-4 space-y-1">
                    {item.items.map((subItem) => (
                      <Button
                        key={subItem.href}
                        asChild
                        variant={pathname === subItem.href ? "secondary" : "ghost"}
                        className={`w-full justify-start ${
                          pathname === subItem.href ? "font-bold" : "font-normal"
                        }`}
                      >
                        <Link href={subItem.href}>{subItem.title}</Link>
                      </Button>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

