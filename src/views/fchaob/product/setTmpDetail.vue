<template>
  <div id="settmp-detail">
    <el-input  placeholder="请输入内容" suffix-icon="el-icon-search" v-model="search" class="serach-input" @blur="searchPro"></el-input>
    <div id="tmp-wapper">
      <ul id="spaces-ul">
        <li v-for="(item, key) in faterLists" @click="selectCate(item.id,key)" :class="key==index?'active':''"> {{item.name}}</li>
      </ul>
      <ul id="product-ul">
          <li v-for="(item, key) in productLists" class="product-li"  >
            <span class="product-name">{{item.name}}</span>
             <span class="spec">{{item.spec}}</span>
             <i class="el-icon-circle-plus-outline icon" @click="openSpace(key)"></i>
             <div class="small-icon" v-show="item.isShow"></div>
             <el-dialog :visible.sync="item.isShow" >
               <ul class="product-space-ul">
                <li  v-for="(item1, k) in selectSpaces" class="product-space-li"  :class="setSpace.indexOf(item1.id) === -1?'':'active'">
                  <span>{{item1.name}}</span>
                  <div><el-input-number size="mini" v-model="item1.num" @change="selectSpace(item1)" :min="min"></el-input-number></div>
                  <div style="clear: both;"></div>
                </li>
                <div class="btn">
                  <el-button plain size="mini" @click="cancel(item)">取消</el-button>
                  <el-button type="primary" plain size="mini" @click="comfirmSelection(item)">确定</el-button>
                </div>
                 <div style="clear: both;"></div>
               </ul>
             </el-dialog>

          </li>
      </ul>
      <div id="pagination">
          <el-pagination v-if="productLists.length !== 0" background layout="prev, pager, next" :current-page="this.page" :total="this.total"  @current-change="pageChange">
          </el-pagination>
      </div>
      <div style="clear: both;"></div>
     <ul id="makesure-ul">
       <li v-for="(item, key) in makesureLists">
         {{item.product.name}}
         <ul class="sub-marksure-ul">
           <li v-for="(one, k) in item.spaces">
             <span> {{one.name}}</span>
             <span> X{{one.num}}</span>
             <i class="el-icon-circle-close" @click="delectMakeSure(key,k)"></i>
           </li>
            <div style="clear: both;"></div>
         </ul>
       </li>
        <div style="clear: both;"></div>
     </ul>
     <el-button type="primary" plain size="mini" @click="submit" v-if="makesureLists.length>0" class="submit-btn">确定</el-button>
    </div>


  </div>
</template>

