// components/PhotoTile.tsx
type PhotoTileProps = {
    image: string
    model?: string
    brand?: string
    lens?: string
    settings?: string
}

export default function PhotoTile({
    image,
    model,
    brand,
    lens,
    settings
}: PhotoTileProps) {
    return (
        <div className="bg-white p-4 rounded shadow-md max-w-md mx-auto">
            <img src={image} alt={model ?? 'Photo'} className="w-full mb-4 object-cover" />

            <div className="text-xs text-[#4b2e2e] font-mono grid grid-cols-2 gap-1 px-1">
                {model && <span className="col-span-2">{model}</span>}
                {brand && <span className="font-bold">{brand}</span>}
                {settings && <span className="text-right">{settings}</span>}
                {lens && <span className="col-span-2">{lens}</span>}
            </div>
        </div>
    )
}
