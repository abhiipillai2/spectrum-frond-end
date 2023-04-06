//common action
document.getElementById("compareMode").addEventListener('click',function (){

    document.querySelector(".compare-mode").style.display = 'block'
})

document.getElementById("closeBtnTwo").addEventListener('click',function (){

    document.querySelector(".compare-mode").style.display = 'none'
})



const satartDtae1 = document.getElementById("startDate1")
const endDtae1 = document.getElementById("EndDate1")

document.getElementById("getData2").addEventListener('click', function() {

  let strDt = satartDtae1.value
  let edDt = endDtae1.value

  sendHttpRequest('POST', HTTP_ROOT + '/loadCurve', {
    //JSON FILE FOR PUSH
    hardware_id: localStorage.getItem('hwId'),
    start_date:strDt,
    end_date:edDt
    

}).then(responseData => {

        //for deleting all element for new update
        loadCurveDataOne.splice(0, loadCurveDataOne.length)
        loadCurveLabelOne.splice(0, loadCurveLabelOne.length)
        //get value of power from db
        let ar = JSON.parse(JSON.stringify(responseData))
        for (let i = 0; i < ar.length; i++) {

            loadCurveDataOne.push(ar[i].avg_value)
          loadCurveLabelOne.push(ar[i].interval_start)
            console.log(ar)
        }


        compareModeOneGraphGenerator()


    });	


})

const satartDtae2 = document.getElementById("startDate2")
const endDtae2 = document.getElementById("EndDate2")

document.getElementById("getData3").addEventListener('click', function() {

  let strDt = satartDtae2.value
  let edDt = endDtae2.value

  sendHttpRequest('POST', HTTP_ROOT + '/loadCurve', {
    //JSON FILE FOR PUSH
    hardware_id: localStorage.getItem('hwId'),
    start_date:strDt,
    end_date:edDt
    

}).then(responseData => {

        //for deleting all element for new update
        loadCurveDataTwo.splice(0, loadCurveDataTwo.length)
        loadCurveLabeTwo.splice(0, loadCurveLabeTwo.length)
        //get value of power from db
        let ar = JSON.parse(JSON.stringify(responseData))
        for (let i = 0; i < ar.length; i++) {

            loadCurveDataTwo.push(ar[i].avg_value)
            loadCurveLabeTwo.push(ar[i].interval_start)
            console.log(ar)
        }


        compareModeTwoGraphGenerator()


    });	


})