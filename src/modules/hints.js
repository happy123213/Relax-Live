const showHint = (icon) => {
        let target = (icon != event) ? icon : event.target;
        if(target == event.target){
            if(target.closest('.formula-item__icon')){
                target.closest('.formula-item__icon').classList.toggle('active-item');
                let h = document.querySelector(`.formula-item-popup-${target.textContent}`).offsetHeight;
                target = event.target.closest('.formula-item');
                const popupInfo = target.querySelector('.formula-item-popup')
                if(event.clientY < h*1.5){
                    target.closest('.formula-item').style.cssText = `z-index: 1`;
                    popupInfo.style.cssText = `
                        visibility: visible;
                        opacity: 1;
                        transform: rotateZ(180deg);
                        bottom: -${h + 75}px;
                    `;
                    popupInfo.querySelector('div').style.cssText = `
                        transform: rotateZ(180deg);
                    `;
                } else {
                    popupInfo.style.cssText = `
                        visibility: visible;
                        opacity: 1;
                        bottom: 90px;
                        transform: rotateZ(0);
                    `;
                    popupInfo.querySelector('div').style = '';
                }
            }
        } else{
            target.classList.add('active-item');
            let h = target.textContent.trim();
            h = h.replace(/\D+/g, '');
            h = target.querySelector(`.formula-item-popup-${h}`).offsetHeight;
            target = target.closest('.formula-item');
            const popupInfo = target.querySelector('.formula-item-popup');
            target.closest('.formula-item').style.cssText = `z-index: 1`;
                    popupInfo.style.cssText = `
                        visibility: visible;
                        opacity: 1;
                    `;
        }
        
};

const hideHint = () => {
    if(document.documentElement.clientWidth > 577){
        const target = event.target;
        if(target.closest('.formula-item__icon-inner-text')){
            target.closest('.formula-item__icon').classList.toggle('active-item');
            document.querySelector(`.formula-item-popup-${target.textContent}`).style.cssText = `
                visibility: hidden;
                opacity: .1;
            `;
        }
    } else{
        let target = event.target.closest('.formula-item');
        if(!target){
            if(document.querySelector('.formula-slider').querySelector('.active-item')){
                target = document.querySelector('.formula-slider').querySelector('.active-item');
                target.classList.remove('active-item');
                let h = target.textContent.trim();
                h = h.replace(/\D+/g, '');
                target.querySelector(`.formula-item-popup-${h}`).style.cssText = `
                    visibility: hidden;
                    opacity: .1;
                `;
            }
        }
    }
    
}

const hints = () => {
    if(document.documentElement.clientWidth > 577){
        document.addEventListener('mouseover', showHint);
        document.addEventListener('mouseout', hideHint);
    } else{
        document.addEventListener('click', event => {
            let target = event.target;
            if(target.closest('.formula-slider__slide') && target.closest('.formula-slider__slide').querySelector('.formula-item__icon') && !target.closest('#formula-arrow_right') && !target.closest('#formula-arrow_left')){
                showHint(target.closest('.formula-slider__slide').querySelector('.formula-item__icon'));
            } else{
                hideHint(event);
            }
        });
    }
    


};

export default hints;