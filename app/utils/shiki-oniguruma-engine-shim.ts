import { createJavaScriptRegexEngine } from "shiki/engine/javascript"

// Use Shiki js regex engine in build/runtime to avoid loading onig.wasm
export function createOnigurumaEngine() {
  return createJavaScriptRegexEngine()
}
