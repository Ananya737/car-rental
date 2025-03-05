


let fetchData=async()=>{
    let url='http://localhost:3000/car';
    let res = await fetch(url,{method:"GET"});
    let data = await res.json();
    console.log(data);

    let display=document.querySelector("#display");

    data.map((e)=>{
        display.innerHTML+= `
                             <tr >
                             <td>${e.name}</td>
                             <td>${e.number}</td>
                             <td>${e.email}</td>
                             <td>${e.chooseCar}</td>
                             <td>${e.pickUp}</td>
                             <td>${e.dropOff}</td>
                             <td>${e.pickUpDate}</td>
                             <td>${e.returnDate}</td>
                             <td onclick="deletee('${e.id}')">Delete Data</td>
                             <td onclick="Updatee('${e.id}')">Update</td>

                             </tr>
                             
        `                      
    }

    )
    
}


let deletee=(id)=>{
    let url=`http://localhost:3000/car/${id}`;

    fetch(url,{method:"DELETE"});
 
}

let updatee=()=>{
    let url=`http://localhost:3000/car/${id}`;
    fetch(url,{method:"PUT"});
}








let rentt=()=>{
    let inpname=document.querySelector("#name").value;
    let inpnumber=document.querySelector("#number").value;
    let inppickup=document.querySelector("#pickUp").value;
    let inpdropoff=document.querySelector("#dropOff").value;
    let inpemail=document.querySelector("#email").value;
    let inpchoosecar=document.querySelector("#chooseCar").value;
    let inppickdate=document.querySelector("#pickDate").value;
    let inpreturndate=document.querySelector("#returnDate").value;

    

        let url= 'http://localhost:3000/car';
        fetch(url,{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(
                {
                    name:inpname,
                    number:inpnumber,
                    pickUp:inppickup,
                    dropOff:inpdropoff,
                    email:inpemail,
                    chooseCar:inpchoosecar,
                    pickUpDate:inppickdate,
                    returnDate:inpreturndate
                }
               

            )
        });

        location.href="Table.html";

        return false;
        
    }
    
       




