import React from "react";


function Card(){


  const data=[
    {
    name:"3 idiots",
    Realesed:"2010-02-13",
    budget:"13 cr",
    earning:"1000cr"

    },
        {
    name:"Interseller",
    Realesed:"2015-02-13",
    budget:"130 cr",
    earning:"1000cr"

    },
        {
    name:"prem geet",
    Realesed:"2010-02-13",
    budget:"13 cr",
    earning:"5000cr"

    },
        {
    name:"Dream",
    Realesed:"2020-05-13",
    budget:"10 cr",
    earning:"500cr"

    }




  ]

    return(

    
      <div className="p-10 grid gap-6 grid-cols-1 md:grid-cols-2 ">
     { data.map(
        (data,index) => (
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200" key={index}>
            <p className="text-lg font-semibold mb-1">Movie Name: <span className="font-normal">{data.name}</span></p>
              <p className="">Released Date: <span className="mb-1">{data.Realesed}</span></p>
               <p className="">Budget: <span className="mb-1">{data.budget}</span></p>
                <p className="">Earning: <span className="">{data.earning}</span></p>
                <button type="submit" className="border-2 rounded-2xl cursor-pointer p-1 mt-7 ml-40 bg-amber-200">Watch</button>
             </div>
        )

        
     
      )}

      </div>
    
    
    
    




    );
}






export default Card;