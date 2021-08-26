import { images } from "database/images";
import LazyItem from "./LazyItem";

export default function LazyWrapper() {
  return (
    <>
      <div>
        {images.map((image) => (
          <LazyItem key={image.id} src={image.src} name={image.name} />
        ))}
      </div>
    </>
  );
}
