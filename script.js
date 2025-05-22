// Thay URL này bằng Google Apps Script Web App URL của Đại ca
const scriptURL = 'https://script.google.com/macros/s/AKfycby8AWt_z-FT3aeY_ps70fJuWpsRF73DX_uGgYCMigvPGmvvNVTpEqvOUUqxyrsGWjKG_A/exec';

const form = document.getElementById('surveyForm');
const status = document.getElementById('status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = {
    hoten: form.hoten.value,
    chi_phi: form.chi_phi.value
  };

  status.innerText = 'Đang gửi...';

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(response => {
    status.innerText = 'Gửi thành công!';
    form.reset();
  })
  .catch(error => {
    console.error('Error!', error.message);
    status.innerText = 'Lỗi gửi dữ liệu!';
  });
});
