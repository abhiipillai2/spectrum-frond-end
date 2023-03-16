//accout popup-section
//disply-action
document.getElementById("userIc").addEventListener('click', function() {
    document.querySelector(".account-div").style.display = 'block'
});

//close-action
document.getElementById("close1").addEventListener('click', function() {
    document.querySelector(".account-div").style.display = 'none'
});

//logout-action
document.getElementById("signOut").addEventListener('click', function() {
    event.preventDefault();
    firebase.auth().signOut();
    localStorage.clear();
});


//hardware connection management
//normal togle action
document.getElementById("connectionManegement").addEventListener('click', function() {

    
    document.querySelector(".connect-div").style.display = 'block'
    document.querySelector("#list2").innerHTML = ""

    //present hardware connection
    sendHttpRequest('POST', HTTP_ROOT + '/hwConnect', {
        //JSON FILE FOR PUSH
        e_mail: localStorage.getItem('eMail').toString()
        

    }).then(responseData => {
        let hardwareIds=[]
        let sensorNames=[]
        
        let ar =[]
        ar.splice(0, ar.length)
        //for deleting all element for new update
        hardwareIds.splice(0, hardwareIds.length)
        sensorNames.splice(0, sensorNames.length)
        
        

        //get value of power from db
        ar = JSON.parse(JSON.stringify(responseData))
        for (let i = 0; i < ar.length; i++) {

            hardwareIds.push(ar[i].hardware_id)
            sensorNames.push(ar[i].sensor_name)

            const list = document.querySelector(".list-2")
            let sensorTag = document.createElement("li")
            let name =document.createTextNode(ar[i].sensor_name + " ( "+ ar[i].hardware_id + " )")
            list.appendChild(sensorTag)
            sensorTag.appendChild(name)


            sensorTag.onclick = function () {
                let hardwareId = this.textContent.split('(')[1].split(')')[0].trim()
                localStorage.setItem("hwId", hardwareId)
                document.querySelector(".connect-icon").style.color = ' #7bd7c7'
                let hwFlag = 0
                localStorage.setItem("hwflag", hwFlag)

                // console.log(hadrwareId)
            };

            let removeBtn = document.createElement("button")
            let btnName =document.createTextNode("Remove connection")
            removeBtn.appendChild(btnName)
            list.appendChild(removeBtn)

            removeBtn.addEventListener("click",function(){
                let slimbling = removeBtn.previousSibling
                removeBtn.style.display ="none"
                slimbling.style.display = "none"

                let hardware_id = sensorTag.textContent.split('(')[1].split(')')[0].trim()
                document.querySelector(".connect-icon").style.color = 'red'
                if (localStorage.getItem("hwId") == hardware_id){

                    localStorage.removeItem("hwId")
                    let hwFlag = 1
                    localStorage.setItem("hwflag", hwFlag)
                }
                
                sendHttpRequest('POST', HTTP_ROOT + '/hwRm', {
                        //JSON FILE FOR PUSH
                        hardware_id: hardware_id
                })
            })

        }
        // console.log(hardwareIds)
    });	


    
});

document.getElementById("close2").addEventListener('click', function() {

    document.querySelector(".connect-div").style.display = 'none'

});

//add new device btn click
document.getElementById("connect").addEventListener('click', function() {

    document.querySelector(".connect-btn").style.display = 'none'
    // document.querySelector(".setup-title").style.display = 'none'
    document.querySelector(".present-device").style.display = 'none'
    document.querySelector(".inp").style.display = 'block'
    document.querySelector(".sensor-name").style.display = 'block'
    document.querySelector(".connect-btn-2").style.display = 'block'
    
});

