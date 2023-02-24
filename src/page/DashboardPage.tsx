import React, { FC, useState, useEffect } from 'react'
import Italy from '../image/Italy.png'
import UK from '../image/UK.png'
import USA from '../image/USA.png'
import Germany from '../image/Germany.png'
import France from '../image/France.png'
import China from '../image/China.png'
import Romania from '../image/Romania.png'
import South_Korea from '../image/South_Korea.png'
import Netherlands from '../image/Netherlands.png'
import Japan from '../image/Japan.png'
import Russia from '../image/Russia.png'
import Australia from '../image/Australia.png'
import Sweden from '../image/Sweden.png'
import Taiwan from '../image/Taiwan.png'
import India from '../image/India.png'
import Switzerland from '../image/Switzerland.png'
import Malaysia from '../image/Malaysia.png'
import Spain from '../image/Spain.png'
import Czech_Republic from '../image/Czech Republic.png'
import Austria from '../image/Austria.png'
import Serbia from '../image/Serbia.png'
import Ukraine from '../image/Ukraine.png'
import Denmark from '../image/Denmark.png'

function DashboardPage () {
    const [data, setData] = useState([{
        make_country : "",
        make_display : "",
        make_id : "",
        make_is_common : ""
    }]);

    const [cty, setCty] = useState([""]);
    const [cars, setCars] = useState([[""]]);
    const [carcount, setCarcount] = useState([0]);

    useEffect(() => {
		const fetchData = async () => {
			const temp = await fetch('https://gist.githubusercontent.com/ak1103dev/2c6c1be69300fa0717c62b9557e40e75/raw/0dc78ed8783f4c54345ee3eeac410d26805d2dbc/data.txt');
            const txt = await temp.text();

            let json = [];
            let ctry = [""]
            ctry.splice(0);
            let ccar = [[""]]
            ccar.splice(0);
            let ccount = [0]
            ccount.splice(0);
            let cartyp = [""]
            cartyp.splice(0);
            
            let sub = "";
            for(let i=12; i<txt.length-4; i++){
                if(sub.length != 0){
                    sub = sub + txt[i];
                    if(txt[i] == '}'){
                        let subP = JSON.parse(sub);
                        json.push(subP);
                        //console.log(sub)

                        if (ctry.includes(subP.make_country)){  
                            ccount[ctry.indexOf(subP.make_country)] = ccount[ctry.indexOf(subP.make_country)] + 1;
                            ccar[ctry.indexOf(subP.make_country)].push(subP.make_display)
                        }
                        else{
                            ctry.push(subP.make_country);
                            ccount.push(1)
                            ccar.push([subP.make_display])
                        }



                        if (cartyp.includes(subP.make_display)){  
                        }
                        else{
                            cartyp.push(subP.make_display);
                        }
                        sub = ""
                    }
                }
                else{
                    if(txt[i] == '{'){
                        sub = sub + txt[i];
                    }
                }

            }
            
            //console.log(ctry);
            setCarcount(ccount)
            setCty(ctry)
            setCars(ccar)
            setData(json)



		}
		fetchData();
	},[]);

    //console.log(data)
    //className='dashblock'
    return (
        <div>
        {cars.map((cars, idx) => (
            <div key={idx} className='dashgrid'>
                <div className='tabletitle1'>Country</div>
                <div className='tabletitle2'>Brand</div>
                <div className='nation'>{cty[idx]}. ({carcount[idx]} Brands.)</div>
                <div className='cars'>
                    {cars.map((car,idx2) => (
                        <div key={idx2} >
                            {car}
                        </div>
                    ))}
                </div>
            </div>
        ))}

            <form action="/">
                <button className='dashLogout'>Logout</button>
            </form>
        </div>
    )
}

export default DashboardPage