<template>
<div>
    <div :class="classes" :style="{ [resizeType]: percent+'%'}" @mousedown="onMouseDown"></div>
    <div v-if=" split == 'vertical' && folding == true " class="splitter-pane-reset" :style="{ [resizeType]: percent+'%'}" @click="reset">
      <span style="font-size:20px;" v-if=" contraction == 'shou' "><svg viewBox="64 64 896 896" focusable="false" data-icon="double-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"></path></svg></span>
      <span  style="font-size:20px;" v-if=" contraction == 'suo' "><svg viewBox="64 64 896 896" focusable="false" data-icon="double-right" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"></path></svg></span>
    </div>
</div>
</template>

<script>
  export default {
    props: {
      split: {
        validator(value) {
          return ['vertical', 'horizontal'].indexOf(value) >= 0
        },
        required: true
      },
      resizeType:{
        required:true,
      },
      defaultPercent:{
        required:true,
      },
      percent:{
        required:true,
      },
      folding:{
        required:true,
      },
      className: String
    },
    data(){
      return {
        contraction:"shou"
      }
    },
    methods:{
      onMouseDown(){
        this.$emit("changeDown");
      },
      reset(e){
        if(this.contraction == "shou"){
          this.$emit("changePercent",0)
          this.contraction = 'suo'
        }else{
          this.contraction = "suo";
          this.$emit("changePercent",this.defaultPercent);
          this.contraction = 'shou'
        }
      }
    },
    computed: {
      classes() {
        const classes = ['splitter-pane-resizer', this.split, this.className]
        return classes.join(' ')
      }
    }
  }
</script>

<style scoped>
.splitter-pane-resizer {
  -moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	background: #000;
	position: absolute;
	opacity: .2;
	z-index: 1;
	-moz-background-clip: padding;
	-webkit-background-clip: padding;
	background-clip: padding-box;
}

.splitter-pane-resizer.horizontal {
  height: 11px;
	margin: -5px 0;
	border-top: 5px solid rgba(255, 255, 255, 0);
	border-bottom: 5px solid rgba(255, 255, 255, 0);
	cursor: row-resize;
	width: 100%;
}

.splitter-pane-resizer.vertical {
  width: 11px;
	height: 100%;
	margin-left: -5px;
	border-left: 5px solid rgba(255, 255, 255, 0);
	border-right: 5px solid rgba(255, 255, 255, 0);
	cursor: col-resize;
}
.splitter-pane-reset{
  width:20px;
  cursor:pointer;
  position: absolute;
  /* background: rgb(139, 122, 123); */
  top:50%;
  z-index: 10000;
  vertical-align:middle;
}
</style>
