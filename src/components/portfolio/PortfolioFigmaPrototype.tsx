import PortfolioImage from './PortfolioImage';
import PortfolioSection from './PortfolioSection';
import { ImageData } from './types';

interface PortfolioFigmaPrototypeProps {
    title: string;
    titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
    className?: string;
    imageClass?: string;
    figmaSrc: string;
}

export default function PortfolioFigmaPrototype({
    title,
    figmaSrc,
    titleSize,
    imageClass,
    className
}: PortfolioFigmaPrototypeProps) {
    return (
        <PortfolioSection title={title} titleSize={titleSize} className={className}>
            <div className={`mb-6`}>
                <iframe className={`rounded-lg w-full h-[80vh] ${imageClass}`} src={figmaSrc} allowFullScreen />
            </div>
        </PortfolioSection >
    );
}
