const DemoReel = () => {
  return (
    <section className="flex justify-center my-10 w-full px-4">
      <div className="relative w-full max-w-5xl aspect-video">
        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/1000434258?h=d215d09cee"
          className="absolute inset-0 w-full h-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
};

export default DemoReel;
