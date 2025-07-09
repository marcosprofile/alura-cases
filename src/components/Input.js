export default function Input({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} className="w-full max-w-75 py-2 px-3 bg-white rounded-lg placeholder:text-zinc-300 border-1 focus:outline-0 focus:border-purple-900 border-zinc-200 text-zinc-800" />
}