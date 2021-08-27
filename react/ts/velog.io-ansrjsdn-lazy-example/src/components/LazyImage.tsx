import { Props } from "./LazyItem";

export default function LazyImage({ src, name }: Props) {
  return (
    <>
      <img src={src} alt={name} width="70%" />
    </>
  );
}
