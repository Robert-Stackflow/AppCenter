<script setup lang="ts">
import type { Project } from './index'
import { computed } from 'vue'
import HomeProjectItem from './HomeProjectItem.vue'

interface Props {
  size?: 'small' | 'medium'
  projects: Project[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const classes = computed(() => [props.size, `count-${props.projects.length}`])
</script>

<template>
  <div class="HomeProjects" :class="classes">
    <div class="container">
      <div v-for="project in projects" :key="project.name" class="item">
        <HomeProjectItem :size="size" :project="project" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.HomeProjects.small .container {
  grid-template-columns: repeat(auto-fit, minmax(224px, 1fr));
}

.HomeProjects.small.count-1 .container {
  max-width: 276px;
}
.HomeProjects.small.count-2 .container {
  max-width: calc(276px * 2 + 24px);
}
.HomeProjects.small.count-3 .container {
  max-width: calc(276px * 3 + 24px * 2);
}

.HomeProjects.medium .container {
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
}

@media (min-width: 375px) {
  .HomeProjects.medium .container {
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
  }
}

.HomeProjects.medium.count-1 .container {
  max-width: 368px;
}
.HomeProjects.medium.count-2 .container {
  max-width: calc(368px * 2 + 24px);
}

.container {
  display: grid;
  gap: 24px;
  margin: 0 auto;
  max-width: 1152px;
}
</style>