//Spectrum conect v 2.1
function spectrumConnect (){
//backend action
document.getElementById("connect2").addEventListener('click', function() {
    console.log("working")
    const textArea = document.getElementById("hardWareId")
    const hwId = textArea.value

    const textAreaSensor = document.getElementById("sensorName")
    const sensorName = textAreaSensor.value
    const email = localStorage.getItem('eMail').toString()

    sendHttpRequest('POST', HTTP_ROOT + '/hwRgFU', {
        //JSON FILE FOR PUSH
        dummy: 123,
        e_mail: email,
        hardware_id: hwId,
        sensor_name : sensorName
    })

    localStorage.setItem("hwId", hwId)
    document.querySelector(".connect-icon").style.color = ' #7bd7c7'
    let hwFlag = 0
    localStorage.setItem("hwflag", hwFlag)

    document.querySelector(".connect-btn").style.display = 'block'
    document.querySelector(".present-device").style.display = 'block'
    document.querySelector("#list2").innerHTML = ""
    // document.querySelector(".present-device").list.innerHTML = ""

    document.querySelector(".inp").style.display = 'none'
    document.querySelector(".sensor-name").style.display = 'none'
    document.querySelector(".connect-btn-2").style.display = 'none'


    
        sendHttpRequest('POST', HTTP_ROOT + '/hwConnect', {
            //JSON FILE FOR PUSH
            e_mail: localStorage.getItem('eMail').toString()
            
    
        }).then(responseData => {
            let hardwareIds=[]
            let sensorNames=[]
            
            let ar =[]
            ar.splice(0, ar.length)
            //for deleting all element for new update
            hardwareIds.splice(0, hardwareIds.length)
            sensorNames.splice(0, sensorNames.length)
            // document.querySelector(".present-device").list.innerHTML = ""
            

            //get value of power from db
            ar = JSON.parse(JSON.stringify(responseData))
            for (let i = 0; i < ar.length; i++) {

                hardwareIds.push(ar[i].hardware_id)
                sensorNames.push(ar[i].sensor_name)

                const list = document.querySelector(".list-2")
                let sensorTag = document.createElement("li")
                let name =document.createTextNode(ar[i].sensor_name + " ( "+ ar[i].hardware_id + " ) ")
                list.appendChild(sensorTag)
                sensorTag.appendChild(name)


                sensorTag.onclick = function () {
                    let hadrwareId = this.textContent.split('(')[1].split(')')[0].trim();
                    localStorage.setItem("hwId", hadrwareId)
                    let hwFlag = 0
                    localStorage.setItem("hwflag", hwFlag)
                    document.querySelector(".connect-icon").style.color = ' #7bd7c7'
                    // console.log(hadrwareId)
                };

                let removeBtn = document.createElement("button")
                let btnName =document.createTextNode("Remove connection")
                removeBtn.appendChild(btnName)
                list.appendChild(removeBtn)

                removeBtn.addEventListener("click",function(){
                    let slimbling = removeBtn.previousSibling
                    removeBtn.style.display ="none"
                    slimbling.style.display = "none"

                    let hardware_id = sensorTag.textContent.split('(')[1].split(')')[0].trim();
                    document.querySelector(".connect-icon").style.color = 'red'
                    if (localStorage.getItem("hwId") == hardware_id){
                    
                        localStorage.removeItem("hwId")
                        let hwFlag = 1
                        localStorage.setItem("hwflag", hwFlag)
                    }
                    sendHttpRequest('POST', HTTP_ROOT + '/hwRm', {
                        //JSON FILE FOR PUSH
                        hardware_id: hardware_id
                    })
                })

            }
            // console.log(hardwareIds)
        });	

   
})

}
//spectrum connect function call
spectrumConnect()

//connection btn common action
if(localStorage.getItem("hwflag") == 0){
    document.querySelector(".connect-icon").style.color = ' #7bd7c7'
}
else if (localStorage.getItem("hwflag") == 1){
    document.querySelector(".connect-icon").style.color = 'red'
}


//connection btn common action
if(localStorage.getItem("hwflag") == 0){

    document.getElementById("presentDevice").textContent = localStorage.getItem("hwId")
}
else if (localStorage.getItem("hwflag") == 1){
    document.getElementById("presentDevice").textContent = "No device connected"
}