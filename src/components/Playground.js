import React, {useState} from 'react'

const randomData = () => {
    let array = []
    while (array.length < 16) {
        let id = Math.floor(Math.random() *8)
        // console.log(id);
        let findIndex = array.filter(a => a.id === id)
        // console.log(findIndex);
        if(findIndex.length < 2){
            let obj = {
                id: id,
                showImg: false
            }
            array.push(obj)
        }
    }
    
    return array
}


const Playground = () => {
    
    const [data, setData] = useState(randomData())

    const [selected, setSelected] = useState([])

    const [winData, setWinData] = useState([])
    
    const handleClick = (id, index) => {
        let newArray = [...data]
        newArray[index].showImg = !newArray[index].showImg
        setData(newArray)
        
        if(!selected[0]){
            
            setSelected([id])
        }else if(!selected[1]){
            setSelected([...selected, id])
        }else if(selected[0] !== selected[1]){
            setSelected([])
        }else if(selected[0] === selected[1]){
            setWinData([...winData, selected[0]])
            setSelected([])
        }
    }

    const chkWin = (index, array) => {
        if(!selected[0]){
          setSelected([index])  
        }
        else if(!selected[1]){
            setSelected([index])
        }
        else if(selected[0] === selected[1]){
            // win
        }else if(selected[0] !== selected[1]){

        }
    }

    return (
        <div>
            <div style={{width: '600px', height: '500px'}} class="row">
                {data && data.map((d, index) => (
                    <div key={index} className="col-3 d-flex justify-content-center align-items-center border" style={{width: '8rem', height: '8rem', background: d.showImg ? d.id === 0 ? "red" : d.id === 1 ? "blue" : d.id === 2 ? "yellow" : d.id=== 3 ? "green" : d.id=== 4 ? "orange" : d.id === 5 ? "black" : d.id=== 6 ? "purple" : d.id === 7 ? "pink" : "" : ""}}
                        onClick={() => handleClick(d.id, index)}
                    >{d.id} + {index}</div>
                ))}
            </div>
        </div>
    )
}

export default Playground
