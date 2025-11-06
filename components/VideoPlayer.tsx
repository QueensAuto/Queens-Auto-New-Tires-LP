// Fix: Changed React import to namespace import to ensure JSX types are resolved correctly.
import * as React from 'react';

// For TypeScript to recognize the custom wistia-player element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Fix: Correctly define the wistia-player custom element with its props for TypeScript.
      'wistia-player': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        mediaId?: string;
        aspect?: string;
      };
    }
  }
}

const WISTIA_VIDEO_ID = 'zx3wmw2c10';
const WISTIA_ASPECT_RATIO = '1.7777777777777777';

const VideoPlayer: React.FC = () => {
    // Fix: Use React.useEffect to align with the namespace import.
    React.useEffect(() => {
        const addElement = (tagName: 'script' | 'style', id: string, innerHTML?: string, attributes?: Record<string, string>) => {
            if (document.getElementById(id)) return null;
            const element = document.createElement(tagName);
            element.id = id;
            if (innerHTML) {
                element.textContent = innerHTML;
            }
            if (attributes) {
                for (const [key, value] of Object.entries(attributes)) {
                    element.setAttribute(key, value);
                }
            }
            document.head.appendChild(element);
            return element;
        };

        const embedScript = addElement('script', `wistia-embed-script-${WISTIA_VIDEO_ID}`, undefined, { src: `https://fast.wistia.com/embed/${WISTIA_VIDEO_ID}.js`, async: 'true', type: 'module' });
        
        const styleContent = `
            wistia-player[media-id='${WISTIA_VIDEO_ID}']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${WISTIA_VIDEO_ID}/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top: 56.25%; 
            }
        `;
        const wistiaStyle = addElement('style', `wistia-style-${WISTIA_VIDEO_ID}`, styleContent);

        // Cleanup function to remove elements on component unmount
        return () => {
            embedScript?.remove();
            wistiaStyle?.remove();
        };
    }, []);

    return (
        <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            {/* React converts camelCase props like 'mediaId' to kebab-case attributes ('media-id') for custom elements. */}
            <wistia-player mediaId={WISTIA_VIDEO_ID} aspect={WISTIA_ASPECT_RATIO}></wistia-player>
        </div>
    );
};

export default VideoPlayer;
