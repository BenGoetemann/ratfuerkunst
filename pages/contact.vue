<template>
  <FullScreenFlowSection>
      <FlowMachine :optionData="contact"/>
  </FullScreenFlowSection>
</template>

<script>
import contact from "~/static/flows/contact.json";

export default {
  async asyncData() {
    return { contact };
  },
}
</script>

<style>

</style>