import PortfolioImage from './PortfolioImage';
import PortfolioSection from './PortfolioSection';
import { ImageData } from './types';

interface PortfolioFigmaPrototypeProps {
    title: string;
    titleSize?: 'text-2xl' | 'text-3xl' | 'text-4xl';
    className?: string;
    imageClass?: string;
    figmaSrc: string;
    description?: string;
    note?: string;
}

export default function PortfolioFigmaPrototype({
    title,
    figmaSrc,
    titleSize,
    imageClass,
    className,
    description,
    note,
}: PortfolioFigmaPrototypeProps) {
    return (
        <PortfolioSection title={title} titleSize={titleSize} className={className}>
            {description && (
                <p className="text-center text-sm text-foreground/60 -mt-4 mb-8">
                    {description}
                </p>
            )}
            <div className={`mb-6`}>
                <iframe className={`rounded-lg ${imageClass ?? 'w-full h-[80vh]'}`} src={figmaSrc} allowFullScreen />
            </div>
            {note && (
                <p className="text-center text-sm text-foreground/60 mt-3">
                    {note}
                </p>
            )}
        </PortfolioSection >
    );
}
