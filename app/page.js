import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Animation Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Animations</h2>
        <p className="text-gray-600 mb-8">
          Explore a collection of captivating animations created by me.
        </p>
        {/* Display animation examples here */}
      </section>

      {/* Drawing Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Drawings</h2>
        <p className="text-gray-600 mb-8">
          Discover a world of imagination through my artistic drawings.
        </p>
        {/* Display drawing examples here */}
      </section>

      {/* Games Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Games</h2>
        <p className="text-gray-600 mb-8">
          Dive into the realm of interactive entertainment with my games.
        </p>
        {/* Display game examples here */}
      </section>

      {/* Music Section */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Music</h2>
        <p className="text-gray-600 mb-8">
          Immerse yourself in melodies and harmonies of my musical compositions.
        </p>
        {/* Display music examples here */}
      </section>

      {/* Your Next.js logo */}
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      {/* Footer */}
      <footer className="flex justify-center mt-16 text-gray-500">
        <p>
          Created by {' '}
          <a
            href="https://github.com/GuyMotion"
            className="text-blue-500 hover:underline"
          >
            David Dias
          </a>
        </p>
      </footer>
    </main>
  )
}
