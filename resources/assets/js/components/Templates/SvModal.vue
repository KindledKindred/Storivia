<template lang="pug">
<!--script(type="text/x-template" id="modal-template")-->
transition(name="modal" appear)
	.modal.modal-overlay(@click.self="$emit('close')")
		.modal-window
			.modal-content
				slot empty content
			.modal-footer
				slot(name="footer")
					button(@click="$emit('close')") 編集
</template>

<script>
export default {
	name: 'SvModal'
}
</script>

<style lang="stylus" scoped>
@import "../../../stylus/_variables.styl"
// Form関連 を読み込む
@import "../../../stylus/_extend.styl"

.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
		width: 100%;
		height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &-window {
    background: _dark-shades;
    border-radius: 8px;
    overflow: hidden;
  }

  &-content {
		background: _dark-shades;
    border-radius: 8px
    padding: 10px 20px;
  }

  &-footer {
    background-color: _dark-shades;
    padding: 10px;
    border-radius: 8px
    text-align: right;
  }
}

// オーバーレイのトランジション
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter, .modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>