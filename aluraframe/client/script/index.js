const allCampos = [
  document.querySelector('#data'),
  document.querySelector('#quantidade'),
  document.querySelector('#valor'),
];

console.log(allCampos);
const tBody = document.querySelector('table tbody');
document.querySelector('.form').addEventListener('submit', function(event) {
  event.preventDefault();
  const tr = document.createElement('tr');
  allCampos.forEach((campo) => {
    const td = document.createElement('td');
    td.textContent = campo.value;
    tr.appendChild(td);
  });

  const tdVolume = document.createElement('td');
  tdVolume.textContent = allCampos[1].value * allCampos[2].value;

  tr.appendChild(tdVolume);
  tBody.appendChild(tr);

  allCampos[0].value = '';
  allCampos[1].value = 1;
  allCampos[2].value = 0;

  allCampos[0].focus();
})