import { useState } from "react"

function App() {

   const colorMap = {
  darkBlue: "bg-[#001a20]",
  teal: "bg-[#086f5b]",
  navy: "bg-[#062e48]",
  green: "bg-[#043927]",
  ocean: "bg-[#033f4e]",
  maroon: "bg-[#4d0604]",
};

  const TextColorMap = {
  darkBlue: "text-[#001a20]",
  teal: "text-[#086f5b]",
  navy: "text-[#062e48]",
  green: "text-[#043927]",
  ocean: "text-[#033f4e]",
  maroon: "text-[#4d0604]",
};
  const [data , setData] = useState({
    name : "Rubina",
    domain :"Graphic designer",
    phone : "+58 4555548521",
    email : "example@gmail.com",
    city : "New York",
    linked : "LinkedIn",
    github : "Github",
    profile : "Enter your profile description....Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum corporis officiis sint, ratione quasi pariatur.",
    education : [
      {
        major : "Enter your major",
        date : "xxxx",
        institute: "Enter the institution"
      },
      {
        major : "Enter your major",
        date : "xxxx",
        institute: "Enter the institution"
      }
    ],
    achievements: [
      {
       domain:"domain",
        year: "xxxx",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum corporis officiis sint, ratione quasi pariatur. Accusantium minima ipsa modi sed, porro ad placeat sunt temporibus odio blanditiis vel voluptas."
      },
    ],
    experience: [
      {
        comp:"Company name",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis a possimus, omnis aut deserunt laudantium quasi amet molestiae consequuntur. Voluptatum aperiam corrupti hic ipsam totam placeat obcaecati, fuga maxime!"
      }
    ],
    skills: ["html","react","tailwind","css","C","Js"],
     references: [
      {
        name:"enter name",
        gmail:"Gmail",
        contact:"+5654564556"
      },
      {
        name:"enter name",
        gmail:"Gmail",
        contact:"+5654564556"
      },
    ],
    font:"sarif",
    allFont:["Impact","Sarif","Verdana","cursive","Arial","Noto","Gill Sans","Franklin Gothic Medium","Century Gothic","Calibri"],

    Color : "navy",
    TextColor:["darkBlue","teal","navy","green","ocean","maroon",],

    textColor : "navy",
    text:["darkBlue","teal","navy","green","ocean","maroon",]


  })

  const change = (field , value)=> {
    setData({...data, ...(typeof field === 'object' ? field : {[field]:value})})
  }

  const remove = (field , index) =>{
  const temp = [...data[field]]
  temp.splice(index, 1);
  change(field, temp)
}


const add = (newSection, area)=>{
  const update = [...data[newSection],area];
  change(newSection, update)
}

const [opt, changeOpt] = useState(false);

  const optChange = () =>{
    changeOpt((perv) => !perv);
  }

  const [Ai, changeAi] = useState(false);

  const AiChange = () =>{
    changeAi((perv) => !perv);
  }

  const [text, setText] = useState(false);
  
    const textChange = () =>{
      setText((perv) => !perv);
    }


  //  const changeTextColor= (e)=>{
  //     const temp = e.target.innerText;
  //     change('Color', temp)
  //   }
  
  const changeColor = (e) => {
  const temp = e.target.innerText;
  change({
    textColor: temp,
    Color: temp
  });
};

    const changeText = (e)=>{
    const temp = e.target.innerText;
    change('font',temp)
  }

  const changeShow = () =>{
    setShow((perv) => !perv);
  }
  const [show, setShow] = useState(false);


  return (
<div className="flex  bg-[#b9b7b4] overflow-x-hidden lg:flex-row flex-col">
      {/* buttons */}
  <div className=" w-full lg:w-[18%] bg-gray-50 flex flex-col pb-9 items-center px-2 py-10 lg:rounded-r-4xl">
           <h1 className="text-center text-[1.8rem] font-bold">Resume Tools</h1>
           <div className=" w-full place-items-center lg:w-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex  lg:flex-col ">
            
             <div className="flex flex-col items-center justify-center">
                {/* download button */}
                <button  className="bg-[#9a2b38] w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white  cursor-pointer" >Download PDF</button>

                     <button onClick={optChange}  className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#2a499d] cursor-pointer" >Upload Resume</button>
                         {
                              opt &&(
                                  <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex flex-col gap-2 text-black font-bold items-center justify-center">
                                    <button className=" bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Manual Edit</button>
                                  <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Ai Edit</button>
                    </div>
                        )
                      }
              </div>

{/* colours */}
              <div className="flex flex-col items-center justify-between">
                   <button onClick={textChange} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#540B14]">Change Colours</button>

                    {text && (
                          <div className=" mx-1 p-2 mt-2 bg-gray-900  rounded grid grid-cols-3 lg:grid-cols-2  gap-2">

                          {
                            data.TextColor.map((elm,idx)=>(
                            <div key={idx} onClick={changeColor} className="bg-gray-300 flex items-center justify-center text-black p-2  rounded-[5px] text-[0.6rem] md:[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                            </div>
                               ))
                           }
                         </div>
                     )}
              </div>

              <button className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#10502e]">Save Changes</button>
              <button className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#18113b]">Share Resume</button>
              
  {/* ai assitance  */}
             <div className="flex flex-col items-center justify-center">
                    <button onClick={AiChange} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#034e5f]">Ai Assistance</button>
                         {
                            Ai &&(
                                <div className="bg-gray-200 mt-2 p-2 rounded-[15px] sm:w-[80%] flex items-center flex-col gap-2 text-black font-bold">
                                       <button className=" bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Expereince</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">improve Achievements</button>
                                       <button className="bg-gray-400 p-2  w-[100px] sm:w-[100%] text-[0.8rem] md:[0.6rem] lg:text-[0.8rem] xl:text-[1.1rem] rounded-[5px]">Enhance Profile</button>
                                 </div>
                              )
                           }
             </div>



{/* font buttons */}
          <div className="flex flex-col items-center justify-between">
                <button onClick={changeShow} className=" w-[180px] h-[50px] rounded-[100px] font-bold text-[1.2rem] mt-7 text-white bg-[#9a2b38]">Change Font</button>
              {show && (
                 <div className=" mx-4 p-4 mt-2 bg-gray-900  rounded grid grid-cols-2   gap-2">

                         {
                           data.allFont.map((elm,idx)=>(
                                  <div key={idx} onClick={changeText} className="bg-gray-300 flex items-center justify-center text-black p-1  rounded-[5px] text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem]">{elm}
                            </div>
                              ))
                          }
                     </div>
              )}
          </div>

    </div>

  </div>



      {/* Resume */}
      <div className="w-[95vw] lg:w-[80vw] border-2  xl:w-[70vw] mx-auto p-3 bg-gray-100 mt-6" style={{fontFamily : data.font}}>

        {/* name */}
        <div className= {`flex flex-col items-center justify-center  gap-2  border-b py-10 ${colorMap[data.textColor]}`}>
          <input type="text"
                 value={data.name}
                 onChange={(e)=>change('name', e.target.value)}
                 className={`text-[3rem] bg-gray-200 sm:w-auto w-full text-center font-bold uppercase ${TextColorMap[data.Color]}`} 
          />
          <input type="text"
                 value={data.domain}
                 onChange={(e)=>change('domain', e.target.value)}
                 className={` text-center text-gray-500`}
          />


        </div>

        {/* Contact */}
        <div className=" flex flex-col gap-1">
          <h1 className={`text-[1.5rem] font-bold ${TextColorMap[data.Color]}`}>Contact</h1>
             <div className="flex gap-2">
                  <label >📞</label>
                  <input type="text"
                    value={data.phone}
                    onChange={(e)=>change('phone',e.target.value)}
                    className="pl-1"
                  />
             </div>
             <div className="flex gap-2">
                  <label >📩</label>
                  <input type="text"
                    value={data.email}
                    onChange={(e)=>change('email',e.target.value)}
                    className="pl-1"
                  />
             </div>
             <div className="flex gap-2">
                  <label >📍</label>
                  <input type="text"
                    value={data.city}
                    onChange={(e)=>change('city',e.target.value)}
                    className="pl-1"
                  />
             </div>
             <div className="flex gap-2">
                  <label >🔗</label>
                  <input type="text"
                    value={data.linked}
                    onChange={(e)=>change('linked',e.target.value)}
                    className="pl-1"
                  />
             </div>
             <div className="flex gap-2">
                  <label >🔍</label>
                  <input type="text"
                    value={data.github}
                    onChange={(e)=>change('github',e.target.value)}
                    className="pl-1"
                  />
             </div>
        </div>

        {/* profile */}
        <div className=" flex flex-col mt-5 gap-2">
            <h1 className={`text-[1.5rem] font-bold border-b ${TextColorMap[data.Color]}`}>Profile</h1>
            <textarea value={data.profile} 
                     onChange={(e)=>change('profile',e.target.value)}
                     className="w-full h-[25vh] p-2 bg-gray-200 sm:h-[20vh] resize-none">
            </textarea>
        </div>

        
        {/* Education */}
        <div className="  flex flex-col mt-5 gap-2">
           <div className="border-b flex justify-between ">
                 <h1 className={`text-[1.5rem] font-bold  ${TextColorMap[data.Color]}`}>Education</h1>
                   <button className="text-blue-600 text-sm mt-1"
                       onClick={()=>add('education',{
                           major: "enter your Major",
                           date: " xxxx",
                          institute: "University and institution name"
                     })}
                    >+ Add</button>
           </div>


            {
              data.education.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-1">
                         <input type="text"  
                              value={elm.major}
                              onChange={(e)=>{
                              const temp = [...data.education]
                              temp[idx].major = e.target.value
                              change('education',temp)
                            }}
                              className="px-2 w-full font-bold capitalize"
                         />

                        <input type="date"
                              value={elm.date} 
                              onChange={(e)=>{
                               const temp = [...data.education]
                               temp[idx].date = e.target.value
                              change('education',temp)
                             }}
                              className="px-2  "
                         />
                  </div>

                   <input type="text"
                        value={elm.institute}
                         onChange={(e)=>{
                         const temp = [...data.education]
                         temp[idx].institute = e.target.value
                         change('education',temp)
                        }}
                          className="px-2 "
                    />
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('education',idx)}
                  >Remove</button>

                  </div>
               ))
             }
        </div>

        {/* Achievements */}
        <div className=" flex flex-col mt-5 gap-2">
            <div className="border-b flex justify-between ">
                 <h1 className={`text-[1.5rem] font-bold  ${TextColorMap[data.Color]}`}>Achievements</h1>
                   <button className="text-blue-600 text-sm mt-1"
                       onClick={()=>add('achievements',{     
                        domain:"domain",
                        year: "xxxx",
                        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum corporis officiis sint, ratione quasi pariatur. Accusantium minima ipsa modi sed, porro ad placeat sunt temporibus odio blanditiis vel voluptas."
      
                     })}
                    >+ Add</button>
           </div>
            
             {
              data.achievements.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                  value={elm.domain}
                  onChange={(e)=>{
                const temp = [...data.achievements]
                temp[idx].domain = e.target.value
                change('achievements',temp)
              }}
                  className="px-2 uppercase font-bold"
                  />
                  <input type="text"
                  value={elm.year} 
                  onChange={(e)=>{
                const temp = [...data.achievements]
                temp[idx].year = e.target.value
                change('achievements',temp)
              }}
                  className="px-2 text-blue-600"
                  />

                  <textarea 
                  value={elm.desc}
                  onChange={(e)=>{
                const temp = [...data.achievements]
                temp[idx].desc = e.target.value
                change('achievements',temp)
                 }}
                  className="px-2  h-[32vh] bg-gray-200 sm:h-[20vh] resize-none"
                  ></textarea>
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('achievements',idx)}
                  >Remove</button>

                </div>
              ))
            }
        </div>


        {/* Experience */}
        <div className=" flex flex-col mt-5 gap-2">
            <div className="border-b flex justify-between ">
                 <h1 className={`text-[1.5rem] font-bold  ${TextColorMap[data.Color]}`}>Experience</h1>
                   <button className="text-blue-600 text-sm mt-1"
                       onClick={()=>add('experience',{     
                           comp:"Company name",
                           desc:"highlight your gained experince journey"
                     })}
                    >+ Add</button>
           </div>
            
             {
              data.experience.map((elm,idx)=>(
                <div key={idx} className="flex flex-col hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                  value={elm.comp}
                  onChange={(e)=>{
                const temp = [...data.experience]
                temp[idx].comp = e.target.value
                change('experience',temp)
              }}
                  className="px-2 font-bold uppercase"
                  />

                  <textarea 
                  value={elm.desc}
                  onChange={(e)=>{
                const temp = [...data.experience]
                temp[idx].desc = e.target.value
                change('experience',temp)
                 }}
                  className="px-2 bg-gray-200 h-[25vh] resize-none"
                  ></textarea>
                  
                  <button className="text-red-500  w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('experience',idx)}
                  >Remove</button>

                </div>
              ))
            }
        </div>


           {/* Skills*/}
        <div className=" flex flex-col mt-5 gap-2">
           <div className="border-b flex justify-between ">
                 <h1 className={`text-[1.5rem] font-bold  ${TextColorMap[data.Color]}`}>Skills</h1>
                  <button className="text-blue-600 text-sm mt-1"
                    onClick={()=>add('skills',"enter your skill")}
                  >+ Add</button>
           </div>

           {
              data.skills.map((elm,idx)=>(
                <div key={idx} className="flex justify-between hover:border hover:border-gray-300">
                  <input type="text"  
                  value={elm}
                  onChange={(e)=>{
                    const temp  = [...data.skills]
                    temp[idx] = e.target.value;
                    change('skills',temp)
                  }}
                  className="px-2 w-full gap-1 uppercase"
                  />
                  
                  <button className="text-red-500 text-sm  w-[80px] mt-1 text-left px-3"
                  onClick={()=>remove('skills',idx)}
                  >Remove</button>

                </div>
              ))
            }


            
        </div>


         {/* Reference */}
        <div className="  flex flex-col mt-5 gap-2">
           <div className="border-b flex justify-between ">
                 <h1 className={`text-[1.5rem] font-bold  ${TextColorMap[data.Color]}`}>Reference</h1>
                   <button className="text-blue-600 text-sm mt-1"
                       onClick={()=>add('references',{
                           name:"enter name",
                           gmail:"Gmail",
                           contact:"+5654564556"
                     })}
                    >+ Add</button>
           </div>


          <div className="  grid grid-cols-1 sm:grid-cols-2 gap-2">
              {
              data.references.map((elm,idx)=>(
                <div key={idx} className="flex flex-col  hover:border hover:border-gray-300 my-5">
                  <input type="text"  
                          value={elm.name}
                          onChange={(e)=>{
                          const temp = [...data.references]
                          temp[idx].name = e.target.value
                          change('references',temp)
                        }}
                         className="px-2 font-bold capitalize"
                  />

                  <input type="email"
                  value={elm.gmail} 
                  onChange={(e)=>{
                const temp = [...data.references]
                temp[idx].gmail = e.target.value
                change('references',temp)
              }}
                  className="px-2 "
                  />


                  <input type="text"
                  value={elm.contact}
                  onChange={(e)=>{
                const temp = [...data.references]
                temp[idx].contact = e.target.value
                change('references',temp)
              }}
                  className="px-2 "
                  />
                  
                  <button className="text-red-500 w-[80px] text-sm mt-1 text-left px-3"
                  onClick={()=>remove('references',idx)}
                  >Remove</button>

                </div>
              ))
            }
          </div>


        </div>
        </div>

      </div>
    
    
  )
}

export default App
