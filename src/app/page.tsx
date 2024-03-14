import Link from "next/link"

export default function Home() {
    return (
        <div className="max-w-md min-h-screen mx-auto p-5 flex flex-col items-center justify-center">
            <h1 className="mb-5 text-3xl font-bold text-center">
                Trading Simulator
            </h1>

            <Link
                href='/dashboard'
                className="w-full px-5 py-2 text-center font-medium border border-light rounded-md hover:bg-light hover:text-dark transition"
            >
                Create new save
            </Link>
        </div>
    )
}
