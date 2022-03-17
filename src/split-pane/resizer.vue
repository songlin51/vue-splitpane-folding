<template>
<div>
    <div :class="classes" :style="{ [resizeType]: percent+'%'}" @mousedown="onMouseDown"></div>
    <div v-if=" split == 'vertical' && folding == true " class="reset" :style="{ [resizeType]: percent+'%'}" @click="reset">
      <i :class="contraction"></i>
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
        contraction:"icon-el-zhedie"
      }
    },
    methods:{
      onMouseDown(){
        this.$emit("changeDown");
      },
      reset(e){
        if(this.contraction == "icon-el-zhedie"){
          this.$emit("changePercent",0)
          this.contraction = "icon-el-zhankai";
        }else{
          this.contraction = "icon-el-zhedie";
          this.$emit("changePercent",this.defaultPercent);
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
.reset{
  width:20px;
  height:13%;
  cursor:pointer;
  position: absolute;
  /* background: rgb(139, 122, 123); */
  top:50%;
  z-index: 10000;
  vertical-align:middle;
}
</style>
