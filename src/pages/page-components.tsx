import Badge from "../components/badge";
import Container from "../components/container";
import Icon from "../components/icon";
import Text from "../components/text";
import Button from "../components/button";
import ButtonIcon from "../components/button-icon";
import InputText from "../components/input-text";
import InputCheckbox from "../components/input-checkbox";
import Card from "../components/card";
import Skeleton from "../components/skeleton";
import TrashIcon from "../assets/icons/Trash-Regular.svg?react";
import CheckIcon from "../assets/icons/Check-Regular.svg?react";
import PencilIcon from "../assets/Icons/PencilSimple-Regular.svg?react";
import PlusIcon from "../assets/Icons/Plus-Regular.svg?react";
import XIcon from "../assets/Icons/X-Regular.svg?react";
import SpinnerIcon from "../assets/Icons/spinner.svg?react";


export default function PageComponents() {

return (
    <Container>
      <div className="grid gap-10">
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
          <Icon svg={SpinnerIcon} className="fill-green-base" animate />
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>
        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>
        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" disabled />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>
        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading />
        </div>
        <div>
          <Card size="md">Olá Mundo</Card>
        </div>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96 h-6" />
        </div>
      </div>
    </Container>
  );
  }