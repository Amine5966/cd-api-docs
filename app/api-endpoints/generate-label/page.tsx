"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function GenerateLabel() {
  const [error401Type, setError401Type] = useState("NO_API_KEY")

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 ">Generate Label</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            <span className="text-blue-500">GET</span> /api/customer/integration/consignment/shippinglabel/stream
          </CardTitle>
          <CardDescription>Generate a shipping label</CardDescription>
        </CardHeader>
        <CardContent>
        <h3 className="text-lg font-semibold mb-2 ">Link in api-playground:</h3>
          
        <p className="mb-4"><a href="https://apiplayground.shipsy.in/#get-/api/customer/integration/consignment/shippinglabel/stream" className="text-blue-500">https://apiplayground.shipsy.in/#get-/api/customer/integration/consignment/shippinglabel/stream</a></p>
          
        <h3 className="text-lg font-semibold mb-2 ">API Servers:</h3>
          
          <p className="mb-4">Production: <a href="https://projectxuaeapi.shipsy.io" className="text-blue-500">https://projectxuaeapi.shipsy.io</a></p>
          <p className="mb-4">Test: <a href="https://app.shipsy.in" className="text-blue-500">https://app.shipsy.in</a></p>
          
          <h3 className="text-lg font-semibold mb-2 ">Example Responses:</h3>
          <Tabs defaultValue="200">
            <TabsList>
            <TabsTrigger value="200" className="text-green-600">200</TabsTrigger>
              <TabsTrigger value="400" className="text-red-600">400</TabsTrigger>
              <TabsTrigger value="401" className="text-red-400">401</TabsTrigger>
            </TabsList>
            <TabsContent value="200">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">Returns the generated label.</pre>
            </TabsContent>
            <TabsContent value="400">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    error: {
                      message: "Consignment not found",
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
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  { error: { message: "API key should be present", reason: "NO_API_KEY", statusCode: 401 } },
                  null,
                  2,
                )}
              </pre>
            </TabsContent>
          </Tabs>
          
        <h2 className="text-lg font-semibold my-2">REQUEST</h2>
        <p className="mb-4">To generate a shipping label, you need to send a request with the following parameters:</p>

        <h3 className="text-lg font-semibold mb-2">QUERY-STRING PARAMETERS</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>reference_number</strong> <em>(string)</em>: The reference number for the consignment.
            <br />
            Example: <code>AEF12578</code>
            <br />
            Description: Reference number for tracking.
          </li>
        </ul>

        <p className="mb-4">Example URL with query parameter:</p>
        <pre className="bg-gray-100 p-4 rounded mb-4">
          <code>
            {`https://app.shipsy.in/api/customer/integration/consignment/shippinglabel/stream?reference_number=AEF12578`}
          </code>
        </pre>

        <h3 className="text-lg font-semibold mb-2">REQUEST HEADERS</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>api-key</strong> <em>(string)</em>: Customer API Key for authentication.
            <br />
            Example: <code>WRjbnd2biB2d252a3ZubHd2dm5yc0FDIHNudmp4bm52dnhudm52c</code>
          </li>
        </ul>
        <p className="my-4">For more APIs, visit our <a href="https://apiplayground.shipsy.in/#operations-top" className="text-blue-500">API Playground</a>.</p>
      
        
      
        </CardContent>
        
      </Card>
    </div>
  )
}

