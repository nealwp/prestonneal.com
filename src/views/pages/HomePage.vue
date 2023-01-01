<script>
import PageHero from '@/components/PageHero.vue';
import TopNav from '@/components/TopNav.vue'
import AboutSection from '@/components/AboutSection.vue'
import WorkSection from '@/components/WorkSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
//import axios from 'axios'

export default {
  components: {
    PageHero,
    TopNav,
    AboutSection,
    WorkSection,
    ContactSection,
    FooterSection
    },
  data() {
    return {
      title: "HELL"
    };
  },
  methods: {},
  beforeMount() {},
  mounted() {},
};
</script>

<template>
  <div class='w-full max-h-screen'>
    <TopNav/>
    <PageHero :title="title"/>
    <AboutSection id="about"/>
    <WorkSection id="work"/>
    <ContactSection id="contact"/>
    <FooterSection />
  </div>
</template>