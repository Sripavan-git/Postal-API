function getData() {
    //alert('function called');
    const pcode = document.getElementById('postalCode').value;
    const url = `https://api.postalpincode.in/pincode/${pcode}`;
    

    
        fetch(url).then((data) => {
            //console.log(data);  --> API data
            return data.json();   // converted the API data to js Object Data
        }).then((objectData) => {
            //console.log(objectData);
            const postOffices = objectData[0].PostOffice;
            
            // we are getting the data of the API in the data
            // we are converting the data into JSON and storing it in the objectData
            // all the postalcode details are in the objectData[0].PostOffice 
            // we are storing the postoffices
            // we are iterating through the values and setting the each one of it into the table

            let tabledt = '';
            postOffices.map((values)=>{
                tabledt += `<tr>
                <td>${values.Name}</td>
                <td>${values.Description}</td>
                <td>${values.BranchType}</td>
                <td>${values.DeliveryStatus}</td>
                <td>${values.Circle}</td>
                <td>${values.District}</td>
                <td>${values.Division}</td>
                <td>${values.Region}</td>
                <td>${values.Block}</td>
                <td>${values.State}</td>
                <td>${values.Country}</td>
                <td>${values.Pincode}</td>
              </tr>`;
            });
            document.getElementById("tableBody").innerHTML=tabledt;
        })
        
    
    
}