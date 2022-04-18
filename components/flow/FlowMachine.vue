<template>
  <div class="w-full">
    <div class="flex justify-center items-center flex-col text-center">
      <h3>{{ options[currentPage].subtext }}</h3>
      <h1>{{ options[currentPage].title }}</h1>
      <h1>{{ options[currentPage].callto }}</h1>
    </div>
    <OptionCollection
      v-if="options[currentPage].type === 'option'"
      class="w-full"
    >
      <div
        v-for="option in options[currentPage].fields"
        :key="option.value"
        class="w-full md:w-auto"
      >
        <div v-if="option.type === 'externalPath'" class="w-full">
          <Option
            :img="require(`~/assets/icons/${option.icon}`)"
            :text="option.value"
            :link="option.path"
          />
        </div>
        <div v-if="option.type === 'internalPath'" class="w-full">
          <Option
            :img="require(`~/assets/icons/${option.icon}`)"
            :text="option.value"
            :slug="option.path"
          />
        </div>
        <div
          v-if="option.type === 'relationalPath'"
          class="w-full"
          @click="addAnswerAndLoadNextPage(option)"
        >
          <Option
            :text="option.value"
            :img="require(`~/assets/icons/${option.icon}`)"
          />
        </div>
      </div>
    </OptionCollection>
    <InputCollection v-if="options[currentPage].type === 'form'">
      <InputCreator :options="options" :current-page="currentPage" />
      <div class="flex justify-center" @click.prevent="validateForm()">
        <Button btnText="Absenden" />
      </div>
    </InputCollection>
    <div
      v-if="options[currentPage].type === 'success'"
      class="w-full flex flex-col items-center justify-center"
    >
      <div>
        <LoadingIcon v-if="loading" />
        <h3 v-if="loading">Deine Anfrage wird verarbeitet!</h3>
      </div>
      <div v-if="!loading">
        <img
          class="pb-s"
          :src="require(`~/assets/${options[currentPage].img}`)"
          alt="success"
        />
      </div>
    </div>
    <div
      v-if="options[currentPage].type !== 'success'"
      class="flex justify-center items-center mt-s h-10"
    >
      <div
        v-if="pageMemory.length > 1"
        @click="loadPreviousPageAndDeleteLastAnswer()"
      >
        <StringButton btn-text="Back" reversed="true" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["optionData"],
  data() {
    return {
      loading: false,
      pageMemory: [],
      currentPage: 0,
      options: this.optionData,
      answers: [],
      preventFormFromSubmission: true,
    };
  },
  mounted() {
    this.pageMemory.push(this.currentPage);
  },
  methods: {
    firePixelEvent(eventName) {
      console.log(eventName);
      this.$fb.track(eventName);
    },
    addAnswerAndLoadNextPage(clickedOption) {
      const indexOfNextOption = this.options.findIndex((nextOption) => {
        return nextOption.key === clickedOption.path;
      });
      window.scrollTo(0, 0);
      this.answers.push(clickedOption.value);
      this.pageMemory.push(indexOfNextOption);
      this.currentPage = indexOfNextOption;
      this.firePixelEvent(clickedOption.event);
    },
    loadPreviousPageAndDeleteLastAnswer() {
      const previousPage = this.pageMemory.length - 2;
      this.currentPage = this.pageMemory[previousPage];
      window.scrollTo(0, 0);
      this.pageMemory.pop();
      this.answers.pop();
    },
    loadSuccessPageAndSendRequest() {
      this.currentPage = this.options.length - 1;
      window.scrollTo(0, 0);
      this.loading = true;
      // SEND REQUEST
      this.firePixelEvent("formSubmit");
      console.log(this.answers);
      this.loading = false;
    },
    validateForm() {
      const inputs = document.querySelectorAll(".input");
      const validationTests = [];
      window.scrollTo(0, 0);
      inputs.forEach((e) => {
        if (!e.checkValidity()) {
          e.style.borderColor = "red";
          validationTests.push(false);
        }
        if (e.checkValidity()) {
          e.style.borderColor = "";
          validationTests.push(true);
        }
      });

      validationTests.includes(false)
        ? (this.preventFormFromSubmission = true)
        : (this.preventFormFromSubmission = false);

      if (!this.preventFormFromSubmission) {
        inputs.forEach((e) => {
          this.answers.push(`${e.name}: ${e.value}`);
        });
        this.loadSuccessPageAndSendRequest();
      }
    },
  },
};
</script>