<script>
  export default {
    name: 'setTmpDetail',
    data() {
      return {
           tmpId: this.$route.query.tmpId,//模板的id
           spaces : this.$route.query.spaces,//该模板选择的空间
           selectSpaces :[],
           faterLists:[],
           search:"",
           productLists:[],
           page:1,
           cateId : 0,
           index:-1,
           setSpace:[],
           min:0,
           selectList:[],
           makesureLists:[]
      }
    },
    created() {
      this.getProductSpaces();
      this.getFatherCate();
      this.getProductLists();
    },
    methods:{
      openSpace(key){
        let productLists = this.productLists
        let that = this;

        this.setSpace = [];
        this.selectList =[];
        this.selectSpaces.forEach(function(item,key){
          item.num = 0;
        });

        productLists.forEach(function(item,index){
          if(index == key){
            that.$set(item, "isShow", !item['isShow']);
          }else{
            that.$set(item, "isShow", false);
          }
        })
        this.productLists = productLists;
      },
      delectMakeSure(key,k){
        if (this.makesureLists[key]['spaces'].length > 1) {
        	this.makesureLists[key]['spaces'].splice(k, 1);
        } else {
        	if (this.makesureLists > 1) {
        		this.makesureLists.splice(key, 1);
        	} else {
        		this.makesureLists=[];
        	}
        }
      },
      submit(){

      },
      comfirmSelection(product){
        product['isShow'] = false;
        if(this.setSpace.length==0){
          return false;
        }
        let selectList = JSON.parse(JSON.stringify(this.selectList));
        let oneData = {
          product : product,
          spaces:selectList
        }
        this.makesureLists.push(oneData)
        console.log(this.makesureLists)

      },
      cancel(product){
        product['isShow'] = false;
      },
      selectCate(cateId,key){
        this.cateId = cateId;
        this.page = 1;
        this.getProductLists();
        this.index = key
      },
      searchPro(){
        this.page = 1;
        this.getProductLists();
      },
      getProductLists() {
        var data = {
            page: this.page,
            status: 1,
            keyword : this.search,
            topCateId : this.cateId
        }
        this.request({
          url: '/product/lists',
          method: 'get',
          params: data
        }).then(response => {
          let data = response.data;
          let productLists= data.data.data;
          let that = this;
          productLists.forEach(function(item,key){
            that.$set(item, "isShow", false);
          })
          this.productLists = productLists
          this.page = parseInt(data.data.current_page);
          this.total = data.data.total;
        })
      },
      selectSpace(item){
        let index = this.setSpace.indexOf(item.id);

        if(index !== -1 && item['num'] == 0){
          this.setSpace.splice(index, 1);
          this.selectList.splice(index,1)

        }else if(index !== -1 && item['num'] != 0){
          this.selectList[index] = item;
        }else if(index === -1 && item['num'] == 0){

        }else{
           this.setSpace.push(item.id)
           this.selectList.push(item)
        }
      },
      getProductSpaces() {
        this.request({
          url: '/product/getProductSpaces',
          method: 'get',
        }).then(response => {
          let data = response.data.data;
          if(data.length>1){
            let selectSpaces = [];
            let spaces = this.spaces;
            let that = this;
            data.forEach(function(item,index){
              let aa = spaces.find(c=>c==item.id);
              if(aa){
                that.$set(item, "num", 0);
                selectSpaces.push(item)
              }
            })
            this.selectSpaces = selectSpaces;
          }
        })
      },
      getFatherCate(){
        this.request({
          url: '/product/getFatherCate',
          method: 'get'
        }).then(response => {
          var data = response.data;
          if(data.data.length >  1){
            this.faterLists = data.data
          }
        })
      },
      pageChange(value){
        this.page = value;
        this.getProductLists();
      }
    },
  }
</script>

<style>
#settmp-detail{
  width: 90%;
  margin: 10px auto;
}
#settmp-detail .serach-input{
  width: 50%;
}
#tmp-wapper{
  position: relative;
}
ul,li{
  list-style: none;
  padding: 0;
}
#spaces-ul{
  list-style: none;
  width: 15%;
  padding: 0;
  float: left;
}
#spaces-ul li{
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  cursor: pointer;
  border-radius: 5px;
}
#spaces-ul .active , .product-space-ul .active{
  color: #409EFF !important;
}
#spaces-ul li:hover{
  color: #409EFF;
}
.product-space-ul li:hover{
  color: #409EFF;
}

#product-ul{
  list-style: none;
  width: 70%;
  padding: 0;
  float: left;
  margin-left: 50px;
}
#product-ul .product-li{
  height: 40px;
  cursor: pointer;
  position: relative;
}
#product-ul li .spec{
  font-size: 14px;
  color: #190808;
}
#product-ul .product-space-ul{
  list-style: none;
  padding: 10px;
  font-size: 12px;
}
#product-ul .product-space-li{
  float: left;
  width: 24%;
  height: 70px;
  line-height: 30px;
  border: 1px solid #d0d0d0;
  margin: 8px 5px 8px 0px;
  border-radius: 5px;
  text-align: center;
  color: #5a5353
}

#product-ul .product-space-ul :nth-child(4n){
  margin-right: 0px;
}
#product-ul .icon{
  position: relative;
  float: right;
  left: -30%;
}
#product-ul .small-icon{
  width: 10px;
  height: 10px;
  background-color: rgb(243, 243, 243);
  position: absolute;
  left: 56%;
  top:0;
  transform: rotate(-45deg) translateX(-50%);
}
#product-ul li .product-name{
  font-weight: 999;
  color: #c33c3c;
}
#spaces-ul :nth-child(1){
  border-top: 1px solid #ccc;
}
.btn{
  margin-top: 50px;
  float: right;
}
#pagination {
  position: absolute;
  left: 55%;
  top: 405px;
}
#settmp-detail .el-input-number{
  width: 80px !important;
}
#settmp-detail .el-input-number--mini .el-input-number__decrease, .el-input-number--mini .el-input-number__increase{
  width: 20px !important;
}
.sub-marksure-ul li{
  padding: 20px;
  float: left;
  width: 160px;
}
.submit-btn{
  float: right;
  margin-bottom: 30px;
}
</style>
