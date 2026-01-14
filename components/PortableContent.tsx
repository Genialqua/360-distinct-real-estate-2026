import { PortableText } from "@portabletext/react"
import Image from "next/image"
import { urlFor } from "@/lib/image"

export default function PortableContent({ value }: { value: any }) {
  return (
    <PortableText
      value={value}
      components={{
        types: {
          image: ({ value }) => (
            <Image
              src={urlFor(value).width(800).url()}
              alt=""
              width={800}
              height={450}
              className="rounded-xl my-6"
            />
          ),
          videoBlock: ({ value }) => (
            <div className="my-6">
              <p className="font-semibold mb-2">{value.title}</p>
              <video controls className="w-full rounded-lg">
                <source src={value.url} />
              </video>
            </div>
          )
        }
      }}
    />
  )
}
