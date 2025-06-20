import Text from "./components/text";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PencilIcon from "./assets/Icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/Icons/Plus-Regular.svg?react";
import XIcon from "./assets/Icons/X-Regular.svg?react";
import SpinnerIcon from "./assets/Icons/spinner.svg?react";
import Icon from "./components/icon";

export default function App() {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo
        </Text>

        <Text className="text-green-base">Olá mundo</Text>

        <Text variant="body-md-bold" className="text-pink-base">
          Olá mundo
        </Text>
      </div>
      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-green-base " />
        <Icon svg={CheckIcon} className="fill-green-base" />
        <Icon svg={PencilIcon} className="fill-green-base" />
        <Icon svg={PlusIcon} className="fill-green-base" />
        <Icon svg={XIcon} className="fill-green-base" />
        <Icon svg={SpinnerIcon} className="fill-green-base" animate/>
      </div>
    </div>
  );
}
