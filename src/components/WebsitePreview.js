import { useState, useEffect, useRef } from 'react';

function WebsitePreview({ url, thumbnail, language, traductions }) {
  const [showPreview, setShowPreview] = useState(false);
  const [showIframe, setShowIframe] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(0);
  const previewRef = useRef(null);

  useEffect(() => {
    function handleMouseEnter() {
      setShowPreview(true);
    }

    function handleMouseLeave() {
      setShowPreview(false);
    }

    const thumbnail = previewRef.current;

    thumbnail.addEventListener('mouseenter', handleMouseEnter);
    thumbnail.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      thumbnail.removeEventListener('mouseenter', handleMouseEnter);
      thumbnail.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  function handleIframeLoad() {
    const iframe = document.getElementById('preview-iframe');
    if (iframe) {
      setIframeHeight(iframe.contentWindow.document.body.scrollHeight);
      iframe.contentDocument.documentElement.style.transform = 'scale(0.8)';
    }
  }

  function handleButtonClick({ language }) {
    setShowIframe(true);
  }

  return (
    <>
      <span></span>
      <div ref={previewRef} className="relative border-solid">
        <img
          src={thumbnail}
          alt="Website thumbnail"
          className={`w-full h-full object-cover transition-opacity ${
            showPreview ? 'blur-sm' : 'opacity-100'
          }`}
        />
        {showPreview && (
          <div className="absolute inset-0 flex justify-center items-center z-10 bg-opacity-80	  bg-white dark:bg-black dark:bg-opacity-90">
            <div className="text-white text-center ">
              <p
                className="font-bold text-lg text-justify py-5 pt-12 leading-8  text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white  md:text-xl sm:: text-sm
        "
              >
                {' '}
                {traductions}
              </p>
              <a target="_blank" href={url}>
                <button
                  onClick={handleButtonClick}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 md:text-xl sm:: text-sm"
                >
                  {language === 'en' ? 'Open Demo' : 'Mostrar Sitio Web'}
                </button>
              </a>
            </div>
          </div>
        )}
        {showIframe && (
          <div className="absolute inset-0 z-20">
            <iframe
              id="preview-iframe"
              // src={url}
              className="z-50 w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              frameBorder="0"
              onLoad={handleIframeLoad}
              style={{ maxHeight: '100%' }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default WebsitePreview;
