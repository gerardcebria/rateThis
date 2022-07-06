<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="450"
  >

    <v-img
      class = 'mt-3 mx-3'
      height="auto"
      src="../assets/seagull.jpeg"
    ></v-img>

    <v-card-title
      align="center"
      class="text-h3 my-6 py-3"

    >Seagull</v-card-title>

    <v-card-text align='center'>
        <v-rating v-model="rating"             
            half-increments
            length="10"
        >
        <template v-slot:item="props">
            <v-icon
            :color="props.isFilled ? 'amber lighten-1' : 'grey lighten-1'"
            size='40'
            @click="props.click"
            >
            {{'mdi-star-circle'}}
        </v-icon>
        </template>
        </v-rating>
      <v-row>
        <v-col
          class="my-4 
          align-left
          font-weight-bold
          text-subtitle-1">
          Current Rating: {{rating}}
        </v-col>
        <v-col
          class="my-4  align-right
          font-weight-bold
          text-subtitle-1">
          Votes: {{rating}}
        </v-col>
      </v-row>

    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Share Hate/Love</v-card-title>

    <v-card-text>
        <twitter-button
            url="https://github.com/"
            description="GitHub is where people build software."
        />
        <whats-app-button
            url="https://github.com/"
            description="GitHub is where people build software."
        />
        <telegram-button
            url="https://github.com/"
            description="GitHub is where people build software."
        />
    </v-card-text>
 <!--

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="reserve"
      >
        Reserve
      </v-btn>
    </v-card-actions>
-->
  </v-card>
</template>

<script>
import TwitterButton from "./TwitterButton";
import TelegramButton from "./TelegramButton";
import WhatsAppButton from "./WhatsAppButton";

export default {

    components: {
        TwitterButton,
        TelegramButton,
        WhatsAppButton
    },

    data: () => ({
      colors: 'orange',
      loading: false,
      selection: 1,
      rating:2
    }),

    methods: {
      genColor (i) {
        return this.colors[i]
      },
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
