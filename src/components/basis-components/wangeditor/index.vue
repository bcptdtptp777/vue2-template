<template>
  <div style="width: 100%;">
    <div :id="id"></div>
  </div>
</template>

<script>
import E from 'wangeditor'
export default {
  data () {
    return {
      editor: undefined
    }
  },
  props: {
    id: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 88
    }
  },
  mounted () {
    this.editor = new E(`#${this.id}`)
    this.editor.config.height = this.height
    // 配置菜单栏，设置不需要的菜单
    this.editor.config.excludeMenus = [
      'emoticon',
      'video',
      'image',
      'todo',
      'link',
      'table'
    ]
    this.editor.config.placeholder = '请输入内容'
    this.editor.create()
  },
  methods: {
    // 获取html
    getHtml () {
      return this.editor.txt.html()
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .w-e-toolbar {
  border-radius: 4px 4px 0 0;
}
::v-deep .w-e-text-container {
  border-radius: 0 0 4px 4px;
}
</style>
