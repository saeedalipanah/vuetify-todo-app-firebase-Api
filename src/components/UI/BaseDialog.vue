<template>
  <div>
    <transition name="back-drop">
      <div class="back-drop" v-if="open"></div>
    </transition>
    <transition name="dialog">
      <dialog v-if="open">
        <header>
          <slot name="header">
            <h2>
              {{ title }}
            </h2>
          </slot>
        </header>
        <section class="content">
          <slot name="content"></slot>
        </section>
        <v-spacer></v-spacer>
        <div class="action">
          <slot name="action"></slot>
        </div>
      </dialog>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: ["title", "open"],
};
</script>
<style scoped>
dialog {
  position: fixed;
  top: 10vh;
  left: 25%;
  display: flex;
  flex-direction: column;
  width: 50%;
  border: none;
  border-radius: 20px;
  box-shadow: 8px 10px 20px rgba(0, 0, 0, 0.664);
  overflow: hidden;
  z-index: 100;
  /*برای این است که چه آیتمی بر روی چه آیتمی قرار گیرد. عدد هرکدام بزرگتر بود بر روی اعداد کوچکتر از خود قرار میگیرد */
}
.back-drop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.267);
  z-index: 10;
}
header {
  background-color: #3b0161;
  padding: 20px;
  color: white;
}
.content {
  margin: 15px;
  padding: 5px;
}
.action {
  text-align: end;
  margin: 15px 30px;
}

.dialog-enter {
  opacity: 0;
  /* transform: translateY(500px); */
  transform: scale(0)
}
.dialog-enter-active {
  transition: all 0.5s ease;
}
.dialog-enter-to {
  opacity: 1;
  /* transform: translateY(0px); */
  transform: scale(1);
}
.dialog-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.dialog-leave-active {
  transition: all 0.5s;
}
.dialog-leave-to {
  opacity: 0;
  transform: translateY(500px);
}


.back-drop-enter {
  opacity: 0;
  
}
.back-drop-enter-active {
  transition: all 0.5s ;
}
.back-drop-enter-to {
  opacity: 1;
  
}
.back-drop-leave-from {
  opacity: 1;
  
}
.back-drop-leave-active {
  transition: all 0.5s;
}
.diback-drop-leave-to {
  opacity: 0;
 
}
</style>
