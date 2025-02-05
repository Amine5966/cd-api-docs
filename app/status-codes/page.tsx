"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface StatusCode {
  etape: string
  code: string
  en: string
  fr: string
  tracking: string
}

// Import the status codes from the provided data
import { statusCodes } from "@/data/status-codes"

export default function StatusCodes() {
  const [searchTerm, setSearchTerm] = useState("")
  const [etapeFilter, setEtapeFilter] = useState("all")

  const etapes = Array.from(new Set(statusCodes.map((code) => code.etape)))

  const filteredCodes = statusCodes.filter((code) => {
    const matchesSearch = Object.values(code).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesEtape = etapeFilter === "all" || code.etape === etapeFilter
    return matchesSearch && matchesEtape
  })

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Status Codes</h1>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search status codes..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={etapeFilter} onValueChange={setEtapeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by etape" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Etapes</SelectItem>
            {etapes.map((etape) => (
              <SelectItem key={etape} value={etape}>
                {etape}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="border rounded-md overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phase</TableHead>
              <TableHead>Technical code</TableHead>
              <TableHead>Wording Interne (EN)</TableHead>
              <TableHead>Wording Interne (FR)</TableHead>
              <TableHead>Wording Tracking Web (FR)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCodes.map((code, index) => (
              <TableRow key={index}>
                <TableCell>{code.etape}</TableCell>
                <TableCell className="font-mono">{code.code}</TableCell>
                <TableCell>{code.en}</TableCell>
                <TableCell>{code.fr}</TableCell>
                <TableCell>{code.tracking}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

