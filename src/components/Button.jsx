export default function Button({children, ...props}) {
    return(
        <button className="py-2 px-4 text-xs md:text-base mt-6 rounded-md bg-stone-700  text-stone-400 hover:text-gray-300" {...props}>{children}</button>
    )
}