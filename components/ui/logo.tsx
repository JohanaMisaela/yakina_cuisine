import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
        <div className="flex h-[10vh] items-center justify-center">
          <h1 className="text-3xl font-extrabold leading-tighter tracking-tighter" style={{background: 'linear-gradient(to right, #1E40AF, #00897B)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
              <span>YAKINA</span>
          </h1>
        </div>
    </Link>
  )
}
