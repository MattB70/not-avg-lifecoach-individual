<template>
  <div>
    <h3>
      Wikipedia
    </h3>

    <div v-if="conversation">
      <b-list-group>
        <div v-for="message in conversation" :key="message.index">
          <hr />
          <b-list-group-item>
            <h5 align="left">{{ message.chatStyle }}</h5>
            <div align="left" style="font-weight: 600; color: gray;">Input:</div>
            <p align="left" style="font-size: 150%;">{{ message.text }}</p>
            <div align="left" style="font-weight: 600; color: gray;">Wiki Result:</div>
            <p align="left" style="font-size: 150%;">{{ message.wiki }}</p>
          </b-list-group-item>
        </div>
      </b-list-group>
      <hr />
    </div>

    <div v-else>
      Please chat.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      conversation: undefined
    };
  },
  created() {
    if (this.$store.state.conversation)
      this.conversation = this.$store.state.conversation;
    this.Wiki();
  },
  methods: {
    Wiki() {
      if (this.conversation != null) {
        for (var i = 0; i < this.conversation.length; i++) {
          
          this.conversation[i].wiki = "test";
        }
      }
    }
  }
};
</script>

<style>
h5 {
  color: rgb(116, 0, 170);
  font-weight: 600;
}
tr:nth-child(even) {
  background-color: #f7f7f7;
}
tr:hover {
  background-color: rgb(234, 225, 238);
}
</style>
