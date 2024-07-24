import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Top Logo */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <Image
          src="/webtitle.png"
          alt="web title"
          width={350}
          height={240}
        />
      </div>

      {/* Animation Section */}
      <section className="mb-16 text-center">
        <Link href="/animations">
          <a className="text-3xl font-semibold mb-4 hover:underline">Animations</a>
        </Link>
        <p className="text-gray-600 mb-8">
          Explore a collection of captivating animations created by me.
        </p>
        {/* Display animation examples here */}
      </section>

      {/* Drawing Section */}
      <section className="mb-16 text-center">
        <Link href="/drawings">
          <a className="text-3xl font-semibold mb-4 hover:underline">Drawings</a>
        </Link>
        <p className="text-gray-600 mb-8">
          Discover a world of imagination through my artistic drawings.
        </p>
        {/* Display drawing examples here */}
      </section>

      {/* Games Section */}
      <section className="mb-16 text-center">
        <Link href="/games">
          <a className="text-3xl font-semibold mb-4 hover:underline">Games</a>
        </Link>
        <p className="text-gray-600 mb-8">
          Dive into the realm of interactive entertainment with my games.
        </p>
        {/* Display game examples here */}
      </section>

      {/* Music Section */}
      <section className="mb-16 text-center">
        <Link href="/music">
          <a className="text-3xl font-semibold mb-4 hover:underline">Music</a>
        </Link>
        <p className="text-gray-600 mb-8">
          Immerse yourself in melodies and harmonies of my musical compositions.
        </p>
        {/* Display music examples here */}
      </section>

      {/* Animated GIF */}
      <div className="relative flex place-items-center h-48 w-full items-end justify-center">
        <img
          src="/cool.gif"
          alt="a cool gif"
          className="dark:invert"
          width={100}
          height={100}
        />
      </div>

      {/* Footer */}
      <footer className="flex justify-center mt-16 text-gray-500">
        {/* ... Footer content ... */}
      </footer>
    </main>
  )
}
