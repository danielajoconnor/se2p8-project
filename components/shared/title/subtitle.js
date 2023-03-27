export default function SubTitle({className, children}) {
    return(
        <h2 className={`text-3xl md:text-5xl font-serif underline ${className}`}>{children}</h2>
    )
}