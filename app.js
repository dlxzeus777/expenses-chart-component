const bars = document.querySelectorAll('.bars-container');
const prices = document.querySelectorAll('.price');
const priceContainer = document.querySelectorAll('.price-container');

const data = [
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  },
  {
    "day": "sun",
    "amount": 25.48
  }
]

const readJson = async () => {

  try {
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
  catch
  {
    alert('fetch not working');
    bars.forEach((bar, index) => {
      bar.addEventListener('click', () => {
        priceContainer.forEach((items, index) => {
          priceContainer[index].classList.add('d-none');
          prices[index].innerHTML = `$${data[index].amount}`
        })
        priceContainer[index].classList.remove('d-none');
      })
    });
  }

}
readJson();



