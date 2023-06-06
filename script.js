let div1=document.createElement('div');
div1.setAttribute('class','container');
div1.setAttribute('id','mainCointainer');

let para=document.createElement('p');
para.textContent='Click the below button to see the details of Pokemon';
para.setAttribute('class','para');
document.body.append(para);

let button=document.createElement('button');
button.setAttribute('id','btn');
button.textContent='pokemon Go';
div1.appendChild(button);
document.body.appendChild(div1);

let btn=document.querySelector('#btn');

btn.addEventListener('click',getname);

async function getname(){
        try {
                let getpokestatus=await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
                .then(response=>response.json())
                .then(data=>{
                        data.results.map(pokestatus=>{
                        getstatus(pokestatus)
                        })
                return data
                })
                
        } catch (error) {
              console.error(error)  
        }
       
};
let getmaincontainer=document.querySelector('#mainCointainer');  
let getstatus=async(charstatus)=>{
        try {
                let instatus=await fetch(charstatus.url)
                .then(response=>response.json())
                .then(data=>{

                        let card=document.createElement('div');
                        card.setAttribute('class','card');
                       

                       let cardbody=document.createElement('div');
                       cardbody.setAttribute('class','card-body');

                       let h2=document.createElement('h2');
                       h2.setAttribute('class','card-title');
                       h2.textContent=charstatus.name;
                       cardbody.append(h2);
                       let br=document.createElement('br');
                       cardbody.append(br);

                       let h0=document.createElement('h5');
                       h0.setAttribute('class','p');
                       h0.textContent='Type:';
                       cardbody.append(h0);
                       let p0=document.createElement('p');
                       p0.setAttribute('class','card-text');
                       p0.textContent=data.types.map(type=>{
                        return type.type.name
                       });
                       cardbody.append(p0);

                       let h5=document.createElement('h5');
                       h5.setAttribute('class','p');
                       h5.textContent='Ability:';
                       cardbody.append(h5);
                       let p=document.createElement('p');
                       p.setAttribute('class','card-text');
                       p.textContent=data.abilities.map(abilities=>{
                        return abilities.ability.name
                       });
                       cardbody.append(p);

                       let h6=document.createElement('h5');
                       h6.setAttribute('class','p1');
                       h6.textContent='Moves:';
                       cardbody.append(h6);
                       let p1=document.createElement('p');
                       p1.setAttribute('class','card-text1');
                       p1.textContent=data.moves.map(moves=>{
                        return moves.move.name
                      });
                       cardbody.append(p1);

                      
                       let h8=document.createElement('h5');
                       h8.setAttribute('class','p3');
                       h8.textContent='Height:';
                       cardbody.append(h8);
                       let p3=document.createElement('p');
                       p3.setAttribute('class','card-text3');
                       p3.textContent=data.height;
                       cardbody.append(p3);

                       let h7=document.createElement('h5');
                       h7.setAttribute('class','p2');
                       h7.textContent='Weight:';
                       cardbody.append(h7);
                       let p2=document.createElement('p');
                       p2.setAttribute('class','card-text2');
                       p2.textContent=data.weight;
                       cardbody.append(p2);


                       card.append(cardbody);
                       getmaincontainer.append(card);


                })
        } catch (error) {
                console.error(error)
        }
};
