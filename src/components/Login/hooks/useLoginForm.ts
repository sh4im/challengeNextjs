import { useForm } from "@mantine/form";

export const useLoginForm = () =>
  useForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
