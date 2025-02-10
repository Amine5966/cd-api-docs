"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrackParcel() {

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Track Parcel</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            <span className="text-blue-500">GET</span> /api/client/integration/consignment/track
          </CardTitle>
          <CardDescription>Track a parcel using its reference number</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold mb-2">API Servers:</h3>
          <p className="mb-4">
            Production:{" "}
            <a href="https://projectxuaeapi.shipsy.io" className="text-blue-500">
              https://projectxuaeapi.shipsy.io
            </a>
          </p>
          <p className="mb-4">Test: <a href="https://app.shipsy.in" className="text-blue-500">https://app.shipsy.in</a></p>
        

          <h3 className="text-lg font-semibold mb-2">Example Responses:</h3>
          <Tabs defaultValue="200">
            <TabsList>
              <TabsTrigger value="200" className="text-green-600">
                200
              </TabsTrigger>
              <TabsTrigger value="400" className="text-red-600">
                400
                </TabsTrigger>
              </TabsList>
            <TabsContent value="200">
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
                {JSON.stringify(
                  {
                    courier_partner_reference_number: null,
                    courier_partner: null,
                    courier_account: "",
                    reference_number: "RCD240102008",
                    service_type_id: "RETURN",
                    attempt_count: 0,
                    status: "cancelled",
                    "...": "..."
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
          </Tabs>

          <h2 className="text-lg font-semibold my-2">REQUEST</h2>
          <p className="mb-4">To track a parcel, you need to send a request with the following parameter:</p>

          <h3 className="text-lg font-semibold mb-2">QUERY-STRING PARAMETERS</h3>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>reference_number</strong> <em>(string)</em>: The reference number for the consignment.
              <br />
              Example: <code>RCD240102008</code>
              <br />
              Description: Reference number for tracking.
            </li>
          </ul>

          <p className="mb-4">Example URL with query parameter:</p>
          <pre className="bg-gray-100 p-4 rounded mb-4">
            <code>
              {`https://projectxuaeapi.shipsy.io/api/client/integration/consignment/track?reference_number=RCD240102008`}
            </code>
          </pre>

          <p className="my-4">
            For more APIs, visit our{" "}
            <a href="https://apiplayground.shipsy.in/#operations-top" className="text-blue-500">
              API Playground
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

