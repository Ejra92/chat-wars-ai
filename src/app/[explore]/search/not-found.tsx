import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <Image
        src="/assets/images/error_image_search.png"
        width={300}
        height={300}
        alt="Error that indiques than an error has been occur."
      />

      <h2 className="text-2xl text-center font-bold">
        Better results, you want? A better search, you must do!
      </h2>
    </>
  )
}