"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download } from "lucide-react"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreatePickup() {
  const [error401Type, setError401Type] = useState("NO_API_KEY")

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Create Pickup</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            <span className="text-green-500">POST</span> /api/customer/integration/pickup/create
          </CardTitle>
          <CardDescription>Create a new pickup request</CardDescription>
          </CardHeader>
        <CardContent>
        <h3 className="text-lg font-semibold mb-2 ">Link in api-playground:</h3>
          
          <p className="mb-4"><a href="https://apiplayground.shipsy.in/#post-/api/customer/integration/pickup/create" className="text-blue-500">https://apiplayground.shipsy.in/#post-/api/customer/integration/pickup/create</a></p>
          
        <h3 className="text-lg font-semibold mb-2 ">API Servers:</h3>
          
          <p className="mb-4">Production: <a href="https://projectxuaeapi.shipsy.io" className="text-blue-500">https://projectxuaeapi.shipsy.io</a></p>
          <p className="mb-4">Test: <a href="https://app.shipsy.in" className="text-blue-500">https://app.shipsy.in</a></p>
          
          
          <h3 className="text-lg font-semibold mb-2">Example Request:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(
              {
                pickup_type: "BUSINESS",
                customer_code: "TESTSJ1",
                pickup_address: {
                  pincode: "110001",
                  name: "Medha",
                  phone: "12345",
                  address_line_1: "Talaat Harb, Marouf, Qasr El Nil Cairo Governorate, Egypt",
                  address_line_2: "string",
                  city: "Cairo",
                  state: "Cairo",
                  country: "Egypt"
                },
                load_type: "DOCUMENT",
                total_items: "3",
                total_weight: "2",
                pickup_slot: {
                  start: "11:00",
                  end: "23:30",
                  date: "04/11/2022"
                }
              },
              null,
              2,
            )}
          </pre>
          <h3 className="text-lg font-semibold my-4">Request Headers :</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>api-key</strong> <em>(string)</em>: Customer API Key for authentication.
            <br />
            Example: <code>WRjbnd2biB2d252a3ZubHd2dm5yc0FDIHNudmp4bm52dnhudm52c</code>
          </li>
        </ul>
        <h3 className="text-lg font-semibold mt-4 mb-2">Example Responses:</h3>
          <Tabs defaultValue="200">
            <TabsList>
              <TabsTrigger value="200" className="text-green-600">
                200
              </TabsTrigger>
              <TabsTrigger value="400" className="text-red-600">
                400
              </TabsTrigger>
              <TabsTrigger value="401" className="text-red-400">
                401
              </TabsTrigger>
            </TabsList>
            <TabsContent value="200">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify({ status: "OK", data: { pickupId: "6675534144975" } }, null, 2)}
              </pre>
            </TabsContent>
            <TabsContent value="400">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    error: {
                      message: "Invalid Pickup Slot Start",
                      statusCode: 400,
                      reason: "INVALID_PICKUP_TIMESLOT_START",
                      code: "WRONG_INPUT",
                    },
                  },
                  null,
                  2,
                )}
              </pre>
            </TabsContent>
            <TabsContent value="401">
              <div className="mb-2">
                <Select  onValueChange={(value) => setError401Type(value)} defaultValue={error401Type}>
                  <SelectTrigger className="w-75">
                    <SelectValue placeholder="Select error type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NO_API_KEY">API Key not Provided</SelectItem>
                    <SelectItem value="WRONG_API_KEY">Wrong API Key</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  error401Type === "NO_API_KEY"
                    ? {
                        error: {
                          message: "API key should be present",
                          reason: "NO_API_KEY",
                          statusCode: 401,
                        },
                      }
                    : {
                        error: {
                          message: "Wrong api key",
                          reason: "WRONG_API_KEY",
                          statusCode: 401,
                        },
                      },
                  null,
                  2,
                )}
              </pre>
            </TabsContent>
          </Tabs>

          <h3 className="text-lg font-semibold my-4">Validation Rules</h3>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validation Rule</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">num_pieces</td>
                <td className="px-6 py-4 whitespace-nowrap">Should be equal to 1</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">consignment_type</td>
                <td className="px-6 py-4 whitespace-nowrap">Should be "forward", "return", or "rd"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">weight</td>
                <td className="px-6 py-4 whitespace-nowrap">Not equal to 0 (mandatory)</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">pickup_slot</td>
                <td className="px-6 py-4 whitespace-nowrap">Should be either 09:00 - 12:00, 12:00 - 15:00, 15:00 - 18:00, or 18:00 - 21:00</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">total_items</td>
                <td className="px-6 py-4 whitespace-nowrap">Must be greater than 1</td>
              </tr>
            </tbody>
          </table>

          <p className="my-4">For more APIs, visit our <a href="https://apiplayground.shipsy.in/#operations-top" className="text-blue-500">API Playground</a>.</p>
      
        </CardContent>
      </Card>
      
    </div>
  )
}

