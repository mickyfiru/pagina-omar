export function setupVideoLoop(
  video: HTMLVideoElement | null,
  startTime: number,
  endTime: number,
) {
  if (!video) {
    return () => {};
  }

  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;

  const handleLoadedMetadata = () => {
    video.currentTime = startTime;
  };

  const handleTimeUpdate = () => {
    if (video.currentTime >= endTime) {
      video.currentTime = startTime;
    }
  };

  video.addEventListener("loadedmetadata", handleLoadedMetadata);
  video.addEventListener("timeupdate", handleTimeUpdate);

  if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
    handleLoadedMetadata();
  }

  return () => {
    video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    video.removeEventListener("timeupdate", handleTimeUpdate);
  };
}
