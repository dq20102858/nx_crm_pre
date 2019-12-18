<template>
    <div style="margin:20px 20px 0 0;">
        <span style="position:relative;">
            <span style="position:absolute;width:100%;height:100%;top:0;z-index:9;" @click="toggleSelection(myList)"></span>
            <el-checkbox  v-model="allChecked" :indeterminate="isIndeterminate" style="margin:0 20px;"></el-checkbox>
        </span>
        <el-button @click="deleteAll" type="danger">删除</el-button>
    </div>
</template>

<script>
export default {
  name: "checkall",
  data () {
      return {
          allChecked: false,
          myList: [],
          isIndeterminate: false
      }
  },
  mounted() {
      
  },
  props: {
    tableName: {
      type: String,
      default: 'multipleTable'
    },
    deleteAll: {
      type: Function,
      default: null
    },
    num: {
        default: 0
    },
    list: {
        default: []
    }
  },
  watch: {
    list () {
        this.myList = this.list;
    },
    num () {
        this.changeState(this.num)
    }
  },
  methods: {
    toggleSelection(rows) {
      if (!this.allChecked) {
        this.allChecked = true;
        this.$parent.$refs[this.tableName].clearSelection();
        rows.forEach(row => {
          this.$parent.$refs[this.tableName].toggleRowSelection(row);
        });
      } else {
        this.allChecked = false;
        this.$parent.$refs[this.tableName].clearSelection();
      }
    },
    changeState(num) {
        if (num == this.myList.length) {
            this.isIndeterminate = false;
            this.allChecked = true;
        } else if(num == 0) {
            this.isIndeterminate = false;
            this.allChecked = false;
        } else {
            this.isIndeterminate = true;
            this.allChecked = false;
        }
    }
  }
};
</script>


