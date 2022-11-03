const bars = document.querySelectorAll('.bars-container');
const prices = document.querySelectorAll('.price');
const priceContainer = document.querySelectorAll('.price-container');

const readJson = async () => {
    const res = await fetch('/data.json');
    const datas = await res.json();


    bars.forEach((bar, index) => {
        bar.style.height = `${datas[index].amount / 10}rem`;
        bar.addEventListener('click', () => {
            priceContainer.forEach((items, index) => {
                priceContainer[index].classList.add('d-none');
                prices[index].innerHTML = `$${datas[index].amount}`
            })
            priceContainer[index].classList.remove('d-none');
        })
    });
}
readJson();



