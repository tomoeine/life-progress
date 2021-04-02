<template>
  <div class="h-full h-full mx-auto max-w-lg flex flex-col items-center justify-center">
    <h1 class="text-5xl sm:text-7xl mb-4 font-bold">Life Progress</h1>
    <p class="mb-16">▓▓▓▓▓▓▓░░░░░░░░</p>
    <label for="age" class="font-bold text-lg mb-2">Your age</label>
    <input
      id="age"
      v-model="age"
      class="w-20 py-2 text-lg text-center border border-gray-500 rounded mb-8"
    />
    <button
      class="mx-auto mb-4 bg-gray-800 zhover:bg-green-700 text-white rounded-lg px-5 py-3 text-xl font-bold tracking-widest"
      target="_blank"
      :disabled="age == null"
      @click="onGenerateClicked"
    >
      Generate
    </button>
    <p class="text-gray-400 text-xs text-center mb-40">
      Assuming the lifespan of {{ lifespan }} years, but no one knows when you will die<br />
    </p>
    <div class="text-2xl">
      <a href="https://github.com/tomoeine/life-progress" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" fixed-width
      /></a>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";

type QueryParams = {
  [key: string]: string;
};

type TweetParams = QueryParams & {
  text: string;
  url: string;
  hashtags: string;
};

const toQueryString = (params: QueryParams): string => {
  return Object.entries(params)
    .filter((param) => param[1] !== "")
    .map((param) => `${param[0]}=${param[1]}`)
    .join("&");
};

const progressBlockCount = (progress: number) => {
  return Math.round((15 * progress) / 100);
};

const progressRemainingBlockCount = (progress: number) => {
  return 15 - progressBlockCount(progress);
};

export default defineComponent({
  setup() {
    const lifespan = ref<number>(85);
    const age = ref<number | null>(null);

    const urlToTweet = () => {
      let progress;
      if (age.value == null || age.value <= 0) {
        progress = 0;
      } else if (age.value > lifespan.value) {
        progress = 100;
      } else {
        progress = Math.floor((age.value / lifespan.value) * 100);
      }

      let progressBar =
        "▓".repeat(progressBlockCount(progress)) +
        "░".repeat(progressRemainingBlockCount(progress));

      const tweetUrl = "https://twitter.com/intent/tweet";
      const tweetParams: TweetParams = {
        text: encodeURIComponent(`Life Progress\n${progressBar} ${progress}%`),
        url: encodeURI(`\n${window.location.host}`),
        hashtags: "life_progress",
      };
      return `${tweetUrl}?${toQueryString(tweetParams)}`;
    };

    const onGenerateClicked = () => {
      window.open(urlToTweet());
    };

    return { lifespan, age, onGenerateClicked };
  },
});
</script>
