var bill = document.querySelector('#bill')
var people = document.querySelector('#num_people')
var tip_amount = document.querySelector('.result_per_person')
var total_per_person = document.querySelector('.total_per_person')
var bttn_5 = document.querySelector('.bttn_5')
var bttn_10 = document.querySelector('.bttn_10')
var bttn_15 = document.querySelector('.bttn_15')
var bttn_20 = document.querySelector('.bttn_20')
var bttn_25 = document.querySelector('.bttn_25')
var custom = document.querySelector('.custom')
var reset = document.querySelector('.reset')

function billy(){
    var b = bill.value
    return b
}
function numy(){
    var a = people.value
    return a
}
function bimby(){
    var c = billy()/numy()
    total_per_person.innerHTML = '$' + c
}
function res_for_5(){
    var res = (billy()*(5/100))/numy()
    tip_amount.innerHTML = '$' + res
}
function res_for_10(){
    var res = (billy()*(10/100))/numy()
    tip_amount.innerHTML = '$' + res
}
function res_for_15(){
    var res = (billy()*(15/100))/numy()
    tip_amount.innerHTML = '$' + res
}
function res_for_20(){
    var res = (billy()*(20/100))/numy()
    tip_amount.innerHTML = '$' + res
}
function res_for_25(){
    var res = (billy()*(25/100))/numy()
    tip_amount.innerHTML = '$' + res
}
function mimy(){
    var cus = document.querySelector('.custom').value
    var res = (billy()*(cus/100))/numy()
    tip_amount.innerHTML = '$' + res
}
reset.addEventListener('click',function(){
    bttn_5.setAttribute('id','')
    bttn_10.setAttribute('id','')
    bttn_15.setAttribute('id','')
    bttn_20.setAttribute('id','')
    bttn_25.setAttribute('id','')
    tip_amount.innerHTML = '$0.00'
    total_per_person.innerHTML = '$0.00'
    bill.value = ''
    people.value = ''
})
custom.addEventListener('click',function(){
    bttn_5.setAttribute('id','')
    bttn_10.setAttribute('id','')
    bttn_15.setAttribute('id','')
    bttn_20.setAttribute('id','')
    bttn_25.setAttribute('id','')
})
bttn_5.addEventListener('click',function(){
    bttn_5.setAttribute('id','active')
    bttn_10.setAttribute('id','')
    bttn_15.setAttribute('id','')
    bttn_20.setAttribute('id','')
    bttn_25.setAttribute('id','')
    res_for_5()
    bimby()
})
bttn_10.addEventListener('click',function(){
    bttn_5.setAttribute('id','')
    bttn_10.setAttribute('id','active')
    bttn_15.setAttribute('id','')
    bttn_20.setAttribute('id','')
    bttn_25.setAttribute('id','')
    res_for_10()
    bimby()
})
bttn_15.addEventListener('click',function(){
    bttn_5.setAttribute('id','')
    bttn_10.setAttribute('id','')
    bttn_15.setAttribute('id','active')
    bttn_20.setAttribute('id','')
    bttn_25.setAttribute('id','')
    res_for_15();
    bimby()
})
bttn_20.addEventListener('click',function(){
    bttn_5.setAttribute('id','')
    bttn_10.setAttribute('id','')
    bttn_15.setAttribute('id','')
    bttn_20.setAttribute('id','active')
    bttn_25.setAttribute('id','')
    res_for_20()
    bimby()
})
bttn_25.addEventListener('click',function(){
    bttn_5.setAttribute('id','')
    bttn_10.setAttribute('id','')
    bttn_15.setAttribute('id','')
    bttn_20.setAttribute('id','')
    bttn_25.setAttribute('id','active')
    res_for_25()
    bimby()
})
