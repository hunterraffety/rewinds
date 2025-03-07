import Prism from "prismjs";
import * as React from "react";

export function PrismCodeBlock({ children, language }: PrismCodeBlockProps) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  return (
    <div className="code" aria-live="polite">
      <pre ref={ref} className={`language-${language}`}>
        {children}
      </pre>
    </div>
  );
}

interface PrismCodeBlockProps {
  children?: any;
  language?: any;
}
