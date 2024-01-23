import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: undefined,
      precompress: false,
      strict: true,
    }),
    prerender: {
      entries: [
        "/course/web-react-basic",
        "/course/web-python-basic",
        "/course/python-basic",
        "/articles/article-content",
        "/articles/article-content/github-commit-github",
        "/articles/article-content/python-format-string-python",
        "/articles/article-content/github-comments",
        "/articles/article-content/github-branch",
        "/articles/article-content/react1",
        "/articles/article-content/react2",
        "/articles/article-content/react3",
        "/articles/article-content/react4",
        "/articles/article-content/react5",
        "/articles/article-content/react6",
        "/articles/article-content/react7",
        "/articles/article-content/react8",
        "/articles/article-content/react9",
        "/articles/article-content/react10",
      ],
    },
    paths: {
      base: process.argv.includes("dev") ? "" : process.env.BASE_PATH,
    },
  },
};

export default config;
