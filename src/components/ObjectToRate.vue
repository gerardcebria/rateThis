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
    >Seagull</v-card-title>

    <v-card-text align='center'>
        <!-- <v-rating
                v-model="rating"
                length="10"
                color="amber"
                hover
                half-increments
                size="64"
        ></v-rating> -->
        <v-rating v-model="rating"             
            half-increments
            length="10"
        >
        <template v-slot:item="props">
            <v-icon
            :color="props.isFilled ? 'orange' : 'grey lighten-1'"
            size='40'
            @click="props.click"
            >
            {{props.isFilled ? 'mdi-star-circle' : 'mdi-star-circle-outline' }}
            </v-icon>
        </template>
        </v-rating>

      <div
        class="my-4  align-center
        text-subtitle-1">
        {{rating}}
      </div>

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
