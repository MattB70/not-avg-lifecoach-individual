<template>
  <div>
    <h3>
      Wikipedia
    </h3>
    <div v-if="loaded">
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
    <div v-else>
      Loading...
    </div>
  </div>

</template>

<script>
import wikipedia from "wikipedia";
export default {
  data() {
    return {
      conversation: undefined,
      loaded: false
    };
  },
  created() {
    if (this.$store.state.conversation)
      this.conversation = this.$store.state.conversation;
    this.Wiki();
    this.loaded = true;
  },
  methods: {
    // Gets Wiki data for each word in the conversation
    Wiki() {
      if (this.conversation != null)
      {
        for (var i = 0; i < this.conversation.length; i++)
        {
          //Split input into induvidual words:
          var temp = this.conversation[i].text.replace(".", " ").split(" ");
          for (var j = 0; j < temp.length; j++)
          {
            if(temp[j].length > 0)
            {
              //console.log(j+": "+temp[j]);
              wikipedia.page(temp[j]).then((data) => {
                data.summary().then((data) => 
                  this.SetWiki(data)) // Send wiki data to SetWiki
              })
            }
          }
        }
      }
    },
    // Sets Wiki data to be accessed and displayed
    SetWiki(value) {
      console.log(value.title);
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
