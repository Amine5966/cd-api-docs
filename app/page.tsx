import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Chrono Diali API Documentation</h1>
      
      <h2 className="text-2xl font-semibold my-4">Overview</h2>
      <p className="mb-4">
        Welcome to the Chrono Diali API documentation. Our API provides a set of tools to streamline your logistics operations. This documentation will guide you through the various features and functionalities available.
      </p>

      <h2 className="text-2xl font-semibold my-4">Getting Started</h2>
      <p className="mb-4">
        To begin using our API, follow these steps:
      </p>
      <ol className="list-decimal list-inside mb-4">
        <li>Sign up for an account on our platform.</li>
        <li>Obtain your API key from the dashboard.</li>
        <li>Refer to the Authentication section to learn how to authenticate your requests.</li>
      </ol>

      <h2 className="text-2xl font-semibold my-4">Authentication</h2>
      <p className="mb-4">
        Our API uses token-based authentication. You must choose the API Key type and include your API key in the header of each request. Here's an example:
      </p>
      <pre className="bg-gray-100 p-4 rounded mb-4">
        <code>
          {`Api-Key: YOUR_API_KEY`}
        </code>
      </pre>

      

      <h2 className="text-2xl font-semibold my-4">Support</h2>
      <p className="mb-4">
        If you have any questions or need assistance, please contact our support team at <a href="mailto:service-client@chronodiali.ma" className="text-blue-500">service-client@chronodiali.ma
        </a>.
      </p>

      <h2 className="text-2xl font-semibold my-4">Additional Resources</h2>
      <p className="mb-4">
        For more information, visit our <a href="https://apiplayground.shipsy.in/#operations-top" className="text-blue-500">API Playground</a> to test the API in real-time.
      </p>
    </div>
  )
}

