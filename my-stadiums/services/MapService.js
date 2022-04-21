const apiKey = "AIzaSyAOCzak3dOgxAKXv3dLTGsfKIQWQw1Ed38";

export function getStaticMapUrl(
  stadium,
  zoom,
  width,
  height,
  markerColor,
  mapType
) {
  return `https://maps.googleapis.com/maps/api/staticmap?center=${stadium.name},${stadium.location}&zoom=${zoom}&size=${width}x${height}&key=${apiKey}&markers=color:${markerColor}%7Clabel:S%7C${stadium.name}&maptype=${mapType}`;
}
