import clsx from "clsx"
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next"

export default function Button({
    className, ...props
}: PrismicNextLinkProps) {
    return (
        <PrismicNextLink className={clsx("block w-fit bg-cyan-700 hover:bg-cyan-800 transition px-12 py-3 font-display rounded-full text-white font-bold text-base tracking-wider", className)}
            {...props} />
    )
}
