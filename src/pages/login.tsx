import React, { FormEvent, FormEventHandler, useState } from "react";
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Alert,
} from "@mantine/core";
import { NextPage } from "next";
import { useLoginStyles } from "../components/Login/hooks/useLoginStyles";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useLoginForm } from "components/Login/hooks/useLoginForm";
import { useRouter } from "next/router";
import { userService } from "services/user.service";
const LoginPage: NextPage = () => {
  console.log("Login page");
  const [error, setError] = useState<string | null>();
  const { classes } = useLoginStyles();
  const form = useLoginForm();
  const router = useRouter();
  const submit = (event: FormEvent) => {
    event.preventDefault();
    userService
      .login(form.values.email, form.values.password)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        setError(error.response.data.error);
      });
  };
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.formContainer}>
        <form className={classes.form} onSubmit={submit}>
          <Title order={2} className={classes.title} align="left" mb={2}>
            Welcome back
          </Title>
          <Text color="gray" mb={30}>
            Welcome back! Please enter your details.
          </Text>
          {error && <Alert color="red">{error}</Alert>}
          <TextInput
            label="Email"
            placeholder="Enter you email"
            size="sm"
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="sm"
            {...form.getInputProps("password")}
          />
          <div className={classes.options}>
            <Checkbox
              label="Remember for 30 days"
              mt="xl"
              size="sm"
              {...form.getInputProps("remember")}
            />
            <Link passHref={true} href={"#"}>
              <Text className={classes.link} weight={700}>
                forgot password
              </Text>
            </Link>
          </div>
          <Button type="submit" fullWidth mt="xl" size="md" color="dark">
            Sign in
          </Button>
          <Button
            leftIcon={<FcGoogle size={30} />}
            fullWidth
            mt="xl"
            size="md"
            variant="default"
            color="gray"
          >
            Sign in with Google
          </Button>
          <Text align="center" mt="md" color="gray">
            Don&apos;t have an account?{" "}
            <Anchor<"a">
              href="#"
              weight={700}
              color="dark"
              onClick={(event) => event.preventDefault()}
            >
              Sign up for free
            </Anchor>
          </Text>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
