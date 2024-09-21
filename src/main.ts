import "https://docs.deno.com/examples/hello-world.ts";
import { initChat } from "./deps.ts";
import chalk from "chalk";

export function add(a: number, b: number): number {
  return a + b;
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
  // console.log(Deno.args);

  console.log(chalk.red("Hello world"));
}

// // Initialize, optional models are gpt-4o-mini, claude-3-haiku-20240307, meta-llama/Llama-3-70b-chat-hf, mistralai/Mixtral-8x7B-Instruct-v0.1
// const chat = await initChat("gpt-4o-mini");

// // Fetch the full reply in one go
// let message = await chat.fetchFull("Hello");
// console.log(message);

// // Redo
// chat.redo();
// message = await chat.fetchFull("How to become better at programming?");
// console.log(message);

// // Fetch the streamed reply
// const stream = chat.fetchStream("What is Artificial Intelligence?");
// for await (let data of stream) {
//   console.log(data);
// }
