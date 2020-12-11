import Image from 'next/image'

function Imgvw() {
  return (
    <>
      
      <Image
        src="/time.jpg"
        alt="Picture of the author"
        width={320}
        height={50}
      />
      
    </>
  )
}

export default Imgvw