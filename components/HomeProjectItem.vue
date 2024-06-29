<script setup lang="ts">
import type { Project } from './index'
import {
  VPButton
} from 'vitepress/theme'
interface Props {
  size?: 'small' | 'medium'
  project: Project
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
  <article class="HomeProjectItem" :class="[size]">
    <div class="profile">
      <figure class="avatar">
        <img class="avatar-img" :src="project.icon" :alt="project.name" />
      </figure>
      <div class="data">
        <h1 class="name">
          {{ project.name }}
        </h1>
        <p v-if="project.tagline" class="affiliation">
          <span v-if="project.tagline" class="title">
            {{ project.tagline }}
          </span>
        </p>
        <p v-if="project.desc" class="desc" v-html="project.desc" />
        <div v-if="project.actions" class="actions">
          <div v-for="action in project.actions" :key="action.link" class="action">
            <VPButton tag="a" size="medium" :theme="action.theme" :text="action.text" :href="action.link" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.HomeProjectItem {
  display: flex;
  flex-direction: column;
  gap: 2px;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.HomeProjectItem.small .profile {
  padding: 32px;
}

.HomeProjectItem.small .data {
  padding-top: 20px;
}

.HomeProjectItem.small .avatar {
  width: 64px;
  height: 64px;
}

.HomeProjectItem.small .name {
  line-height: 24px;
  font-size: 16px;
}

.HomeProjectItem.small .affiliation {
  padding-top: 4px;
  line-height: 20px;
  font-size: 14px;
}

.HomeProjectItem.small .desc {
  padding-top: 12px;
  line-height: 20px;
  font-size: 14px;
}

.HomeProjectItem.small .links {
  margin: 0 -16px -20px;
  padding: 10px 0 0;
}

.HomeProjectItem.medium .profile {
  padding: 48px 32px;
}

.HomeProjectItem.medium .data {
  padding-top: 24px;
  text-align: center;
}

.HomeProjectItem.medium .avatar {
  width: 96px;
  height: 96px;
}

.HomeProjectItem.medium .name {
  letter-spacing: 0.15px;
  line-height: 28px;
  font-size: 20px;
}

.HomeProjectItem.medium .affiliation {
  padding-top: 4px;
  font-size: 16px;
}

.HomeProjectItem.medium .desc {
  padding-top: 16px;
  max-width: 288px;
  font-size: 16px;
}

.HomeProjectItem.medium .links {
  margin: 0 -16px -12px;
  padding: 16px 12px 0;
}

.profile {
  flex-grow: 1;
  background-color: var(--vp-c-bg-soft);
}

.data {
  text-align: center;
}

.avatar {
  position: relative;
  flex-shrink: 0;
  margin: 0 auto;
  border-radius: 50%;
  padding: 12px;
  border: 1px solid rgb(from var(--vp-c-border) r g b / 20%);
}

.avatar-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  margin: 0;
  font-weight: 600;
}

.affiliation {
  margin: 0;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.org.link {
  color: var(--vp-c-text-2);
  transition: color 0.25s;
}

.org.link:hover {
  color: var(--vp-c-brand-1);
}

.desc {
  margin: 0 auto;
}

.desc :deep(a) {
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration-style: dotted;
  transition: color 0.25s;
}

.links {
  display: flex;
  justify-content: center;
  height: 56px;
}

.sp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.action {
  flex-shrink: 0;
  padding: 6px;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

.actions {
  justify-content: center;
}

@media (min-width: 640px) {
  .actions {
    padding-top: 32px;
  }
}
</style>
