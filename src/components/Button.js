export default function Button({ children, ...props }) {
  return <button className="py-2 px-3 text-white bg-purple-800 rounded-lg transition-all hover:bg-purple-900 cursor-pointer">{ children }</button>
}