import imageThree from "../assets/imageThree.jpg";
import imageFour from "../assets/imageFour.jpg";
import imageFive from "../assets/imageFive.jpg";
import imageSix from "../assets/imageSix.jpg";
import imageEight from "../assets/imageEight.jpg";

import Image from "next/image";
// TODO show on click of image show full image with buttons for prev and next
function ShowCase() {
  return (
    <div className="container mx-auto p-4 max-w-[130vh]">
      {/* Layout for Large Screen */}
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4">
        <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
          <Image
            src={imageThree}
            alt="Large image"
            className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
          <Image
            src={imageFour}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-2 overflow-hidden rounded-lg">
          <Image
            src={imageFive}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-1 overflow-hidden rounded-lg">
          <Image
            src={imageSix}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-2 row-span-1 overflow-hidden rounded-lg">
          <Image
            src={imageEight}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>

      {/* Layout for Small Screen */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        <div className="col-span-1 row-span-1">
          <Image
            src={imageThree}
            alt="Large image"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={imageFour}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={imageFive}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src={imageSix}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
        </div>
        <div className="col-span-1 row-span-1">
          <Image
            src={imageEight}
            alt="Small image"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
