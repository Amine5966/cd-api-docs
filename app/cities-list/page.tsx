"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Search } from "lucide-react"
import citiesData from "@/data/citiesData"

interface City {
  Cities: string
}

export default function CitiesList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredCities = useMemo(() => {
    return citiesData.filter((city) => city.Cities.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [searchTerm])

  const pageCount = Math.ceil(filteredCities.length / itemsPerPage)
  const paginatedCities = filteredCities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Cities List</h1>
      <div className="flex justify-between items-center mb-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 text-gray-500" />
          <Input
            type="text"
            placeholder="Search cities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8 w-full max-w-md"
          />
        </div>
        <a href="/data/cities.xlsx" download>
          <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded">
            <Download className="h-4 w-4 mr-1" />
            Download
          </button>
        </a>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-black text-white font-bold">Cities</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedCities.map((city, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <TableCell>{city.Cities}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          variant="outline"
        >
          Previous
        </Button>
        <span className="text-gray-600">
          Page {currentPage} of {pageCount}
        </span>
        <Button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, pageCount))}
          disabled={currentPage === pageCount}
          variant="outline"
        >
          Next
        </Button>
      </div>
      
    </div>
  )
}

