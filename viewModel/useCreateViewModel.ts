import { useEventModel } from "@/model/EventModel";
import { useForm } from "react-hook-form";
import * as Localization from "expo-localization";
import { useRouter } from "expo-router";

export const useCreateViewModel = () => {
  const eventModel = useEventModel();
  const router = useRouter();

  const form = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      startDate: Date.now(),
      finishDate: Date.now(),
    },
  });

  const onSubmit = (event: IEvent) => {
    eventModel.add(event);
    form.reset();
    router.push("/month");
  };

  const calendars = Localization.getCalendars();
  const timeZone = calendars[0]?.timeZone || "Unknown";

  console.log(form.watch());

  return {
    state: { form, timeZone },
    functions: { onSubmit },
  };
};
