import css from "./stikers.module.css";
import { useState } from "react";
export default function StickerList({stikers}){
    const [sticker,setSticker] = useState("")
    const showName=(label)=>{
        setSticker(label)
        counter(label);
    }
    const [selectedArr, setSelected] = useState(()=>{
        let savedStik = localStorage.getItem("stikers");
        return savedStik ? JSON.parse(savedStik) : [];
    });
    const addToSel=(stiker)=>{
            if(!selectedArr.includes(stiker)){
                let newArr = [...selectedArr, stiker];
                setSelected(newArr);
                localStorage.setItem("stikers", JSON.stringify(newArr));
            }  
        return selectedArr
    }
    const deleteFromSel=(label)=>{
        let filteredList = selectedArr.filter(stik => stik !== label)
        setSelected(filteredList);
        localStorage.setItem("stikers", JSON.stringify(filteredList)) 
    }
    const handleToggle = (label) =>{
         if (selectedArr.includes(label)) {
            deleteFromSel(label);
        } else {
            addToSel(label); 
        }
    }
    const [number,setNumber]= useState(()=>{
        const counters = {};
        stikers.forEach(stik => {
            counters[stik.label] = 0
        });
        return counters
    });
    const counter =(label)=>{
        setNumber(prev=>({
            ...prev,
        [label]: prev[label]+1
        }))
    }
    return(<>
    <ul className={css.stickerList}>
        {stikers.map(stiker => (<li className={css.stickerList_li} onClick={event => {showName(stiker.label); }}>
            <img src={stiker.img} alt={stiker.label} width="100px" height="100px"/>
            <button className={css.select} onClick={event => handleToggle(stiker.label)}>
                <svg width="30px" height="30px" viewBox="5 5 90 85" xmlns="http://www.w3.org/2000/svg" >
                    <polygon  points="50,5 61,35 95,35 67,57 78,90 50,70 22,90 33,57 5,35 39,35" fill={selectedArr.includes(stiker.label) ? "gold" : "none"} stroke="black" strokeWidth="4" />
                </svg>
            </button>
            <p className={css.counterText}>{number[stiker.label]}</p>
        </li>))}
    </ul>
    <p className={css.label}>You selected : <span className={css.choice}>{sticker}</span> </p>
    <div className={css.selectedCont}>
        <p className={css.title}>Selected :</p>
        <ul className={css.selectedList}>
            {selectedArr.map(selected => (<li><p className={css.selectedEl}>{selected}</p></li>))}</ul>  
    </div>
    </>)
}