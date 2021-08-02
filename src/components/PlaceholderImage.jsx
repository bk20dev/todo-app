const PlaceholderImage = ({ src, caption }) => (
  <figure className="mx-auto w-80 my-16">
    <img src={src} alt="" className="block h-80 mb-6" />
    <figcaption className="text-gray text-lg font-medium text-center">
      {caption}
    </figcaption>
  </figure>
);

export default PlaceholderImage;
