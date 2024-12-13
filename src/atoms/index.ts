import { atom } from "jotai";
import { Input } from "@/components/ui/input";

type CustomAlertDialogProps = {
   open: boolean;
   title: string;
   description: string;
   actionTitle?: string;
   action?: () => void;
   cancelTitle?: string;
   cancel?: () => void;
};

export const alertDialogAtom = atom<CustomAlertDialogProps>({
   open: false,
   title: "",
   description: "",
   actionTitle: "OK",
   action: () => {},
   cancelTitle: "",
   cancel: () => {},
});

interface Item extends React.ComponentProps<typeof Input> {
   id: string;
   label: string;
   value?: string;
   disabled?: boolean;
   options?: string[] | number[];
}

type CustomDialogProps = {
   open: boolean;
   id?: string;
   title: string;
   description?: string;
   items: Item[];
   actionTitle?: string;
   action?: () => void;
   cancelTitle?: string;
   cancel?: () => void;
};

export const dialogAtom = atom<CustomDialogProps>({
   open: false,
   id: "",
   title: "",
   description: "",
   items: [],
   actionTitle: "",
   action: () => {},
   cancelTitle: "",
   cancel: () => {},
});
