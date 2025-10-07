import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <Image
        src="/assets/images/error_image.png"
        width={600}
        height={600}
        alt="Error that indiques than an error has been occur."
      />

      <h2 className="text-2xl text-center font-bold">
        Something went wrong!
      </h2>
    </>
  )
}