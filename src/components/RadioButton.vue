<template>
     <!-- <div class="">  -->
        <label class="button-radio" :class="[value === label?'checked':'']">
        <input type="radio" :value="label" :name="name" v-model="radioButtonValue">
        <span>{{ label }}</span>
    </label>
    <!-- </div> -->
</template>
<script>
export default {
    name:"RadioButton",
    props:['name', 'label', 'value'],
    computed:{
        radioButtonValue: {
            get: function() {
                console.log(this.value)
                return this.value
            },
            set: function() {
                console.log('change r')
                // Communicate the change to parent component so that selectedValue can be updated
                this.$emit("change", this.label)
            }
        }
    }
}
</script>
<style scoped>
/* 
 .button-radio , .button-radio input {
    display:block;
    position:absolute;
    top:10px;
    left:0;
    right:0;
    bottom:0;
} */
.button-radio {
    color: #666;
}
.button-radio input[type="radio"] {
    opacity:0.01;
    z-index:100;
    display: none
}

.button-radio.checked
{
    color:#008FFF;
    /* color: #ffffff; */
}

.button-radio  {
     /* border:1px solid #CCC;  */
     cursor:pointer;
    z-index:90;
    padding: 5px;
    margin-right: 0px;
    margin-left: 0px;
    box-sizing: border-box;
    
}

.button-radio:hover {
     background:rgb(62, 138, 197);
     color: #ffffff;
}
</style>

