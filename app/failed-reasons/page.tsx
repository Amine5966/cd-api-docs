"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const failedReasons = {
  delivery: [
    "Reprogrammed delivery - New address",
    "Reprogrammed delivery - Other",
    "Reprogrammed delivery - Lack of time",
    "Reprogrammed delivery - New date",
    "Cancelled delivery - After opening",
    "Cancelled delivery - Damaged",
    "Cancelled delivery - Customer request",
    "Failed delivery - Incorrect phone",
    "Failed delivery - Other",
    "Failed delivery - COD",
    "Failed delivery - Unavailable",
    "Failed delivery - Refused",
    "Failed delivery - Not found",
    "Failed delivery - No response",
  ],
  pickup: [
    "Reprogrammed pickup - Not ready",
    "Reprogrammed pickup - Lack of time",
    "Reprogrammed pickup - New address",
    "Reprogrammed pickup - New date",
    "Cancelled pickup - Packaging",
    "Cancelled pickup - Dimensions / Weight",
    "Cancelled pickup - Damaged",
    "Cancelled pickup - Label",
    "Cancelled pickup - Customer request",
    "Failed pickup - Unavailable",
    "Failed pickup - Refused",
    "Failed pickup - Not found",
    "Failed pickup - No response",
    "Failed pickup - Other",
  ],
  rto: [
    "Returned parcel - Other",
    "Returned parcel - Damaged",
    "Returned parcel - Customer request",
    "Returned parcel - COD",
    "Returned parcel - Unavailable",
    "Returned parcel - Refused",
    "Returned parcel - Not found",
    "Returned parcel - No response",
  ],
}

export default function FailedReasons() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusType, setStatusType] = useState("all")

  const getFilteredReasons = () => {
    const reasons: { type: string; reason: string }[] = []

    Object.entries(failedReasons).forEach(([type, typeReasons]) => {
      typeReasons.forEach((reason) => {
        if (statusType === "all" || statusType === type) {
          if (reason.toLowerCase().includes(searchTerm.toLowerCase())) {
            reasons.push({ type, reason })
          }
        }
      })
    })

    return reasons
  }

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Failed Reasons</h1>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search reasons..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusType} onValueChange={setStatusType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="delivery">Delivery</SelectItem>
            <SelectItem value="pickup">Pickup</SelectItem>
            <SelectItem value="rto">RTO</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Reason</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {getFilteredReasons().map((item, index) => (
              <TableRow key={index}>
                <TableCell className="capitalize">{item.type}</TableCell>
                <TableCell>{item.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

