<template>
  <div class="HomePage">
    <slot />
  </div>
</template>

<style scoped>
:slotted(.HomePageSection + .HomePageSection),
:slotted(.HomeProjects + .HomePageSection) {
  margin-top: 64px;
}

:slotted(.HomeProjects + .HomeProjects) {
  margin-top: 24px;
}

@media (min-width: 768px) {
  :slotted(.HomePageTitle + .HomePageSection) {
    margin-top: 16px;
  }

  :slotted(.HomePageSection + .HomePageSection),
  :slotted(.HomeProjects + .HomePageSection) {
    margin-top: 96px;
  }
}

:slotted(.HomeProjects) {
  padding: 0 24px;
}

@media (min-width: 768px) {
  :slotted(.HomeProjects) {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  :slotted(.HomeProjects) {
    padding: 0 64px;
  }
}
</style>
