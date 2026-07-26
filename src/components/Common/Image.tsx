import Image from 'next/image';

interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
}

export const ImageAsset = ({ src, alt, width, height, className }: ImageProps) => (
    <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
    />
);