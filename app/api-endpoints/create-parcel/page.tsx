"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CreateParcel() {
  const [error401Type, setError401Type] = useState("NO_API_KEY")

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 ">Create Parcel</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            <span className="text-green-500">POST</span> /api/customer/integration/consignment/upload/softdata/v2
          </CardTitle>
          <CardDescription>Create a new parcel</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2 ">API Servers:</h3>
          
          <p className="mb-4">Production: <a href="https://projectxuaeapi.shipsy.io" className="text-blue-500">https://projectxuaeapi.shipsy.io</a></p>
          <p className="mb-4">Test: <a href="https://app.shipsy.in" className="text-blue-500">https://app.shipsy.in</a></p>
          
          <h3 className="text-lg font-semibold mb-2">Example Request:</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(
              {
                pickup_type: "BUSINESS",
                load_type: "NON-DOCUMENT",
                customer_code: "",
                reference_number: "",
                service_type_id: "NORMAL",
                cod_collection_mode: "cash",
                cod_amount: "100",
                hub_code: "",
                origin_details: {
                  name: "ADIL",
                  phone: "+212633447531",
                  address_line_1: "Casablanca Bd Hassan 2",
                  pincode: "",
                  city: "Casablanca",
                  country: "Morocco",
                  latitude: "33.589886",
                  longitude: "-7.603869"
                },
                destination_details: {
                  name: "AHMED",
                  phone: "+212633447531",
                  address_line_1: "Casablanca Bd ANFA",
                  pincode: " ",
                  city: "Casablanca",
                  country: "Morocco",
                  latitude: "33.589886",
                  longitude: "-7.603869"
                },
                return_details: {
                  name: "ADIL",
                  phone: "+212633447531",
                  address_line_1: "Casablanca Bd Hassan 2",
                  pincode: "",
                  city: "Casablanca",
                  country: "Morocco",
                  latitude: "33.589886",
                  longitude: "-7.603869"
                },
                pieces_detail: [
                  {
                    description: "shoes",
                    declared_value: " ",
                    volume: "100",
                    weight: "0.5",
                    height: "10",
                    length: "40",
                    width: "20",
                    weight_unit: "kg",
                    quantity: "1"
                  }
                ]
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
              <TabsTrigger value="200" className="text-green-600">200</TabsTrigger>
              <TabsTrigger value="400" className="text-red-600">400</TabsTrigger>
              <TabsTrigger value="401" className="text-red-400">401</TabsTrigger>
            </TabsList>
            <TabsContent value="200">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    success: true,
                    reference_number: "E12345678",
                    courier_partner: "Shadowfax",
                    courier_account: "Shadowfax Instant",
                    courier_partner_reference_number: "",
                    customer_reference_number: "ABCD",
                  },
                  null,
                  2,
                )}
              </pre>
            </TabsContent>
            <TabsContent value="400">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    error: {
                      message: "Consignment doesn't belong to the customer",
                      statusCode: 400,
                      reason: "WRONG_INPUT",
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
                <Select onValueChange={(value) => setError401Type(value)} defaultValue={error401Type}>
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
          <p className="my-4">For more APIs, visit our <a href="https://apiplayground.shipsy.in/#operations-top" className="text-blue-500">API Playground</a>.</p>
          
        </CardContent>
      </Card>
    </div>
  )
}

