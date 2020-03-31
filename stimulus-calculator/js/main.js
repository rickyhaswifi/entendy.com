document.addEventListener("DOMContentLoaded", function() {
  const TaxStatus = document.getElementById('TaxStatus');
  const KidSlider = document.getElementById("KidSlider");
  const responseWrap = document.getElementById('responseWrap');
  const SingleMoney = 1200;
  const MarriedMoney = 2400;
    
    TaxStatus.addEventListener('change', isMarried = () => {
      const TaxStatusResponse = document.getElementById('TaxStatusResponse');
      if (TaxStatus.value === 'single') {
        TaxStatusResponse.innerHTML = (`You get <span class='azul'>$${SingleMoney}</span>`)
        responseWrap.innerHTML = ('')
        return(SingleMoney)
      } else if (TaxStatus.value === 'married') {
        TaxStatusResponse.innerHTML = (`You get <span class='verde'>$${MarriedMoney}</span>`)
        responseWrap.innerHTML = ('')
        return(MarriedMoney)
      } else if(TaxStatus.value === 'dependant') {
        
        responseWrap.innerHTML = ('NO MONEY')
        TaxStatusResponse.innerHTML = ('')
        KidCount.innerHTML = ('')
        TotalAmount.innerHTML = ('')
      }
    })
    
    KidSlider.addEventListener("change", KidCalc = () => {
      let MarriageResponse = isMarried();
      const KidTotal = (KidSlider.value * 500)
      const KidCount = document.getElementById("KidCount")
    KidCount.innerHTML = (`Total for ${KidSlider.value} kids is <span class='verde'>$${KidTotal}</span>`)
    responseWrap.innerHTML = ('')
  
  
    document.getElementById('TotalAmount');
    const TheTotal = (KidTotal + MarriageResponse).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    TotalAmount.innerHTML = (`Your check will be <span class='pago'>$${TheTotal}</span>`);
    responseWrap.innerHTML = ('');
    })
  })
  
  
  const tryAgain = document.getElementById('tryAgain')
  tryAgain.addEventListener('click', Reset = () => {
  TaxStatus.value = ('')
  KidSlider.value = 0
  responseWrap.innerHTML = ('')
  TaxStatusResponse.innerHTML = ('')
  KidCount.innerHTML = ('')
  TotalAmount.innerHTML = ('')
  })