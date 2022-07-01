fetch('Fetch random quotes using an API')
.then(data => data.json())
.then(quoteData => {
    const quoteText =quoteData.quote.text;
    const quoteElement=document.getElementById('quoteElement');
    quoteElement.innerHTML = quoteText;
})