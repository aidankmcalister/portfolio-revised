import { XMarkIcon } from "@heroicons/react/24/solid";

const MenuOverlay = ({ closeMenuHandler }) => {
  return (
    <div className="bg-black bg-opacity-50 absolute top-0 h-screen w-screen z-40">
      <div className="absolute top-3 left-3 right-3 bottom-3 bg-gray-900 p-5 flex justify-center">
        <button className="w-10" onClick={closeMenuHandler}>
          <XMarkIcon />
        </button>
        MenuOverlay
      </div>
    </div>
  );
};

export default MenuOverlay;
