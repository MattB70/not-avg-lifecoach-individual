<template>
  <div>
    <h3>
      Translate
    </h3>

    <div v-if="loaded">

      <div v-if="conversation">
        <b-list-group>
          <div v-for="message in conversation" :key="message.index">
            <hr />
            <b-list-group-item>
              <h5 align="left">{{ message.chatStyle }}</h5>
              <div align="left" style="font-weight: 600; color: gray;">Original:</div>
              <p align="left" style="font-size: 150%;">{{ message.text }}</p>
              <div align="left" style="font-weight: 600; color: gray;">Translation:</div>
              <p align="left" style="font-size: 150%;">{{ message.translation }}</p>
            </b-list-group-item>
          </div>
        </b-list-group>
        <hr />
      </div>

      <div v-else>
        Please chat.
      </div>

    </div>
    <div v-else>
      Loading...
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      conversation: undefined,
      iterator: 0,
      loaded: false
    };
  },
  created() {
    if (this.$store.state.conversation){
      this.conversation = this.$store.state.conversation;
      this.Translate();
    }
  },
  methods: {
    Translate() {
      const translate = require("translate");
      translate.engine = "libre";
      if (this.conversation != null)
      {
        for (var i = 0; i < this.conversation.length; i++)
        {
          translate(this.conversation[i].text, "fr").then(value => this.SetTranslation(value));
        }
      }
    },
    SetTranslation(value) {
      console.log(this.iterator +":"+ value);
      this.conversation[this.iterator].translation = value;
      this.iterator++;
      if(this.iterator >= this.conversation.length)
      {
        this.loaded = true;
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
