---
layout: home

title: App Center
titleTemplate: Cloudchewie
---

<script setup>
import HomePage from './components/HomePage.vue'
import HomePageTitle from './components/HomePageTitle.vue'
import HomePageSection from './components/HomePageSection.vue'
import HomeProjects from './components/HomeProjects.vue'
import { primary, unimportant } from './data/projects'
</script>

<HomePage>
  <HomePageTitle>
    <template #title>App Center</template>
    <template #lead>
      My open source project center
    </template>
  </HomePageTitle>
  <HomeProjects :projects="primary" />
  <HomePageSection>
    <template #title>Other</template>
    <template #lead>
      Other projects I open source that are not particularly important
    </template>
    <template #projects>
      <HomeProjects size="small" :projects="unimportant" />
    </template>
  </HomePageSection>
</HomePage>
