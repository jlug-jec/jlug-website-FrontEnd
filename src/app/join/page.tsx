import type { Metadata } from "next";
import JoinClient from "./JoinClient";

export const metadata: Metadata = {
  title: "Join | JLUG",
  description: "JLUG recruitment for the incoming 2030 batch.",
};

export default function JoinPage() {
  return <JoinClient />;
}
