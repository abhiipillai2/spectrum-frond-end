//day matrix
//power
sendHttpRequest('GET', HTTP_ROOT + '/dayPower/' + httpTred + '/1').then(responseData => {

    //for deleting all element for new update
    dataMaster.splice(0, dataMaster.length)
    labelMaster.splice(0, labelMaster.length)

    //get value of power from db
    let ar = JSON.parse(JSON.stringify(responseData))
    for (let i = 0; i < ar.length; i++) {

        dataMaster.push(ar[i].avg_value)
        labelMaster.push(ar[i].day_start)
    }
    let avgPower = 0
        //avg power
    for (let n = 0; n < dataMaster.length; n++) {
        avgPower = dataMaster[n] + avgPower
    }
    document.getElementById("matrixDayPower").textContent =(avgPower / dataMaster.length).toFixed(4) + " Watt"

});

//unit
sendHttpRequest('GET', HTTP_ROOT + '/dayUnit/' + httpTred + '/1').then(responseData => {

    document.getElementById("matrixDayUnit").textContent = responseData.value.toFixed(5) + " units"

});

//tariif day

sendHttpRequest('POST', HTTP_ROOT + '/dayBill/' + httpTred + '/1', {
    //JSON FILE FOR PUSH
    provider_id: 'KSEB',
    

}).then(responseData => {

        document.getElementById("matrixDayTarrif").textContent = responseData.value.toFixed(2) + " INR"

    });	



//Month matrix
//power
sendHttpRequest('GET', HTTP_ROOT + '/monthPower/' + httpTred + '/1').then(responseData => {

    //for deleting all element for new update
    dataMaster.splice(0, dataMaster.length)
    labelMaster.splice(0, labelMaster.length)

    //get value of power from db
    let ar = JSON.parse(JSON.stringify(responseData))
    for (let i = 0; i < ar.length; i++) {

        dataMaster.push(ar[i].avg_value)
        labelMaster.push(ar[i].day_start)
    }
    let avgPower = 0
        //avg power
    for (let n = 0; n < dataMaster.length; n++) {
        avgPower = dataMaster[n] + avgPower
    }
    document.getElementById("matrixMonthPower").textContent =(avgPower / dataMaster.length).toFixed(4) + " Watt"

});

//unit
sendHttpRequest('GET', HTTP_ROOT + '/monthUnit/' + httpTred + '/1').then(responseData => {

    document.getElementById("matrixMonthUnit").textContent = responseData.value.toFixed(5) + " units"

});

//tariif day

sendHttpRequest('POST', HTTP_ROOT + '/monthBill/' + httpTred + '/1', {
    //JSON FILE FOR PUSH
    provider_id: 'KSEB',
    

}).then(responseData => {

        document.getElementById("matrixMonthTarrif").textContent = responseData.value.toFixed(2) + " INR"

    });	
