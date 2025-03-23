"use server";

import { signIn, signOut } from "@/auth";

export const login = async function () {
  await signIn("github", { redirectTo: "/" });
};

export const logout = async function () {
  await signOut({ redirectTo: "/" });
};

// AIzaSyCyS3-kedzK2hlj972YFP0iBMkhHnagLwk
// AIzaSyApKc46txKnrqLuazwttXoPXzge8WGkWi8
