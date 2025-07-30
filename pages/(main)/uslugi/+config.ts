import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Всички услуги | The Barber Shop Sofia",
  description: "Разгледайте всички услуги на The Barber Shop Sofia – Бръснарница с над 10 години история, работим всеки ден от 10:00 до 20:00 часа.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
