export function setupVideoLoop(
  video: HTMLVideoElement | null,
  startTime: number,
  endTime: number,
) {
  if (!video) {
    return () => {};
  }

  const hasValidLoopRange = Number.isFinite(startTime) && Number.isFinite(endTime) && endTime > startTime;

  if (!hasValidLoopRange) {
    return () => {};
  }

  let animationFrameId: number | null = null;
  let isCleanedUp = false;

  const playSafely = () => {
    const playPromise = video.play();

    if (playPromise) {
      playPromise.catch(() => {
        // Browsers may block autoplay; the video remains ready for user-agent retry.
      });
    }
  };

  const seekToStart = () => {
    video.currentTime = startTime;
  };

  const enforceLoop = () => {
    if (isCleanedUp) {
      return;
    }

    if (video.currentTime >= endTime) {
      seekToStart();
      playSafely();
    }

    animationFrameId = window.requestAnimationFrame(enforceLoop);
  };

  const startLoop = () => {
    if (isCleanedUp) {
      return;
    }

    seekToStart();
    playSafely();

    if (animationFrameId === null) {
      animationFrameId = window.requestAnimationFrame(enforceLoop);
    }
  };

  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;

  const handleTimeUpdate = () => {
    if (video.currentTime >= endTime) {
      seekToStart();
      playSafely();
    }
  };

  video.addEventListener("loadedmetadata", startLoop);
  video.addEventListener("timeupdate", handleTimeUpdate);

  if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
    startLoop();
  }

  return () => {
    isCleanedUp = true;
    video.removeEventListener("loadedmetadata", startLoop);
    video.removeEventListener("timeupdate", handleTimeUpdate);

    if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
    }
  };
}
