import { NextResponse } from "next/server"
import * as XLSX from "xlsx"
import path from "path"

const ITEMS_PER_PAGE = 10

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = Number.parseInt(searchParams.get("page") || "1", 10)

  // Read the Excel file
  const filePath = path.join(process.cwd(), "public", "cities.xlsx")
  const workbook = XLSX.readFile(filePath)
  const sheetName = workbook.SheetNames[0]
  const worksheet = workbook.Sheets[sheetName]
  const data = XLSX.utils.sheet_to_json(worksheet)

  // Paginate the data
  const startIndex = (page - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedData = data.slice(startIndex, endIndex)

  return NextResponse.json({
    cities: paginatedData,
    totalPages: Math.ceil(data.length / ITEMS_PER_PAGE),
    currentPage: page,
  })
}

