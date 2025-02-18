"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X} from "lucide-react"

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
        method: "POST",
      },
      {
        title: "Create Parcel",
        href: "/api-endpoints/create-parcel",
        method: "POST",
      },
      {
        title: "Generate Label",
        href: "/api-endpoints/generate-label",
        method: "GET",
      },
      {
        title: "Track Parcel",
        href: "/api-endpoints/track-parcel",
        method: "GET",
      },
      /*{
        title: "Webhook",
        href: "/api-endpoints/webhook",
        method: "POST",
      },*/
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
  /*{
    title: "Cities List",
    href: "/cities-list",
  }*/
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ className, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full",
        "md:relative md:translate-x-0",
        className,
      )}
    >
      <div className="flex justify-between items-center p-4 md:hidden">
        <Link href="/" className="flex items-center">
          <Image src="/logofr.png" alt="Chrono Diali Logo" width={150} height={30} priority />
        </Link>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-6 w-6" />
        </Button>
      </div>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2 hidden md:block">
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logofr.png" alt="Chrono Diali Logo" width={220} height={40} className="mr-2" priority />
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
                  className={`w-full justify-start ${pathname === item.href ? "font-bold" : "font-normal"}`}
                >
                  <Link href={item.href} onClick={onClose}>
                    {item.title}
                  </Link>
                </Button>
                {item.items && (
                  <div className="ml-4 space-y-1">
                    {item.items.map((subItem) => (
                      <Button
                        key={subItem.href}
                        asChild
                        variant={pathname === subItem.href ? "secondary" : "ghost"}
                        className={`w-full justify-start ${pathname === subItem.href ? "font-bold" : "font-normal"}`}
                      >
                        <Link href={subItem.href} onClick={onClose} className="flex items-center">
                          {subItem.title}
                          {subItem.method && (
                            <Badge
                              variant="outline"
                              className={cn(
                                "ml-auto",
                                subItem.method === "POST" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800",
                              )}
                            >
                              {subItem.method}
                            </Badge>
                          )}
                        </Link>
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

