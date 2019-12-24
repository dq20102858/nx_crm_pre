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
                <li  v-for="(item1, k) in item.selectSpaces" class="product-space-li"  :class="setSpace.indexOf(item1.id) === -1?'':'active'">
                  <span>{{item1.name}}</span>
                  <div><el-input-number size="mini" v-model="item1.num" @change="selectedSpace(item)" :min="min"></el-input-number></div>
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
         <span class="top-cate-name">{{item.top_cate_name}}</span>
         <span class="product-name">{{item.name}} </span>
         <ul class="sub-marksure-ul">
           <li v-for="(one, k) in item.selectSpaces">
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
      this.getFatherCate();
      // this.getProductLists();
      this.getInitTmpSet();
    },
    methods:{
      openSpace(key){
        let productLists = this.productLists
        let that = this;
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
        if (this.makesureLists[key]['selectSpaces'].length > 1) {
        	this.makesureLists[key]['selectSpaces'].splice(k, 1);
        } else {
        	if (this.makesureLists > 1) {
        		this.makesureLists.splice(key, 1);
        	} else {
        		this.makesureLists=[];
        	}
        }
      },
      submit(){
          let data = {
            tmpId:this.tmpId,
            lists:this.makesureLists
          }
          this.request({
            url: '/product/setTmp',
            method: 'post',
            data
          }).then(response => {
              var data = response.data
              if(data.status == 1){
                this.$message({
                  type:"success",
                  message:"设置成功"
                })
              }else{
                this.$message({
                  type:"success",
                  message:"设置失败"
                })
              }
          })
      },
      comfirmSelection(product){
        product['isShow'] = false;
        if(this.setSpace.length==0){
          return false;
        }
        this.setSpace.forEach(function(item,key){
          let selectSpaces = item.selectSpaces.filter(function (s) {
                      if(s.num>0){
                        return s;
                      }
                    });
          item.selectSpaces = selectSpaces;
        })
        this.makesureLists = JSON.parse(JSON.stringify(this.setSpace))
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
          return productLists
        }).then(product=>{
          this.getProductSpaces(product);
          return product;
        })
      },

      getProductSpaces(product){
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
            product.forEach(function(item,index){
              item.selectSpaces = JSON.parse(JSON.stringify(selectSpaces))
            })
            let makesure = this.makesureLists;
            let proIds = makesure.map(obj => {return obj.id})
            product.forEach(function(item,key){
              let index = proIds.indexOf(item.id);
              if(index!==-1){
               let spaces =  makesure[index]["selectSpaces"];
                item['selectSpaces'].forEach(function(pSpace,k){
                    spaces.forEach(function(mSpace,t){
                      if(mSpace.id == pSpace.id){
                        pSpace.num = mSpace.num
                      }
                    })
                })
              }
            })
          }
        })
      },
      selectedSpace(item){
        let proIds = this.setSpace.map(obj => {return obj.id})
        let index = proIds.indexOf(item.id);
        let data = {
          id:item.id,
          top_cate_id:item.top_cate_id,
          top_cate_name:item.top_cate_name,
          name:item.name,
          selectSpaces:item.selectSpaces
        }

        if(index !== -1){
          this.setSpace[index] = data
        }else{
          this.setSpace.push(data)
        }
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
      getInitTmpSet(){
        let data = {
          tmpId:this.tmpId
        }
        this.request({
          url: '/product/getInitTmpSet',
          method: 'get',
          params:data
        }).then(response => {
          var data = response.data;
          if(data.data.length >  1){
            let makesureLists = data.data
            this.makesureLists = makesureLists
            this.setSpace = JSON.parse(JSON.stringify(makesureLists));
            return makesureLists
          }
        }).then(makesure=>{
          this.getProductLists();
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
  margin-top: 20px;
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
#settmp-detail #pagination {
  position: absolute;
  left: 55%;
  top: 405px;
}
#makesure-ul{
  margin-top: 30px;
}
#settmp-detail .el-input-number{
  width: 100px !important;
}
#settmp-detail .el-input-number--mini .el-input-number__decrease, .el-input-number--mini .el-input-number__increase{
  width: 20px !important;
}
.sub-marksure-ul li{
  padding: 15px;
  float: left;
  width: 135px;
  font-size: 14px;
}
.submit-btn{
  float: right;
  margin-bottom: 30px;
}
#tmp-wapper .top-cate-name{
  font-size: 14px;
  font-weight: 999;
  color: #9e6060;
  display: inline-block;
  width: 60px;
}
#tmp-wapper .product-name{
    font-size: 14px;
    display: inline-block;
}
</style>
