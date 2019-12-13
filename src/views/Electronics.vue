<template lang="html">
  <div class="wrapper">
    <div class="" v-if="pageWidth > 800">
      <a target='_blank' href='https://www.banggood.com/marketing-Year-end-Promotion-for-Module-Board-of-Middle-to-Low-Price/tid-6237.html?utmid=11032%3Futm_design%3D131&utm_campaign=wjh1212&bid=55088&utm_design=131&p=TR020242572836201912&custlinkid=725276'><img src='https://img.staticbg.com/deals/affiliate_member_banner_new/201912/12/20191212062456_251.jpg' alt='Head over to Banggood.com for the best Modules Boards and microcontroller parts for the cheapest prices! Some parts are even warehoused here in the USA!' ></a>
    </div>
    <div v-if="pageWidth < 800" class="">
      <a target='_blank' href='https://www.banggood.com/marketing-Year-end-Promotion-for-Module-Board-of-Middle-to-Low-Price/tid-6237.html?utmid=11032%3Futm_design%3D131&utm_campaign=wjh1212&bid=55088&utm_design=131&p=TR020242572836201912&custlinkid=725276' title='Low to $0.79 for Module Board' >Low to $0.79 for Module Board at Banggood.com!</a>
    </div>

    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div class="featured-items">
            <div>
              <b-card
                title="Card Title"
                img-src="https://imgaz.staticbg.com/images/oaupload/banggood/images/88/63/264c0b48-0560-46b2-9213-c357c90b5815.jpg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >

                <b-card-text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <b-button href="https://www.banggood.com/custlink/KK3vAc0p3W" variant="primary">Go somewhere</b-button>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="featured-items">
            <div>
              <b-card
                title="Boycott Japan"
                img-src=""
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >

                <b-card-text>
                  Do not buy Japanese made nor from Japanese companies anymore. 
                </b-card-text>

                <b-button href="" variant="primary">Go somewhere</b-button>
              </b-card>
            </div>
          </div>
        </b-col>
        <b-col>3 of 3</b-col>
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
