import { PortfolioProjectData } from '@/components/portfolio/types';
import HeroImage from '@img/placeholders/hero-placeholder.svg';
import DesktopWireframeImage from '@img/projects/tree-to-cup/Tree2Cup-Wireframe-desktop.svg';
import MobileWireframeImage from '@img/projects/tree-to-cup/Tree2Cup-Wireframe-phone.svg';

export const treeToCup: PortfolioProjectData = {
    hero: {
        image: {
            src: '/placeholders/hero-placeholder.svg',
            alt: 'Tree 2 Cup Hero',
            data: HeroImage,
        },
        title: 'Tree 2 Cup',
        subtitle: 'A template for creating new portfolio projects',
    },
    summary: {
        title: 'Project Summary',
        content:
            'This is a template project that demonstrates how to structure portfolio data using the reusable component system. Simply copy this structure and replace with your own content.',
    },
    sections: [
        {
            id: 'wireframes',
            title: 'Desktop',
            type: 'image-grid',
            content: {
                images: [{
                    src: '/projects/tree-to-cup/Tree2Cup-Wireframe-desktop.svg',
                    alt: 'Desktop Wireframe for Tree to Cup',
                    scrollable: true,
                    data: DesktopWireframeImage
                }],
                gridColumns: 1,
                imageClass: 'bg-white h-auto',
                titleSize: 'text-3xl',
            }
        },
        {
            id: 'figma-prototype-desktop',
            title: 'Prototype',
            type: 'figma-prototype',
            content: {
                figmaSrc: 'https://embed.figma.com/proto/SG8uyueZwj0KZ3y1tjj6wq/Comp-4?node-id=281-574&scaling=scale-down&content-scaling=fixed&page-id=281%3A573&starting-point-node-id=281%3A574&embed-host=share',
                titleSize: 'text-2xl',
                className: 'hidden md:block',
                imageClass: ' rounded-lg'
            },
        },
        {
            id: 'wireframes-mobile',
            title: 'Mobile',
            type: 'image-grid',
            content: {
                images: [{
                    src: '/projects/tree-to-cup/Tree2Cup-Wireframe-phone.svg',
                    alt: 'Mobile Wireframe for Tree to Cup',
                    scrollable: true,
                    data: MobileWireframeImage
                }],
                gridColumns: 1,
                imageClass: 'bg-white h-auto',
                titleSize: 'text-3xl',
                className: 'md:mx-64'
            }
        },
        {
            id: 'figma-prototype-mobile',
            title: 'Prototype',
            type: 'figma-prototype',
            content: {
                figmaSrc: 'https://embed.figma.com/proto/SG8uyueZwj0KZ3y1tjj6wq/Comp-4?node-id=208-137&scaling=scale-down&content-scaling=fixed&page-id=95%3A10&starting-point-node-id=208%3A137&embed-host=share',
                titleSize: 'text-2xl',
            },
        }
    ],
};
