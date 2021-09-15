<template>
  <SfBanner
    :title="title"
    :subtitle="subtitle"
    :description="description"
    :button-text="banner_text"
    :link="banner_link"
    :image="image"
    :background="background"
  />
</template>

<script>
import { SfBanner } from '@storefront-ui/vue';

export default {
  name: 'Banner',
  components: {
    SfBanner,
  },
  props: {
    title: {},
    subtitle: {},
    description: {},
    banner_text: {},
    banner_link: {},
    image: {},
    background: {}
  }
}
</script>
