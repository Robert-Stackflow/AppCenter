<template>
  <div class="HomePageTitle">
    <h1 v-if="$slots.title" class="title">
      <slot name="title" />
    </h1>
    <p v-if="$slots.lead" class="lead">
      <slot name="lead" />
    </p>
  </div>
</template>

<style scoped>
.HomePageTitle {
  padding: 48px 32px;
  text-align: center;
}

@media (min-width: 768px) {
  .HomePageTitle {
    padding: 64px 48px 48px;
  }
}

@media (min-width: 960px) {
  .HomePageTitle {
    padding: 80px 64px 48px;
  }
}

.title {
  letter-spacing: 0;
  font-weight: 700;
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 960px) {

  .title {
    line-height: 64px;
    font-size: 56px;
  }
  .lead {
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .title {
    line-height: 56px;
    font-size: 48px;
  }
  .lead {
    line-height: 48px;
    font-size: 40px;
  }
}

.lead {
  margin: 0 auto;
  max-width: 512px;
  padding-top: 12px;
  font-weight: 700;
}
</style>
