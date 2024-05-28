interface UnionSvgProps {
    title: string;
    color: string;
    subtitle: string;
}

export function UnionSvg({ color, }: UnionSvgProps) {
    return (
        <svg width="336" height="40" viewBox="0 0 336 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M149 0H0V36V40H336V36H166L149 0Z" fill={color} />
            {/* <text x="16" y="20" fontFamily="Arial" fontSize="16" fill="white">
                {title}
            </text>
            <text x="16" y="34" fontFamily="Arial" fontSize="10" fill="white">
                {subtitle}
            </text> */}
        </svg>
    );
}


export function RectangleBottomSvg({ }) {
    return (
        <svg width="336" height="86" viewBox="0 0 336 86" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="336" height="86" fill="#323232" />
        </svg>

    );
}

