// Allow usage of <model-viewer> custom element in JSX
declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src?: string;
      alt?: string;
      ar?: boolean;
      autoRotate?: boolean;
      cameraControls?: boolean;
      poster?: string;
      shadowIntensity?: number;
      exposure?: number;
      environmentImage?: string;
    };
  }
}
