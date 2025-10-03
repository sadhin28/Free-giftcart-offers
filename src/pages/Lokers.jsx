import { useEffect, useRef } from "react";

export default function LockerIframe() {
  const iframeRef = useRef(null);

  useEffect(() => {
    const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
    doc.open();
    doc.write(`
      <script>
        var qDpZP_tuU_FXLawc = {"it":4555694,"key":"ddee2"};
      </script>
      <script src="https://d1y0yks1k8t5m5.cloudfront.net/c97a60b.js"></script>
      <script>
        setTimeout(() => { if (typeof _xb === 'function') _xb(); }, 10000);
      </script>
    `);
    doc.close();
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="locker"
      style={{ width: "100%", height: "700px", border: 0 }}
    />
  );
}
