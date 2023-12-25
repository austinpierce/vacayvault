/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uSB6vWzuFrt
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <header className="w-full h-20 flex items-center justify-between px-6 shadow-md">
        <div>
          <h1 className="font-bold text-lg">Timeshare Storage Co.</h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link className="text-gray-700 hover:underline" href="#">
                Features
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:underline" href="#">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="text-gray-700 hover:underline" href="#">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="mt-10 text-4xl font-bold">Secure Your Timeshare Storage</h1>
        <p className="mt-3 text-2xl">Affordable options, accessible everywhere</p>
        <div className="flex mt-10">
          <Button className="mx-2" variant="primary">
            Get Started
          </Button>
        </div>
        <section className="mt-10" id="features">
          <h2 className="text-3xl font-semibold mb-5">Featured Storage Options</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Basic</h3>
              </CardHeader>
              <CardContent>
                <p>Perfect for small storage needs. Accessible during business hours.</p>
              </CardContent>
              <img
                alt="Basic Storage"
                className="w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Premium</h3>
              </CardHeader>
              <CardContent>
                <p>Increased space and 24/7 access. Ideal for frequent users.</p>
              </CardContent>
              <img
                alt="Premium Storage"
                className="w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Ultimate</h3>
              </CardHeader>
              <CardContent>
                <p>Maximum space, 24/7 access, and priority support.</p>
              </CardContent>
              <img
                alt="Ultimate Storage"
                className="w-full"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </Card>
          </div>
        </section>
        <section className="mt-10 w-full" id="contact">
          <h2 className="text-3xl font-semibold mb-5">Contact Us</h2>
          <form className="w-full max-w-lg mx-auto">
            <Input className="w-full mb-4" placeholder="Your Name" type="text" />
            <Input className="w-full mb-4" placeholder="Your Email" type="email" />
            <textarea className="w-full mb-4" placeholder="Your Message" />
            <Button className="mx-auto" variant="primary">
              Send Message
            </Button>
          </form>
        </section>
      </main>
    </div>
  )
}

