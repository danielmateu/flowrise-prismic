import clsx from "clsx"
interface BoundedProps {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
}

export default function Bounded({ as: Comp = 'section', className, children, ...props }: BoundedProps) {
    return (
        <Comp className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
            {...props}>
            <div className="mx-auto w-full max-w-6xl flex flex-col items-center">
                {children}
            </div>
        </Comp>
    )
}
