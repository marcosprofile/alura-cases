import Link from "next/link";

export default function Chip({ children, href, noBg = false, ...props }) {
  const baseClass = "text-xs font-semibold text-purple-900 px-3 rounded-xl leading-6 cursor-pointer";
  const variantClass = noBg ? "hover:underline" : "bg-purple-500/20";

  return <Link href={href} className={`${baseClass} ${variantClass}`} {...props}>{ children }</Link>
}