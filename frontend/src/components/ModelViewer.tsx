// src/components/ModelViewer.tsx
import React, { useRef, useEffect } from "react";
import "@google/model-viewer";

interface ModelViewerProps {
  src: string;
  alt: string;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": any;
    }
  }
}

const ModelViewer: React.FC<ModelViewerProps> = ({ src, alt }) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("src", src);
      ref.current.setAttribute("alt", alt);
    }
  }, [src, alt]);

  return (
    <model-viewer
      ref={ref as React.MutableRefObject<any>}
      src={src}
      alt={alt}
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      auto-rotate
      style={{
        width: "100%",
        height: "500px",
        background: "#f0f0f0",
        borderRadius: "12px",
      }}
    ></model-viewer>
  );
};

export default ModelViewer;
