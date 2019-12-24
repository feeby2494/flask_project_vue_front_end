<template lang="html">
  <div class="wrapper mt-3">
    <div class="" v-if="pageWidth > 800">
      <a target='_blank' href='https://www.banggood.com/marketing-Year-end-Promotion-for-Module-Board-of-Middle-to-Low-Price/tid-6237.html?utmid=11032%3Futm_design%3D131&utm_campaign=wjh1212&bid=55088&utm_design=131&p=TR020242572836201912&custlinkid=725276'><img src='https://img.staticbg.com/deals/affiliate_member_banner_new/201912/12/20191212062456_251.jpg' alt='Head over to Banggood.com for the best Modules Boards and microcontroller parts for the cheapest prices! Some parts are even warehoused here in the USA!' ></a>
    </div>
    <div v-if="pageWidth < 800" class="">
      <a target='_blank' href='https://www.banggood.com/marketing-Year-end-Promotion-for-Module-Board-of-Middle-to-Low-Price/tid-6237.html?utmid=11032%3Futm_design%3D131&utm_campaign=wjh1212&bid=55088&utm_design=131&p=TR020242572836201912&custlinkid=725276' title='Low to $0.79 for Module Board' >Low to $0.79 for Module Board at Banggood.com!</a>
    </div>

    <b-container class="bv-example-row">
      <b-row >
        <div class="featured-items" >
          <b-col>
            <div>
              <b-card
                title="TS100 Solier Iron"
                img-src="https://imgaz.staticbg.com/images/oaupload/banggood/images/88/63/264c0b48-0560-46b2-9213-c357c90b5815.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >

                <b-card-text>
                  My solder iron... No really, I will order this soon. I want my own iron at work, so I don't have to share with my coworkers!
                  And I need a good one for home. I want my own home owned bussiness! This is the iron everybody on youtube is talking about right now.
                  Even Louis Rossmann liked this iron! You can power this with usb cable or even a battery pack! Adjustable and programmable liek this website!
                </b-card-text>

                <b-button href="https://www.banggood.com/custlink/KK3vAc0p3W" variant="primary">Buy at Banggood</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <div>
              <b-card
                title="Where do I get Korean Electronics"
                :img-src="require(`../assets/imagesForVueClient/electronics.jpg`)"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >

                <b-card-text>
                  Send me a message if you know of something like Aliexpress or Banggood, but with all Korean products.
                  I want to get high quality made in Korea electronics and car accesories at good prices online. I know of Gmarket, but that's all I know.
                  If you know, then please email me right quick!
                </b-card-text>

                <b-button href="mailto:toby2494@hotmail.com" variant="primary">Email me right quick!</b-button>
              </b-card>
            </div>
          </b-col>
          <b-col>
            <b-card
              title="Wow Stick!"
              img-src="https://imgaz.staticbg.com/images/oaupload/banggood/images/7F/9B/b149ffd8-2543-4ad1-8da8-3a098e5f1ed9.jpg"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
              class="mb-2"
            >

              <b-card-text>
                My next tool to get from Banggood! I've heard both Xiaomi and Wiha, the famous German tool company, came together to develop this.
                Fully electric and comes with all the bits you need. No more tired hands and arms, my fellow technicains! Just make sure you don't script screws!!!
              </b-card-text>

              <b-button href="https://www.banggood.com/custlink/GDDGscnTHt" variant="primary">Buy at Banggood</b-button>
            </b-card>
          </b-col>
        </div>
      </b-row>
      <b-row>
        <div class="">

        </div>
      </b-row>
    </b-container>

  </div>


</template>

<script>
export default {
  name: "electronics",
  data() {
    return {
      pageWidth: document.documentElement.clientWidth || document.documentElement.clientWidth || document.body.clientWidth,


    }
  },
  methods: {
    getPageWidth: function(event) {
      if (typeof (window.innerWidth) == 'number') {
        this.pageWidth = window.innerWidth;
      } else {
        if (document.documentElement && document.documentElement.clientWidth) {
          this.pageWidth = document.documentElement.clientWidth;
        } else {
          if (document.body && document.body.clientWidth) {
            this.pageWidth = document.body.clientWidth;
          }
        }
      }
    }
  },
  mounted: function() {
    window.addEventListener('resize', this.getPageWidth);
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.getPageWidth);
  }
}
</script>

<style lang="css" scoped>
</style>
