"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const webhookPayload = {
  reference_number: "G12340262",
  customer_reference_number: "A0019",
  type: "outfordelivery",
  description: "Notebooks",
  event_time: 1634919745000,
  hub_name: "TEST",
  hub_code: "TEST",
  shipper_phone: "98089889",
  recipient_phone: "98089889",
  poc_image: "https://shipsy-img.s3.amazonaws.com/pleasantlogistics/poc/2022-09-27/delivery/poc_fppuwo_1664276492536",
  signature_image: "http://example.com/image.jpg",
  failure_reason: "WRONG ADDRESS"
}

export default function WebhookPayload() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Webhook Payload</h1>
      <Card>
        <CardHeader>
          <CardTitle>Webhook Payload Information</CardTitle>
        </CardHeader>
        <CardContent>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            {JSON.stringify(webhookPayload, null, 2)}
          </pre>

          <h2 className="text-lg font-semibold mt-6">Notes</h2>
      <p className="mb-4">
        This payload will contain different attribute values depending on the parcel status (the same attributes will be triggered).
      </p>
      <p>
        The webhook will be triggered after an operation action that causes a status change. All statuses that should be triggered depend on the operational scenario.
      </p>
          <h2 className="text-2xl font-semibold my-4">Triggered Statuses</h2>
      <ul className="list-disc list-inside">
        {[
          "attempted",
          "cancelled",
          "delivered",
          "inscan_at_hub",
          "not_picked_up",
          "on_hold",
          "out_for_pickup",
          "outfordelivery",
          "pickup_completed",
          "pickup_scheduled",
          "reachedathub",
          "rescheduled",
          "rto",
          "rto_attempted",
          "rto_delivered",
          "rto_outfordelivery",
          "undelivered"
        ].map((status) => (
          <li key={status}>{status}</li>
        ))}
      </ul>
        </CardContent>
      </Card>

      
    </div>
  )
}