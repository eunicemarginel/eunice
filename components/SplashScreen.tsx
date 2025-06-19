import { useEffect, useState } from 'react'

export default function SplashScreen() {
    const [show, setShow] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setShow(false), 2500)
        return () => clearTimeout(timeout)
    }, [])

    if (!show) return null

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#fdfbf7',
            zIndex: 9999,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
        }}>
            {[...Array(12)].map((_, i) => (
                <span
                    key={i}
                    className="bean"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`,
                    }}
                >
                    🫘
                </span>
            ))}
            <p style={{
                marginTop: '2rem',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                color: '#5e4632',
                animation: 'pulse 1.5s ease-in-out infinite'
            }}>
                brewing thoughts...
            </p>
        </div>
    )
}
