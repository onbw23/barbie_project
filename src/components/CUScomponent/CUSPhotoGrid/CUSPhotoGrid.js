import React, {useState, useEffect} from 'react';
import 'css/componentCss/photoGrid.scss'
import imageFiles from 'components/funtion/images'
import CUSButton from '../CUSButton';

const CUSPhotoGrid = ({ labelText, func }) => {
    const [isMore, setIsMore] = useState(true);
    const [pQty, setPQty] = useState(10);
    const [photoDialog, setPhotoDialog] = useState({open: false, id:'', src: ''});

    const photoQty = imageFiles.length

    useEffect(() => {
        if(photoDialog.open) {
            document.body.style= `overflow: hidden`;
        }
        return () => document.body.style = `overflow: auto`
      }, [photoDialog])
    
    const setQty = () => {
        let temp = pQty + 10
        if(temp >= photoQty) {
            temp = photoQty - 1
            setIsMore(false)
        }
        setPQty(temp)
    }
    const openDialog = (id) => {
        const doc = document.getElementById(id);
        
        setPhotoDialog({open:true, id: id, src: doc.src})
    }
    const closeDialog = (e) => {
        setPhotoDialog({open:false, id: '', src: ''})
    }
    const nextPhoto = () => {
        let nextIdNum = Number(photoDialog.id.substring(4)) + 1
        if(nextIdNum >= pQty) {
            nextIdNum = '0'
        }
        const nextId = 'main' + nextIdNum
        const doc = document.getElementById(nextId)
        setPhotoDialog({open:true, id: nextId, src: doc.src})
    }
    const prevPhoto = () => {
        let prevIdNum = Number(photoDialog.id.substring(4) - 1)
        if(prevIdNum < 0) {
            prevIdNum = pQty - 1
        }
        const prevId = 'main' + prevIdNum
        const doc = document.getElementById(prevId)
        setPhotoDialog({open:true, id: prevId, src: doc.src})
    }
    return (
      <div className='title-item'>
            <div className="photo-grid">
                {imageFiles.filter((e,i) => i < pQty ).map((imageFile, index) => (
                <div key={index} className="photo-box">
                      <img src={imageFile} alt={`Img ${index}`} id={`main${index}`}onClick={e => openDialog(e.target.id)}/>
                </div>
                ))}
            </div>
            {isMore ? <CUSButton labelText='더보기' onClick={e => setQty()}/> : <></>}
            {pQty !== 10 ? <CUSButton labelText='줄이기' onClick={e => {setPQty(10); setIsMore(true); func()}}/> : <></>}
            {photoDialog.open ? 
                <div className='dialog-base' onClick={e => { closeDialog(e)}} >
                    <div onClick={e => e.stopPropagation()}> 
                        <CUSButton className='dialog-btn prev' labelText='<' onClick={prevPhoto}/>
                        <div className='photo-dialog' >
                            <img className='photo-dialog-item' src={photoDialog.src} alt={`dlg ${photoDialog.id}`} id={photoDialog.id} />
                        </div> 
                        <CUSButton className='dialog-btn next' labelText='>' onClick={nextPhoto}/>
                    </div>
                </div>   
                : <></>}
      </div>
    );
}

export default CUSPhotoGrid;
