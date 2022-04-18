<template>
  <div>
    <form>
      <div v-for="option in options[currentPage].fields" :key="option.name">
        <label for="option.name"
          ><div class="label">
            {{ option.name }}
            <p v-if="!option.required">(optional)</p>
          </div>
        </label>
        <div v-if="option.type === 'email'">
          <input
            class="input"
            :class="option.type"
            :name="option.name"
            :type="option.type"
            :required="option.required ? true : false"
          />
        </div>

        <div v-if="option.type === 'text'">
          <input
            class="input"
            :class="option.type"
            :name="option.name"
            :type="option.type"
            :required="option.required ? true : false"
          />
        </div>
        <div v-if="option.type === 'date'">
          <input
            class="input"
            :class="option.type"
            :name="option.name"
            :type="option.type"
            :required="option.required ? true : false"
          />
        </div>
        <div v-if="option.type === 'datetime-local'">
          <input
            class="input"
            :class="option.type"
            :name="option.name"
            :type="option.type"
            :required="option.required ? true : false"
          />
        </div>
        <div v-if="option.type === 'textarea'">
          <textarea
            class="input"
            rows="5"
            cols="20"
            :class="option.type"
            :name="option.name"
            :required="option.required ? true : false"
          />
        </div>
      </div>
    </form>
    <p>
      Mit dem Absenden des Formulars bestätige ich, dass ich die
      <NuxtLink to="/website-privacy">
        <span>Datenschutzerklärung</span>
      </NuxtLink>
      gelesen habe und einverstanden bin.
    </p>
  </div>
</template>

<script>
export default {
  props: ["options", "currentPage"],
};
</script>

<style lang="postcss" scoped>
.label {
  @apply flex w-auto mt-small;

  > p {
    @apply m-0;
  }
}

input,
textarea {
  border-width: 1px;
  @apply w-full rounded-md border-black p-micro;
}

input:hover,
textarea:hover {
  border-width: 1px;
  @apply border-primary;
}

input {
  @apply h-12;
}

span {
  @apply text-primary;
}

span:hover {
  @apply text-primary-hover;
}
</style>
