import { useState } from "react";

const VimeoCard = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto bg-black rounded-xl overflow-hidden shadow-xl">
      {/* Header (Profile Info) */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-black/60 px-3 py-2 rounded-full backdrop-blur-sm">
        <img
          src="https://i.vimeocdn.com/portrait/12345678_60x60.jpg"
          alt="Ahmed Adel"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-white text-sm font-semibold">LONG NIGHT</h2>
          <p className="text-gray-300 text-xs">Ahmed Adel</p>
        </div>
      </div>

      {/* Video / Thumbnail */}
      <div className="aspect-video relative">
        {!isPlaying && (
          <>
            <img
              src="https://i.vimeocdn.com/video/987654321_1280x720.jpg"
              alt="thumbnail"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black/50 hover:bg-black/70 transition"
            >
              ▶
            </button>
          </>
        )}

        {isPlaying && (
          <iframe
            src="https://player.vimeo.com/video/123456789?autoplay=1&title=0&byline=0&portrait=0"
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default VimeoCard;
