
export default function Chart({ className, title, content }: { className: string, title: string, content: string }) {
    return (
        <div className={className}>
            <h2 className="text-[0.8rem]">{title}</h2>
            <p className="font-bold text-[1rem]">{content}</p>
        </div>
    )
}
