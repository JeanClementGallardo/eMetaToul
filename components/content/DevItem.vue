<template>
  <div class="px-6 w-[29.33%] mx-[2%] lg:px-8 border-collapse bg-white shadow-md rounded-lg">
    <article class="flex flex-col items-start justify-between">
      <div class="flex items-center gap-x-4 text-xs">
        <time class="text-gray-500">{{ props.date }}</time>
        <p class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{{
          props.category }}</p>
      </div>
      <div class="group relative">
        <h3 class="ml-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {{ props.title }}
        </h3>
        <p class="mb-2 line-clamp-3 text-sm leading-6 text-gray-600">{{ props.description }}</p>
        <a :href="props.link" target="_blank" class=" line-clamp-3 text-sm leading-6 text-indigo-600">Repository</a>
      </div>
      <div class="relative mt-2 flex items-center gap-x-4">
        <div class="text-sm leading-6">
          <p class="font-semibold text-gray-900">
            {{ props.author }}
          </p>
          <p class="text-gray-600">{{ props.role }}</p>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  }
});
</script>