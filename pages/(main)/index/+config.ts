import vikeSolid from "vike-solid/config";
import type {Config} from "vike/types";
import Head from "../../../layouts/Head";
import { createEffect } from "solid-js";

// Default config (can be overridden by pages)
export default {
  // <title>
  title: "Дивинитум – Дигитална агенция за уеб дизайн, маркетинг и брандинг",
  description: "Дивинитум създава модерни уебсайтове, ефективни маркетинг стратегии и силна онлайн идентичност. Изведи бизнеса си на следващо ниво с нас.",
  // <meta name="description">
  extends: vikeSolid,
} satisfies Config;
