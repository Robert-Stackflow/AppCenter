---
layout: home

title: App Center
titleTemplate: Cloudchewie
---

<script setup>
import HomePage from '../components/HomePage.vue'
import HomePageTitle from '../components/HomePageTitle.vue'
import HomePageSection from '../components/HomePageSection.vue'
import HomeProjects from '../components/HomeProjects.vue'
import { primary, unimportant } from './data/projects'
</script>

<HomePage>
  <HomePageTitle>
    <template #title>App Center</template>
    <template #lead>
      我的开源项目中心
    </template>
  </HomePageTitle>
  <HomeProjects :projects="primary" />
  <HomePageSection>
    <template #title>其他</template>
    <template #lead>
      我开源的其他项目，这些项目并不是特别重要
    </template>
    <template #projects>
      <HomeProjects size="small" :projects="unimportant" />
    </template>
  </HomePageSection>
</HomePage>
