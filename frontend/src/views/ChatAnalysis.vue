<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand fluid href="#"
        >Not Your Average Life Coach</b-navbar-brand
      >
      <button @click="goToChatRoute" class="button-link">Chat</button>
    </b-navbar>
    <b-container fixed fluid>
      <br />
      <h1 class="text-dark">Chat Analysis</h1>
      <br />
      <SentimentAnalysis v-show="showComponent.sentimentAnalysis" />
      <NamedEntityRecognition v-show="showComponent.namedEntityRecognition" />
      <PartsOfSpeech v-show="showComponent.partOfSpeech" />
      <SynonymRecognition v-show="showComponent.synonymRecognition" />
      <Translate v-show="showComponent.translate" />
      <Wikipedia v-show="showComponent.wikipedia" />
      <b-row class="py-5 my-5"
        ><hr />
        <hr />
      </b-row>
    </b-container>
    <b-navbar
      toggleable="lg"
      type="dark"
      fixed="bottom"
      variant="info"
      class="center"
    >
      <b-navbar-nav class="mx-auto">
        <b-nav-item @click="showPartOfSpeech"
          >Part of Speech Tagging</b-nav-item
        >
        <b-nav-item @click="showSentimentAnalysis"
          >Sentiment Analysis</b-nav-item
        >
        <b-nav-item @click="showNamedEntityRecognition"
          >Named Entity Recognition</b-nav-item
        >
        <b-nav-item @click="showSynonymRecognition"
          >Synonym Recognition</b-nav-item
        >
        <b-nav-item @click="showTranslate"
          ><span class="new">Translate</span> <span class="newFlag">NEW</span></b-nav-item
        >
        <b-nav-item @click="showWikipedia"
          ><span class="new">Wikipedia</span> <span class="newFlag">NEW</span></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
import SentimentAnalysis from "@/components/SentimentAnalysis.vue";
import NamedEntityRecognition from "../components/NamedEntityRecognition.vue";
import PartsOfSpeech from "../components/PartsOfSpeech.vue";
import SynonymRecognition from "../components/SynonymRecognition.vue";
import Translate from "../components/Translate.vue";
import Wikipedia from "../components/Wikipedia.vue";

export default {
  data() {
    return {
      showComponent: undefined
    };
  },
  created() {
    this.showComponent = this.$store.state.currentChatAnalysisComponent;
  },
  components: {
    SentimentAnalysis,
    PartsOfSpeech,
    NamedEntityRecognition,
    SynonymRecognition,
    Translate,
    Wikipedia
  },
  methods: {
    goToChatRoute() {
      this.$router.push("/");
    },
    showTranslate() {
      this.$store.commit("setConversation", this.conversation);
      this.$store.commit("setCurrentChatAnalysisComponentBools", {
        sentimentAnalysis: false,
        partOfSpeech: false,
        namedEntityRecognition: false,
        synonymRecognition: false,
        translate: true,
        wikipedia: false
      });
      this.updateComponent();
    },
    showWikipedia() {
      this.$store.commit("setConversation", this.conversation);
      this.$store.commit("setCurrentChatAnalysisComponentBools", {
        sentimentAnalysis: false,
        partOfSpeech: false,
        namedEntityRecognition: false,
        synonymRecognition: false,
        translate: false,
        wikipedia: true
      });
      this.updateComponent();
    },
    showSentimentAnalysis() {
      this.$store.commit("setConversation", this.conversation);
      this.$store.commit("setCurrentChatAnalysisComponentBools", {
        sentimentAnalysis: true,
        partOfSpeech: false,
        namedEntityRecognition: false,
        synonymRecognition: false,
        translate: false,
        wikipedia: false
      });
      this.updateComponent();
    },
    showPartOfSpeech() {
      this.$store.commit("setConversation", this.conversation);
      this.$store.commit("setCurrentChatAnalysisComponentBools", {
        sentimentAnalysis: false,
        partOfSpeech: true,
        namedEntityRecognition: false,
        synonymRecognition: false,
        translate: false,
        wikipedia: false
      });
      this.updateComponent();
    },

    showSynonymRecognition() {
      this.$store.commit("setConversation", this.conversation);
      this.$store.commit("setCurrentChatAnalysisComponentBools", {
        sentimentAnalysis: false,
        partOfSpeech: false,
        namedEntityRecognition: false,
        synonymRecognition: true,
        translate: false,
        wikipedia: false
      });
      this.updateComponent();
    },

    showNamedEntityRecognition() {
      this.$store.commit("setConversation", this.conversation);
      this.$store.commit("setCurrentChatAnalysisComponentBools", {
        sentimentAnalysis: false,
        partOfSpeech: false,
        namedEntityRecognition: true,
        synonymRecognition: false,
        translate: false,
        wikipedia: false
      });
      this.updateComponent();
    },
    updateComponent() {
      this.showComponent = this.$store.state.currentChatAnalysisComponent;
    }
  }
};
</script>

<style>
.new{
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-style: italic;
}
.new:hover{
  color: rgb(244, 210, 255);
  font-weight: 600;
  font-style: italic;
}
.newFlag{
  color: #ffffff;
  font-weight: 1000;
  font-size: 70%;
  text-shadow: 0px 0px 4px #ee6dff;
}
</style>
