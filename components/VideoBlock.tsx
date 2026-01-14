import Image from "next/image"

export default function VideoBlock({ value }: any) {
  return (
    <div className="my-8">
      {value.thumbnail && (
        <Image
          src={value.thumbnail.asset.url}
          alt="Video thumbnail"
          width={800}
          height={450}
          className="rounded-lg mb-4"
        />
      )}

      <video controls className="w-full rounded-lg">
        <source src={value.url} />
      </video>
    </div>
  )
}
